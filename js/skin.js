function high(which2){
		theobject=which2
		highlighting=setInterval("highlightit(theobject)",50)
	}
function low(which2){
		clearInterval(highlighting)
		which2.filters.alpha.opacity=80
	}
function highlightit(cur2){
		if (cur2.filters.alpha.opacity<100)
			cur2.filters.alpha.opacity+=5
		else if (window.highlighting)
		clearInterval(highlighting)	
	}
function sethomepage()
{  
  var name = navigator.appName;
	var useragent = navigator.userAgent;
	var version = parseInt(navigator.appVersion);
	if ( useragent.indexOf("MSIE") != -1)
	{	    
		document.write('<A HREF="#" ONCLICK="this.style.behavior='+
		               "'url(#default#homepage)';this.setHomePage("+
		               "'http://www.pajh.hcc.edu.tw/');"+
		               '"'+'>' + '設博愛國中為首頁</a>');
	}
	}

var myfar;
var mytitle;
myfar="http://www.pajh.hcc.edu.tw";
mytitle="新竹縣立博愛國民中學";
function favority() {
if (navigator.appName!="Netscape"){
window.external.AddFavorite(myfar, mytitle);}
else{
window.location = myfar;
}}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}

MM_reloadPage(true);

function na_open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';
  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}
