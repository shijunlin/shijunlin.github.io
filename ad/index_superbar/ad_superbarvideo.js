function isMobileOrMac() {
    var userAgentInfo = navigator.userAgent;
    var flag = false;
    if (userAgentInfo.match(/Macintosh|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iphone|ipod|ipad|iris|kindle|lge |maemo|midp|mmp|opera mobi|opera mini|palm|phone|pixi\/|pre\/|plucker|pocket|psp|symbian|treo|up\.browser|up\.link|vodafone|wap|windows ce|windows phone|xda|xiino/i) != null)
        flag = true;
    return flag;
}

var div_superbar_swf;
var div_superbar_exp;
var ad_superbar_swf;
var ad_superbar_exp;
var ad_count;

var superbar_swf_html='';
var superbar_exp_html='';

if(navigator.appVersion.indexOf("Chrome") != -1) {
  superbar_swf_html='<embed src="' + superbar_file_swf + '?domain=' + document.domain + '" id="ad_superbar_swf" name="ad_superbar_swf" swLiveConnect="true" allowScriptAccess="always" wmode="opaque" width="' + superbar_width_swf + '" height="' + superbar_height_swf + '" type="application/x-shockwave-flash" pluginpage="http://www.macromedia.com/go/getflashplayer"></embed><div id="div_superbar_exp" style="position:absolute;top:0;left:0;width:' + superbar_width_exp + 'px;height:0px;display:block;overflow:hidden;background:#FFF"></div>';
  superbar_exp_html='<embed src="' + superbar_file_exp + '?domain=' + document.domain + '" id="ad_superbar_exp" name="ad_superbar_exp" swLiveConnect="true" allowScriptAccess="always" wmode="opaque" width="' + superbar_width_exp + '" height="' + superbar_height_exp + '" type="application/x-shockwave-flash" pluginpage="http://www.macromedia.com/go/getflashplayer"></embed>';
} else {
  superbar_swf_html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="ad_superbar_swf" width="' + superbar_width_swf + '" height="' + superbar_height_swf + '"><param name="movie" value="' + superbar_file_swf + '?domain=' + document.domain + '"><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><embed src="' + superbar_file_swf + '?domain=' + document.domain + '" name="ad_superbar_swf" swLiveConnect="true" allowScriptAccess="always" wmode="opaque" width="' + superbar_width_swf + '" height="' + superbar_height_swf + '" type="application/x-shockwave-flash" pluginpage="http://www.macromedia.com/go/getflashplayer"></embed></object><div id="div_superbar_exp" style="position:absolute;top:0;left:0;width:' + superbar_width_exp + 'px;height:0px;display:block;overflow:hidden;background:#FFF"></div>';
  superbar_exp_html='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="ad_superbar_exp" width="' + superbar_width_exp + '" height="' + superbar_height_exp + '"><param name="movie" value="' + superbar_file_exp + '?domain=' + document.domain + '"><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><embed src="' + superbar_file_exp + '?domain=' + document.domain + '" name="ad_superbar_exp" swLiveConnect="true" allowScriptAccess="always" wmode="opaque" width="' + superbar_width_exp + '" height="' + superbar_height_exp + '" type="application/x-shockwave-flash" pluginpage="http://www.macromedia.com/go/getflashplayer"></embed></object>';
}
var superbar_img_html='<a href="' + superbar_url + '" target="' + superbar_target + '"><img src="' + superbar_file_img + '" width="' + superbar_width_swf + '" height="' + superbar_height_swf + '" border="0"></a>';//data="' + superbar_file_swf + '?domain=' + document.domain + '"


