const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const bgContainer = document.getElementById("bg-container");
const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `0 img/${chosenImage}`;
//document.body.appendChild(bgImage)

document.body.style.backgroundImage = `url('0 img/${chosenImage}')`;
