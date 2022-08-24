var col=setInterval(bsodset,1)
function bsodset() {
	bsod.style.background=bsodbg.value;
	bsod.style.color=bsodfc.value
	bsodsad.innerHTML=bssad.value
    bsline1.innerHTML=bsli1.value
    bsline2.innerHTML=bsli2.value
    bsline3.innerHTML=bsli3.value    
    bsline4.innerHTML=bsli4.value
    bsline5.innerHTML=bsli5.value
    bsline6.innerHTML=bsli6.value 
    bsline7.innerHTML=bsli7.value
    if (qrm.checked) {
	qr.style.display="block";
    }    
    else{
	qr.style.display="none";
    }
}
function show() {
	document.getElementById('bsod').style.display='block';
}
var message="Sorry, right-click has been disabled"; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false") 
// --> 
function hotkey()
{
var a=window.event.keyCode;
if(a==27)
{
bsod.style.display="none";
}
}
window.onload = function(){
document.onkeydown = hotkey;
};
