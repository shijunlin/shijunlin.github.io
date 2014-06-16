/* 1st updated by Terence on 2008/04/08 */
/* 2nd updated by Terence on 2008/04/17 */
/* last updated by Terence on 2008/07/15 - remove ad_url trailing after ~ */

document.write('<script language="JavaScript" src="js/swfobject.js"\></script\>');

function isMobileOrMac() {
    var userAgentInfo = navigator.userAgent;
    var flag = false;
    if (userAgentInfo.match(/Macintosh|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iphone|ipod|ipad|iris|kindle|lge |maemo|midp|mmp|opera mobi|opera mini|palm|phone|pixi\/|pre\/|plucker|pocket|psp|symbian|treo|up\.browser|up\.link|vodafone|wap|windows ce|windows phone|xda|xiino/i) != null)
        flag = true;

    return flag;
}

function include_rpc(js_file) {
    var js = document.createElement('script');
    js.setAttribute('language', 'javascript');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', js_file);
    document.getElementsByTagName('head').item(0).appendChild(js);
    return false;

}

function include(js_file) {
    document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="' + js_file + '">');
    document.write('</' + 'script' + '>');
}

function doFSCommand(command, args) {
    /* get required infomation */
    var ad_url="", ad_target="", ad_no="", ad_type="";
    var pairs = args.split(',');
    for( var i=0 ; i<pairs.length ; i++ ) {
        var key_value = pairs[i].split('=');
        var key = key_value[0];
        var value = key_value[1];

        if( key == 'ad_url' ) {
            if (value.indexOf('~http') != -1) {
                ad_url = value.substring(0,value.indexOf('~http')+1);
            } else {
                ad_url = value;
            }
        }
        else if( key == 'ad_target' ) {
            ad_target = value;
        }
        else if( key == 'ad_no' ) {
            ad_no = value;
        }
	    else if( key == 'ad_type' ) {
	        ad_type = value;
	    }
    }


	// this is to let BarSticker's zIndex higher than BarExpando
	if (document.getElementById('header_1') != undefined) document.getElementById('header_1').parentNode.style.zIndex = '999';


    if( command == "mouseClick" ) {
        if ( ad_target != "" ) {
            window.open(ad_url , ad_target);
        } else {
            location.href=ad_url;
        }
    } else if( command == "mouseOver" ) {
        for (var k=1; k<5 ; k++) {
	        var Element = document.getElementById('header_'+k);
	        if (Element != undefined) {
	            for (var i=0; i<Element.childNodes.length; i++) {
	            	if (Element.childNodes[i].id != undefined && Element.childNodes[i].id != '') {
	                    if (Element.childNodes[i].id.indexOf(ad_no) != -1) {
                            document.getElementById('header_'+k).style.overflow = 'visible' ;
	                        break;
	                    }
	            	}
	            }//end for
	        }
        }//end for

	    if (ad_no != '') {
	        include_rpc("http://ad.adver.com.tw/adver/adtouch.jsp?ad_no=" + ad_no);
	    }
    } else if( command == "mouseOut" ) {
        for (var k=1; k<5 ; k++) {
	        var Element = document.getElementById('header_'+k);
	        if (Element != undefined) {
	            for (var i=0; i<Element.childNodes.length; i++) {
	            	if (Element.childNodes[i].id != undefined && Element.childNodes[i].id != '') {
	                    if (Element.childNodes[i].id.indexOf(ad_no) != -1) {
                            document.getElementById('header_'+k).style.overflow = 'hidden' ;
	                        break;
	                    }
	            	}
	            }//end for
	        }
        }//end for
    }
}


function createVBSWF(name){
	if (navigator.appName && navigator.appName.indexOf("Microsoft") != -1 && navigator.userAgent.indexOf("Windows") != -1 && navigator.userAgent.indexOf("Windows 3.1") == -1)
    {
        document.write('<SCRIPT LANGUAGE=VBScript\> \n on error resume next \n Sub '+name+'_FSCommand(ByVal command, ByVal args)\n call '+name+'_DoFSCommand(command, args)\n end sub\n </SCRIPT\> \n');
    }
}

