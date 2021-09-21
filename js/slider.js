let rect1 = document.getElementById('rect_1');
let rect2 = document.getElementById('rect_2');
let rect3 = document.getElementById('rect_3');
let pic1 = document.getElementById('gal1');
let pic2 = document.getElementById('gal2');
let pic3 = document.getElementById('gal3');
var counter = 1;

rect1.style.backgroundColor = 'black';

//Adding auto-sliding

function turnBlack_1() {
    rect1.style.backgroundColor = 'black';
    rect2.style.backgroundColor = 'rgb(117, 117, 117)';
    rect3.style.backgroundColor = 'rgb(117, 117, 117)';
    pic1.style.display = 'flex';
    pic2.style.display = 'none';
    pic3.style.display = 'none';
    counter = 1;
}
function turnBlack_2() {
    rect1.style.backgroundColor = 'rgb(117, 117, 117)';
    rect2.style.backgroundColor = 'black';
    rect3.style.backgroundColor = 'rgb(117, 117, 117)';
    pic1.style.display = 'none';
    pic2.style.display = 'flex';
    pic3.style.display = 'none';
    counter = 2;
}
function turnBlack_3() {
    rect1.style.backgroundColor = 'rgb(117, 117, 117)';
    rect2.style.backgroundColor = 'rgb(117, 117, 117)';
    rect3.style.backgroundColor = 'black';
    pic1.style.display = 'none';
    pic2.style.display = 'none';
    pic3.style.display = 'flex';
    counter = 3;
}

setInterval(function () {
    switch (counter) {
        case 1:
            turnBlack_2();
            break;
        case 2:
            turnBlack_3();
            break;
        case 3:
            turnBlack_1();
            break;

    }
}, 5000);

//Adding "hover effect on rectangles"

rect1.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

rect1.addEventListener("mouseout", function (event) {
    if (counter === 1) {
        event.target.style.backgroundColor = "black";
    }
    else {
        event.target.style.backgroundColor = "rgb(117, 117, 117)";
    }
}, false);

rect2.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

rect2.addEventListener("mouseout", function (event) {
    if (counter === 2) {
        event.target.style.backgroundColor = "black";
    }
    else {
        event.target.style.backgroundColor = "rgb(117, 117, 117)";
    }
}, false);

rect3.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

rect3.addEventListener("mouseout", function (event) {
    if (counter === 3) {
        event.target.style.backgroundColor = "black";
    }
    else {
        event.target.style.backgroundColor = "rgb(117, 117, 117)";
    }
}, false);