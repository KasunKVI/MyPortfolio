var hb = ["Tech Reviewer 👨‍💻" , " Video Creator 🎥 | ❤️💫"];

var h3Element = document.getElementById("hb");
var textIndex = 0;
var count =0;
myFunction = ()=> {

    var currentText = hb[count];
    if (textIndex < currentText.length) {
        h3Element.textContent += currentText.charAt(textIndex);
        textIndex++;
    } else {
        // If the entire text is typed, clear and move to the next item
        setTimeout(function () {
            h3Element.textContent = "";
            textIndex = 0;
            count++;
            if (count === hb.length) {
                count = 0;
            }
        }, 1000); // Wait for 1 second before clearing and moving to the next item
    }
}
setInterval(myFunction, 100);