if((superbar_file_swf!='' && superbar_file_exp!='') && !isMobileOrMac()){
	div_superbar_swf=document.getElementById('div_superbar_swf');
	div_superbar_swf.innerHTML=superbar_swf_html;
	div_superbar_exp=document.getElementById('div_superbar_exp');
	div_superbar_exp.innerHTML=superbar_exp_html;
	div_superbar_exp.style.height=0+'px';
	ad_superbar_swf=(document.ad_superbar_swf)?document.ad_superbar_swf:window.document['ad_superbar_swf'];
	ad_superbar_exp=(document.ad_superbar_exp)?document.ad_superbar_exp:window.document['ad_superbar_exp'];
	ad_count=ad_getCookie(superbar_id);if(ad_count==null){ad_count=0;}ad_count++;
	ad_setCookie(superbar_id,ad_count,1);
}else{
	div_superbar_swf=document.getElementById('div_superbar_swf');
	div_superbar_swf.innerHTML=superbar_img_html;
}

function ad_setCookie(name,value,days)	{if (days){var date=new Date;date.setTime(date.getTime()+days*24*60*60*1000);var expires='; expires='+date.toGMTString();}else{var expires='';}document.cookie=name+'='+value+expires+'; path=/';}
function ad_getCookie(name)				{var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}if(c.indexOf(nameEQ)==0){return c.substring(nameEQ.length,c.length);}}return null;}
function ad_delCookie(name)				{setCookie(name,'',-1);}

function adTouch(stat,val){if(stat=='ad_superbar_click'){ad_openWindow(superbar_url,superbar_target,val);}if(stat=='ad_superbar_open'){superOpen();ad_superbar_event='click';}if(stat=='ad_superbar_close'){superClose();}}
var timer_super_ex;

var exp_oheight = superbar_height_exp;
var exp_height = 0;
var exp_cheight = 0;
var swf_height = superbar_height_swf;

function superOpen(){
	exp_height=parseInt(div_superbar_exp.offsetHeight);
	if(exp_height>=exp_oheight){
		div_superbar_exp.style.height=exp_oheight+'px';
		superStart();
	}else{
		exp_height=(exp_oheight+exp_height*4)/5+1;
		div_superbar_exp.style.height=exp_height+'px';
		if (div_superbar_swf.offsetHeight<div_superbar_exp.offsetHeight){
			div_superbar_swf.style.height=exp_height+'px'
		}
		clearTimeout(timer_super_ex);
		timer_super_ex=setTimeout(superOpen,50);
	}
}
function superClose(){
	exp_height=parseInt(div_superbar_exp.offsetHeight);
	if(exp_height - exp_cheight<5){
		div_superbar_exp.style.height=exp_cheight+'px';
		div_superbar_swf.style.height=swf_height+'px';
	}else{
		exp_height=(exp_cheight+exp_height*4)/5-1;
		div_superbar_exp.style.height=exp_height+'px';
		if (exp_height>90){
			div_superbar_swf.style.height=exp_height+'px';
		}else{
			div_superbar_swf.style.height=swf_height+'px';
		}
		clearTimeout(timer_super_ex);
		timer_super_ex=setTimeout(superClose,50);
	}
}


function superStart(){
	if (superbar_file_vdo!=''){
	ad_superbar_exp.goVideo('lb_video');
	ad_superbar_exp.flvFile(superbar_file_vdo);
	ad_superbar_exp.flvCook(ad_superbar_event);
	ad_superbar_exp.flvVolume('100');
	ad_superbar_exp.flvMute('on');
	}else{
	ad_superbar_exp.goLabel('lb_begin');
	ad_superbar_exp.flvCook(ad_superbar_event);
	}
}

function ad_openWindow(s_URL,s_Target,val) 	{if (val=='ban'){ad_superbar_swf.goAdurl(s_URL,s_Target);}else{ad_superbar_exp.goAdurl(s_URL,s_Target);}}
//function ad_openWindow(s_URL,s_Target) 	{if (s_Target!=""){window.open(s_URL,s_Target);}else{location.href=s_URL;}}
function alertmsg(msg){window.alert(msg)};
function adGo(){if(ad_count<=2){setTimeout(superOpen,2000);ad_superbar_event='auto';};}
adGo();
