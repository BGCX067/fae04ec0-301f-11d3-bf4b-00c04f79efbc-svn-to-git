var lpMTagConfig={
    'lpServer' : 'sales.liveperson.net',
	'lpNumber' : '21661174',
	'lpProtocol' :(document.location.toString().indexOf('office2010.html')==0)? 'https' : 'http',
	'lpTagLoaded' : false,
	'lpTagSrv' : 'sales.liveperson.net',
	'pageStartTime' :(new Date()).getTime(),
    'defaultUnit' : 'NA.EN.CS.CON.PSTSLS.GENERAL'};
	
lpMTagConfig.deploymentConfigPath=lpMTagConfig.lpTagSrv+'/visitor/addons/deploy.asp';
lpMTagConfig.lpLoadScripts=function(){
   lpAddMonitorTag(lpMTagConfig.lpProtocol+'://'+lpMTagConfig.deploymentConfigPath+'?site='+lpMTagConfig.lpNumber+'&d_id='+lpMTagConfig.deploymentID);
};

function lpAddMonitorTag(src){
   if(!lpMTagConfig.lpTagLoaded){if(typeof(src)=='undefined'||typeof(src)=='object'){if(lpMTagConfig.lpMTagSrc){src=lpMTagConfig.lpMTagSrc;}else{if(lpMTagConfig.lpTagSrv){src=lpMTagConfig.lpProtocol+'://'+lpMTagConfig.lpTagSrv+'/hcp/html/mTag.js';}else{src='../../hcp/html/mTag.html';};};};if(src.indexOf('http')!=0){src=lpMTagConfig.lpProtocol+'://'+lpMTagConfig.lpServer+src+'?site='+lpMTagConfig.lpNumber;}else{if(src.indexOf('site=')<0){if(src.indexOf('?')<0){src=src+'?';}else{src=src+'&';}src=src+'site='+lpMTagConfig.lpNumber;};};var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('charset','iso-8859-1');s.setAttribute('src',src);document.getElementsByTagName('head').item(0).appendChild(s);}
}

lpMTagConfig.calculateSentPageTime=function(){
     var t=(new Date()).getTime()- lpMTagConfig.pageStartTime;
	 lpAddVars('page','pageLoadTime',Math.round(t/1000)+' sec');
};

if(typeof(lpMTagConfig.pageVar)=='undefined'){
    lpMTagConfig.pageVar=[];}
	if(typeof(lpMTagConfig.sessionVar)=='undefined'){lpMTagConfig.sessionVar=[];}
	if(typeof(lpMTagConfig.visitorVar)=='undefined'){lpMTagConfig.visitorVar=[];}
    if(typeof(lpMTagConfig.onLoadCode)=='undefined'){lpMTagConfig.onLoadCode=[];}
    if(typeof(lpMTagConfig.dynButton)=='undefined'){lpMTagConfig.dynButton=[];}
    if(typeof(lpMTagConfig.ifVisitorCode)=='undefined'){lpMTagConfig.ifVisitorCode=[];
}

function lpAddVars(scope,name,value){
    if(name.indexOf('OrderTotal')!=-1||name.indexOf('OrderNumber')!=-1){
	    if(value==''||value==0)return;
        else lpMTagConfig.sendCookies=false
	}
	value=lpTrimSpaces(value.toString());
    if(name.length>50){name=name.substr(0,50);}
	if(value.length>50){value=value.substr(0,50);}
	switch(scope){
	    case 'page': lpMTagConfig.pageVar[lpMTagConfig.pageVar.length]=escape(name)+'='+escape(value);break;
		case 'session': lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length]=escape(name)+'='+escape(value);break;
		case 'visitor': lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length]=escape(name)+'='+escape(value);break;
	}
}
function onloadEMT(){
    var LPcookieLengthTest=document.cookie;
	if(lpMTag.lpBrowser=='IE'&&LPcookieLengthTest.length>1000){
	lpMTagConfig.sendCookies=false;}
}

function lpTrimSpaces(stringToTrim){
    return stringToTrim.replace(/^\s+|\s+$/g,'');
}

function lpSendData(varscope,varname,varvalue) {
	if(typeof(lpMTag)!='undefined' && typeof(lpMTag.lpSendData)!='undefined')
		lpMTag.lpSendData(varscope.toUpperCase() +'VAR!'+ varname + '=' + varvalue, true);
}

// The unit variable purpose is to route the chat or call to the designated skill. <LOB> should be replaced with the skill name, i.e. : sales
try{
	if (typeof(lpUnit)=='undefined') { var lpUnit=lpMTagConfig.defaultUnit; }
	lpMTagConfig.deploymentID='1';
	if(typeof(lpAddVars)!='undefined') { 
	   lpAddVars('page','unit',lpUnit); 
	}
	lpMTagConfig.defaultInvite='chat'+'-'+lpUnit;
}catch(e){}

lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;

//Scan dynButton and removes buttons which doesnt have Div on the page
lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = function () {
	if(typeof(lpMTagConfig.dynButton)!='undefined') {
		for (i=0;i<lpMTagConfig.dynButton.length;i++){
			if (typeof(lpMTagConfig.dynButton[i].pid)!='undefined' && document.getElementById(lpMTagConfig.dynButton[i].pid) == null) {
					lpMTagConfig.dynButton.splice(i,1);
					i--;
			}
		}
	}
};

// Generate ChatID
var randomNum = Math.round(new Date().getTime());
var ChatID = "Chat" + randomNum;

lpAddVars('session','ExternalID',ChatID);


//The folowing functions will be load after the page will finish loading
lpMTagConfig.onLoadAll = function () {
	lpMTagConfig.calculateSentPageTime();
	lpMTagConfig.lpLoadScripts();
};

if (window.attachEvent) { 
	window.attachEvent('onload',lpMTagConfig.onLoadAll); 
} else {
	window.addEventListener('load',lpMTagConfig.onLoadAll,false);
}

if(typeof(lpMTagConfig.db1)=="undefined"){
	lpMTagConfig.db1 = new Object();
}

lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={'name':'chat-'+lpUnit,'pid':'lpButton','afterStartPage': true,'ovr':'lpMTagConfig.db1'};
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={'name':'chat-'+lpUnit+'-2','pid':'lpButton-2','afterStartPage': true,'ovr':'lpMTagConfig.db1'};
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={'name':'chat-'+lpUnit+'-3','pid':'lpButton-3','afterStartPage': true,'ovr':'lpMTagConfig.db1'};
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={'name':'chat-'+lpUnit+'-4','pid':'lpButton-4','afterStartPage': true,'ovr':'lpMTagConfig.db1'};
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length]={'name':'chat-'+lpUnit+'-5','pid':'lpButton-5','afterStartPage': true,'ovr':'lpMTagConfig.db1'};
