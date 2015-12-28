/**
 * @author phongnguyen
 */
function DataReader (config) {
    var setting = $.extend({
        //readFirstRow: false,
        //firstRowDataIndex: 1,
        treeNoteList: [ // Careful with the order
            "<b>{text}</b><br/>Common Topics",
            "<b>{text}</b><br/>Common Topics",
            "<b>{text}</b><br/>Common Questions",
            "<b>{text}</b><br/>Answer",
        ]
    }, config);
    var xmlContent,
        dataObject = [];
    
    function raiseError(errMess) {
        throw errMess;
    };
    
    /**
     * Return the first Worksheet from XML SpreadSheet Content
     */
    function getFirstWorksheet(xmlContent){
        if(!xmlContent){
            raiseError('xmlContent is empty');
            return;
        }
        
        var workSheets = xmlContent.find('Worksheet');
        if(workSheets.length == 0) {
            raiseError('There is not any Worksheet');
            return;
        }
        
        return $(workSheets[0]);
    }
    
    /**
     * Parse XML Row to Data Object that use to render
     */
    function extractToObject(row, maxCell, rowIndex){
        if(!row){
            raiseError('row is empty');
            return;
        }
        var colIndex = 0;
        var objHandler = null; // store current object is handling
        var dataRow = {}; // Store data of row, will be reset for each cell
        // Loop through cells in row
        row.find('Cell').each(function(index) {
            var cellData = $(this).find('Data');
            var cellMeta = $(this).attr('ss:Index');            
            var value = (cellData) ? $.trim(cellData.text()) : '';

            // New Entry
            if(index==0 && cellMeta==undefined){
                dataObject.push(newObject(value, {
                    TreeNote: setting.treeNoteList[0].replace('{text}', value),
                    toString: function(){
                        return 'Entry';
                    }
                }));
            }
            // Not a new Entry
            else{
                // It's next cell of current row
                if(cellMeta==undefined || (cellMeta && index!=0) ){
                    if(!objHandler){
                        objHandler = dataObject[dataObject.length-1];                        
                    }
                    
                    // Set Ignore value
                    var ignoreTemp = 0;
                    if(cellMeta && index!=0){
                        objHandler.ignore =  parseInt(cellMeta) - colIndex - 1;
                        ignoreTemp = objHandler.ignore;
                        // store data in row to get it later
                        dataRow.ignore = ignoreTemp; 
                    }
                    
                    // Set type
                    var className = 'Category';
                    if(isQuestionCell(maxCell, colIndex + ignoreTemp, index)){
                        className = 'Question';
                    }
                    // In case last cell is define cellMeta, need to set current ObjHander is Question
                    else if(parseInt(cellMeta) == maxCell){
                        objHandler.toString = function(){
                            return 'Question';
                        }
                    }
                    
                    if(index + dataRow.ignore - 1 == maxCell){
                        objHandler.toString = function(){
                            return 'Question';
                        }
                    }
                    
                    objHandler = addNewChildToObjHandler(objHandler, value, {
                        toString: function(){
                            return className;
                        } 
                    });
                }
                // ss:Index is defined and index is Zero, so it must be a new line
                // colIndex now must be cellMeta + current Index
                else{
                    delete dataRow.ignore;
                    colIndex = parseInt(cellMeta);
                    // detect kind of column
                    var className = 'Category';
                    if(colIndex == (maxCell-1)){
                        className = 'Question';
                    }
                    obj = getObjHandlerByIndex(colIndex-1);
                    objHandler = addNewChildToObjHandler(obj, value, {
                        toString: function(){
                            return className;
                        }
                    });
                }
            }
            var treeNoteIndex = ( (colIndex == undefined || colIndex == 0) ? index+1 : index ) + colIndex;
            var ignore = dataRow.ignore;
            if(ignore) treeNoteIndex = treeNoteIndex + ignore;
            var isQuestion = treeNoteIndex == maxCell;
            setTreeNote(objHandler, treeNoteIndex-1, isQuestion);
        });
    }
    
    /**
     * check if current cell is question type
     */
    function isQuestionCell(maxCell, colIndex, index){
        var myIndex = (colIndex == undefined || colIndex == 0) ? index+1 : index; 
        if((colIndex + myIndex) == (maxCell-1)){
            return true;
        }
        return false;
    }
    /**
     * Add a new Child to objectHandler
     * @param {Object} objectHandler
     * @param {String} type
     * @param {String} text
     * @param {Object} options
     */
    function addNewChildToObjHandler(objectHandler, text, options){
        var newChild = newObject(text, options);
        newChild.Parent = objectHandler;
        
        objectHandler.children.push(newChild);
        return newChild;
    }
    
    /**
     * Create a new Child Object
     * It also check if text have treeNote or not
     * @param {String} type
     * @param {String} text
     * @param {Object} options
     */
    function newObject(text, options){
        // detect treeNote
        var textArr = text.split(/\r\n|\r|\n/),
            obj = {
                children: []
            };
        // Set Metadata        
        if(textArr.length > 1){
            var meta = parseJSON(textArr[1]);
            // if second row is a valid json tring
            if(meta != null && typeof meta == 'object'  ){
                // set relative
                if(meta.relative){ 
                    obj.relative = meta.relative;
                }
            }
        }
        obj.Text = $.trim(textArr[0]);
        // Set Function
        obj.childLength = function(){
            return obj.children.length;
        };
        obj.getColumnIndex = function(){
            return obj.columnIndex || -1;
        };
        obj.getRelativeItem = function(){
            var relativeObj = this.relative;
            var objTemp = dataObject;
            var relativeArr = [];
            for(var i=0; i<relativeObj.length; i++){
                var arr = relativeObj[i].split('-');
                for(var j=0; j<arr.length; j++){
                    if(!objTemp.children)
                        objTemp = objTemp[arr[j]];
                    else if(objTemp.children[arr[j]])
                        objTemp = objTemp.children[arr[j]];
                }
                relativeArr.push(objTemp);
                // reset dataObject
                var objTemp = dataObject;
            }
            return relativeArr;
        }
        return $.extend(obj, options);
    }

    /**
     * set treeNote to a object
     */
    function setTreeNote(objectHandler, index, isQuestion){
        if(isQuestion==true) index -= 1;
        if(setting.treeNoteList[index] && objectHandler!=undefined){
            var note = setting.treeNoteList[index];
            var text = (isQuestion==true) ? objectHandler.Parent.Parent.Text : objectHandler.Text;
            var treeNote = note.replace('{text}', text);
            
            objectHandler.TreeNote = treeNote;
        }
    }
    
    /**
     * This function parse a string to json
     * It return false if str is not a valid json string
     */
    function parseJSON(str){
        try{
            var json = $.parseJSON(str);
            return json;
        }
        catch(err){
            return false;
        }
    }
    /**
     * Return objectHandler by figure out index level
     * @param {Object} index
     */
    function getObjHandlerByIndex(index){
        var objHandler = dataObject[dataObject.length-1];
        for(var i=1; i<index; i++){
            objHandler = objHandler.children[objHandler.children.length-1];
            if(objHandler.ignore) i+=objHandler.ignore;
        }
        return objHandler;
    }
    
    /**
     * Return current Data Object 
     */
    this.getDataObject = function(){
        return dataObject;
    };
    
    /**
     * Parse XML SpreadSheet to Data Object
     * Just only first sheet is process
     */
    this.parseXmlToData = function(xml){
        if(!xml){
            raiseError('xml is empty');
            return;
        }
        // convert to jQuery Object
        xmlContent = $(xml);
        // get first SpreadSheet
        var dataSheet = getFirstWorksheet(xmlContent);
        
        // get max cell of a column, as always, first row is row which have full cell, so we can count it.
        var maxCell = dataSheet.find('Row:eq(0)').find('Cell').length;
        // loop through rows in spreadshet to generate data object
        dataSheet.find('Row').each(function(index){
            if(index == 0) return;
            
            // convert xml to jQuery object
            var row = $(this);
            // process row data, dataObject will be modify
            extractToObject(row, maxCell, index);
        });
        return dataObject;
    };
};
