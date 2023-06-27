function autoType(elementClass, typingSpeed) {
    var TypeJs = $(elementClass),
    TypeJs = TypeJs.find(".text-js");

    var text = TypeJs.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    for (var i = 0; i < amntOfChars; i++) {
        (function(i, char) {
            setTimeout(function() {
                newString += char;
                TypeJs.text(newString);
            }, i * typingSpeed);
        })(i + 1, text[i]);
    }
}

$(document).ready(function() {
    autoType(".singleTypeJs", 150);
    autoType(".multiTypeJs", 150);
});