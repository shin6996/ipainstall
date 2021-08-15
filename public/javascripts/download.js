var download = document.getElementById('platform');
var window_bg = document.getElementById('download-window-bg');
var close = document.getElementById('close-button');
 
download.onclick = function show() {
	window_bg.style.display = "block";
}
 
close.onclick = function close() {
	window_bg.style.display = "none";
}
 
window.onclick = function close(e) {
	if (e.target == window_bg) {
		window_bg.style.display = "none";
	}
}