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


// var imgA = [];

// imgA.push(document.getElementById('img1'));
// imgA.push(document.getElementById('img2'));
// imgA.push(document.getElementById('img3'));
// imgA.push(document.getElementById('img4'));
// imgA.push(document.getElementById('img5'));
// imgA.push(document.getElementById('img6'));
// imgA.push(document.getElementById('img7'));
// imgA.push(document.getElementById('img8'));
// imgA.push(document.getElementById('img9'));
// imgA.push(document.getElementById('img10'));
// imgA.push(document.getElementById('img11'));
//
// const imgContainer = document.getElementById('skills2');
// const images = imgA;
// const imgWidth = images[0].width; // Assuming all images have the same width
// const animationDuration = 1000 * 1000; // 10 seconds
//
// let currentPosition = 0;
// let animationStart = null;
// let newPosition = 10;
//
// function animateImages(timestamp) {
//
//     for (let i=0; i<images.length; i++){
//
//         currentPosition=currentPosition+10;
//         images[i].style.transform = `translateX(${currentPosition}px`;
//
//         animationStart=true;
//     }
//
//     if (animationStart){
//
//
//     }
//
// }
//
// setInterval(animateImages, 1000);
