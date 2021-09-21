let first_page = document.getElementById('page-number1');
first_page.style.cursor = 'pointer';
first_page.onclick = function() {
    window.open('browse-all.html', '_self')
}

let second_page = document.getElementById('page-number2');
second_page.style.cursor = 'pointer';
second_page.onclick = function() {
    window.open('browse-all2.html', '_self')
}

let third_page = document.getElementById('page-number3');
third_page.style.cursor = 'pointer';
third_page.onclick = function() {
    window.open('browse-all3.html', '_self')
}

let fourth_page = document.getElementById('page-number4');
fourth_page.style.cursor = 'pointer';
fourth_page.onclick = function() {
    window.open('browse-all4.html', '_self')
}

first_page.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

first_page.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "white";  
}, false);

second_page.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

second_page.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "white";  
}, false);

third_page.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

third_page.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "white";  
}, false);

fourth_page.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "gray";
}, false);

fourth_page.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "white";  
}, false);