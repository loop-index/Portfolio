
let text = 'show section '
let curChar = 0;
let userText = "";

$(document).on('keydown', function(e) {
    curChar++;

    if (curChar > text.length) {
        if (e.key === 'Enter') {
            curChar = 0;
            userText = "";
            $('#mainText').text(text.substring(0, curChar));
        } else if (e.key === 'Backspace') {
            userText = userText.substring(0, userText.length - 1);
        } else {
             userText += e.key;
        }
    }
    $('#mainText').text(text.substring(0, curChar) + userText);
});