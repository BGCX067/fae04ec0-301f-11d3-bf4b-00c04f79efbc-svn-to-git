/**
 * @author phongnguyen
 */
$(document).ready(function(){
	var parseData = function(response){
		var dataReader = new DataReader({})
		var data = dataReader.parseXmlToData(response);
		var guide = new Renderer({
            placeHolder: "#test-guide", 
            data: data
        });
	}
	
	// Get data from xml file
	$.ajax({
	    url: '/global/licensing/renderingassets/ws2012/data/ws2012-aug-28.xml'
		,dataType: 'xml'
		,success: parseData
		,error: function(){alert("Error: Something went wrong");}
	});
});