function createFSSWF(name){
    document.write('<SCRIPT LANGUAGE=JavaScript\> \n function '+name+'_DoFSCommand(command, args){args = args.replace("args=","");doFSCommand(command, args);}\n </SCRIPT\> \n');
}

function createSpan(name){
    document.write('<span id="dest_'+name+'"><a href="http://www.adobe.com/tw/products/flashplayer/"> Update Flash </a></span>');
}

function createSWF(o){
    if (!isMobileOrMac()){
        document.write('<SCRIPT LANGUAGE=JavaScript\>');
        document.write('var fscmd_id = "swfobj_' + o.flash_adno + '";'); /* new Date().getTime() */
        document.write('createFSSWF(fscmd_id);');
        document.write('createVBSWF(fscmd_id);');
        document.write('createSpan(fscmd_id);');
        document.write('var so = new SWFObject("' + o.flash_file + '", fscmd_id, "' + o.flash_width + '", "' + o.flash_height + '", "8", "");');
        document.write('so.addVariable("args", "' + o.flash_args + '");');
        document.write('so.addVariable("ad_url", "' + o.flash_ad_url + '");');
        document.write('so.addVariable("ad_target", "' + o.flash_ad_target + '");');
        document.write('so.addParam("allowScriptAccess", "always");');
        document.write('so.addParam("wmode", "' + o.wmode + '");');
        document.write('so.write("dest_"+fscmd_id);');
        document.write('</SCRIPT\> ');
    } else {
        document.write('<a href="' + o.flash_ad_url + '" target="' + o.flash_ad_target + '"><img src="' + o.img_file + '" border="0"></a>');
    }
}















function createTouchSWF(o){ createStickerSWF(o); }
function createStickerSWF(o){ createOverTextSWF(o); }
function createOverTextSWF(o){
    if (!isMobileOrMac()){
        document.write('<SCRIPT LANGUAGE=JavaScript\>');
        document.write('var fscmd_id = "swfobj_' + o.flash_adno + '";');
        document.write('createFSSWF(fscmd_id);');
        document.write('createVBSWF(fscmd_id);');
        document.write('createSpan(fscmd_id);');
        document.write('createADTouchSpan(fscmd_id);');
        document.write('var so = new SWFObject("' + o.flash_file + '", fscmd_id, "' + o.flash_width + '", "' + o.flash_height + '", "8", "");');
        document.write('so.addVariable("args", "' + o.flash_args + '");');
        document.write('so.addVariable("ad_url", "' + o.flash_ad_url + '");');
        document.write('so.addVariable("ad_target", "' + o.flash_ad_target + '");');
        document.write('so.addVariable("ad_no", "' + o.flash_ad_no + '");');
        document.write('so.addParam("allowScriptAccess", "always");');
        document.write('so.addParam("wmode", "' + o.wmode + '");');
        document.write('so.write("dest_"+fscmd_id);');
        document.write('</SCRIPT\> ');
    } else {
        document.write('<a href="' + o.flash_ad_url + '" target="' + o.flash_ad_target + '"><img src="' + o.img_file + '" border="0"></a>');
    }
}

function createADTouchSpan(name){
    document.write('<span id="adtouch_'+name+'" style="display:none">This text is replaced by AD Touch</span>');
}

function createOverTextSpan(name,top_value){
    document.write('<span id="dest_'+name+'" STYLE="POSITION: absolute; VISIBILITY:VISIBLE;top:'+top_value+';">This text is replaced by the Flash movie.</span>');
}


function doADTouch(ad_no) {
    /* Using swfobject created by MIT, awesome. */
    var so = new SWFObject("http://ad.adver.com.tw/adver/adtouch.jsp?ad_no=" + ad_no, "", "", "", "8", "");
    so.write("adtouch_swfobj_" + ad_no);
}

function doADTouch1(ad_no){
    /* This method will trigger twice, weird. */
    document.getElementById("adtouch_swfobj_" + ad_no).innerHTML = 'document.write(\'<script language="JavaScript" src="http://ad.adver.com.tw/adver/adtouch.jsp?ad_no="' + ad_no + '\></script\>\');';
}

