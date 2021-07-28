//
// main.js
//

function init() {
	var initText = localStorage['text'];
	$('textarea').text(initText);

}
function update() {
	var newText = $('textarea').val();
	localStorage['text'] = newText;
}
 function refresh(){
    var textContent = document.getElementById('editor-textarea').value; document.getElementById('viewer').srcdoc = textContent;
 }
$(document).ready(init);