function createWaterMarkSpan(name){
    document.write('<DIV id="waterJMark" style="position:absolute">');
    document.write('<span id="dest_'+name+'">This text is replaced by the Flash movie.</span>');
    document.write('</DIV>');
}

function createWaterMarkSWF(o){
    document.write('<SCRIPT LANGUAGE=JavaScript\>');
    document.write('var fscmd_id = "swfobj_' + new Date().getTime() + '";');
    document.write('createFSSWF(fscmd_id);');
    document.write('createVBSWF(fscmd_id);');
    document.write('createWaterMarkSpan(fscmd_id);');
    document.write('var so = new SWFObject("' + o.flash_file + '", fscmd_id, "' + o.flash_width + '", "' + o.flash_height + '", "8", "");');
    document.write('so.addVariable("args", "' + o.flash_args + '");');
    document.write('so.addVariable("ad_url", "' + o.flash_ad_url + '");');
    document.write('so.addVariable("ad_target", "' + o.flash_ad_target + '");');
    document.write('so.addParam("allowScriptAccess", "always");');
    document.write('so.addParam("wmode", "' + o.wmode + '");');
    document.write('so.write("dest_"+fscmd_id);');
    document.write('var markW=' + o.flash_width + ';');
    document.write('var markH=' + o.flash_height + ';');
    document.write('var markX=' + o.markX + ';');
    document.write('var markY=' + o.markY + ';');
    document.write('</SCRIPT\> ');
    document.write('<script language="JavaScript" src="http://pic.adver.com.tw/js/WaterMark.js"\></script\>');
}

function createSWFobj(flash_adno,flash_file,flash_width,flash_height,flash_args){
    document.write('<SCRIPT LANGUAGE=JavaScript\>');
    document.write('var fscmd_id = "swfobj_' + flash_adno + '";');
    document.write('createFSSWF(fscmd_id);');
    document.write('createVBSWF(fscmd_id);');
    document.write('createSpan(fscmd_id);');
    document.write('var so = new SWFObject("' + flash_file + '", fscmd_id, "' + flash_width + '", "' + flash_height + '", "8", "");');
    document.write('so.addVariable("args", "' + flash_args + '");');
//    document.write('so.addVariable("ad_url", "' + o.flash_ad_url + '");');
//    document.write('so.addVariable("ad_target", "' + o.flash_ad_target + '");');
//    document.write('so.addVariable("ad_no", "' + o.flash_ad_no + '");');
    document.write('so.addParam("allowScriptAccess", "always");');
    document.write('so.addParam("wmode", "transparent");');
    document.write('so.write("dest_"+fscmd_id);');
    document.write('</SCRIPT\> ');
}

function createOverTextSWFobj(flash_adno,flash_file,flash_width,flash_height,flash_args){
    document.write('<SCRIPT LANGUAGE=JavaScript\>');
    document.write('var fscmd_id = "swfobj_' + flash_adno + '";');
    document.write('createFSSWF(fscmd_id);');
    document.write('createVBSWF(fscmd_id);');
    document.write('createSpan(fscmd_id);');
    /* document.write('createOverTextSpan(fscmd_id,50);'); */
    document.write('createADTouchSpan(fscmd_id);');
    document.write('var so = new SWFObject("' + flash_file + '", fscmd_id, "' + flash_width + '", "' + flash_height + '", "8", "");');
    document.write('so.addVariable("args", "' + flash_args + '");');
//    document.write('so.addVariable("ad_url", "' + o.flash_ad_url + '");');
//    document.write('so.addVariable("ad_target", "' + o.flash_ad_target + '");');
//    document.write('so.addVariable("ad_no", "' + o.flash_ad_no + '");');
    document.write('so.addParam("allowScriptAccess", "always");');
    document.write('so.addParam("wmode", "transparent");');
    document.write('so.write("dest_"+fscmd_id);');
    document.write('</SCRIPT\> ');
}
