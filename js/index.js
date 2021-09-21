
//Adding cart
var cart_state = 'disabled'

function cart() {

    if (cart_state === 'disabled') {
        document.getElementById('cart-drp').style.display = "flex";
        cart_state = 'enabled';
        return

    }

    if ((document.querySelector(".footer").onclick) || (cart_state === 'enabled')) {
        document.getElementById('cart-drp').style.display = "none";
        cart_state = 'disabled';
        return;
    }

}


//Adding amount (number) of items inside cart near small cart logo
let cart_counter_var = 0;

function cartAdd() {
    cart_counter_var += 1;
    document.getElementById('cartCounter').innerHTML = cart_counter_var; 
}

//Output if cart is empty
let cart_check_text = document.getElementById('cart-ttl');
cart_check_text.innerHTML = 'Cart is empty';
cart_check_text.style.color = 'white';
cart_check_text.style.textAlign = 'center';

//Variable for calculating sum of order
var cart_total = 0;

//Adding iPhone from slider to cart
var iPhone_counter = 0;

function addiPhone() {
    iPhone_counter += 1;
    cart_total += 43999;
    let mainDiv = document.createElement("div");
    mainDiv.id = `main_cart_div${iPhone_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let iPhone_image = document.createElement("img");
    iPhone_image.src = "assets/iPhone_black.png";
    iPhone_image.style.height = '85%';
    iPhone_image.style.width = '15%';
    document.getElementById(`main_cart_div${iPhone_counter}`).appendChild(iPhone_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "iPhone 12 - 43 999 &#8372;";
    document.getElementById(`main_cart_div${iPhone_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Pixel4a from slider to cart
var Pixel4a_counter = 0;

function addPixel() {
    Pixel4a_counter += 1;
    cart_total += 10999;
    let mainDiv = document.createElement("div");
    mainDiv.id = `pixel_cart_div${Pixel4a_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let Pixel4a_image = document.createElement("img");
    Pixel4a_image.src = "assets/Pixel4a.png";
    Pixel4a_image.style.height = '85%';
    Pixel4a_image.style.width = '15%';
    document.getElementById(`pixel_cart_div${Pixel4a_counter}`).appendChild(Pixel4a_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "Pixel4a - 10 999 &#8372;";
    document.getElementById(`pixel_cart_div${Pixel4a_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Galaxy Z Flip from slider to cart
var Galaxy_counter = 0;

function addGalaxy() {
    Galaxy_counter += 1;
    cart_total += 30999;
    let mainDiv = document.createElement("div");
    mainDiv.id = `galaxy_cart_div${Galaxy_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let Galaxy_image = document.createElement("img");
    Galaxy_image.src = "assets/Galaxy_Z_Flip.png";
    Galaxy_image.style.height = '85%';
    Galaxy_image.style.width = '15%';
    document.getElementById(`galaxy_cart_div${Galaxy_counter}`).appendChild(Galaxy_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "Galaxy Z Flip - 30 999 &#8372;";
    document.getElementById(`galaxy_cart_div${Galaxy_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding iPad Pro 5 from page to cart
var iPad_counter = 0;

function addiPad() {
    iPad_counter += 1;
    cart_total += 32399;
    let mainDiv = document.createElement("div");
    mainDiv.id = `ipad_cart_div${iPad_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let iPad_image = document.createElement("img");
    iPad_image.src = "assets/iPad_Pro_5.png";
    iPad_image.style.height = '85%';
    iPad_image.style.width = '15%';
    document.getElementById(`ipad_cart_div${iPad_counter}`).appendChild(iPad_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "iPad Pro 5 - 30 399 &#8372;";
    document.getElementById(`ipad_cart_div${iPad_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Watch S6 from page to cart
var WatchS6_counter = 0;

function addWatchS6() {
    WatchS6_counter += 1;
    cart_total += 13499;
    let mainDiv = document.createElement("div");
    mainDiv.id = `watchs6_cart_div${WatchS6_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let WatchS6_image = document.createElement("img");
    WatchS6_image.src = "assets/Watch_Series_6.png";
    WatchS6_image.style.height = '85%';
    WatchS6_image.style.width = '15%';
    document.getElementById(`watchs6_cart_div${WatchS6_counter}`).appendChild(WatchS6_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "Watch S6 - 13 499 &#8372;";
    document.getElementById(`watchs6_cart_div${WatchS6_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Mac from page to cart
var Mac_counter = 0;

function addMac() {
    Mac_counter += 1;
    cart_total += 58499;
    let mainDiv = document.createElement("div");
    mainDiv.id = `mac_cart_div${Mac_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let Mac_image = document.createElement("img");
    Mac_image.src = "assets/Macbook_Pro_M1.png";
    Mac_image.style.height = '85%';
    Mac_image.style.width = '15%';
    document.getElementById(`mac_cart_div${Mac_counter}`).appendChild(Mac_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "MacBook Pro 13 - 58 499 &#8372;";
    document.getElementById(`mac_cart_div${Mac_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Surafce Go 2 from page to cart
var Go2_counter = 0;

function addGo2() {
    Go2_counter += 1;
    cart_total += 10399;
    let mainDiv = document.createElement("div");
    mainDiv.id = `go2_cart_div${Go2_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let Go2_image = document.createElement("img");
    Go2_image.src = "assets/Surface_Go_2.png";
    Go2_image.style.height = '85%';
    Go2_image.style.width = '15%';
    document.getElementById(`go2_cart_div${Go2_counter}`).appendChild(Go2_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "Surface Go 2 - 10 399 &#8372;";
    document.getElementById(`go2_cart_div${Go2_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Pixelbook from page to cart
var PB_counter = 0;

function addPixelBook() {
    PB_counter += 1;
    cart_total += 20699;
    let mainDiv = document.createElement("div");
    mainDiv.id = `pb_cart_div${PB_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let Pb_image = document.createElement("img");
    Pb_image.src = "assets/PixelBook_Go.png";
    Pb_image.style.height = '85%';
    Pb_image.style.width = '15%';
    document.getElementById(`pb_cart_div${PB_counter}`).appendChild(Pb_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "PixelBook Go - 20 699 &#8372;";
    document.getElementById(`pb_cart_div${PB_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Adding Samsung TV from page to cart
var STV_counter = 0;

function addSTV() {
    STV_counter += 1;
    cart_total += 69999;
    let mainDiv = document.createElement("div");
    mainDiv.id = `stv_cart_div${STV_counter}`;
    mainDiv.style.height = '50px';
    mainDiv.style.width = '100%';
    mainDiv.style.display = 'flex';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.borderBottom = '2px solid black';
    mainDiv.style.borderColor = '#e8e8e8';
    document.getElementById('cart-itms').appendChild(mainDiv);

    let STV_image = document.createElement("img");
    STV_image.src = "assets/Samsung_QE75Q95T.png";
    STV_image.style.height = '85%';
    STV_image.style.width = '15%';
    document.getElementById(`stv_cart_div${STV_counter}`).appendChild(STV_image);

    let createSpan = document.createElement("span");
    createSpan.style.width = "70%";
    createSpan.style.fontSize = '1em'
    createSpan.style.color = "white";
    createSpan.style.textAlign = "center";
    createSpan.innerHTML = "Samsung QE75Q95T - 60 999 &#8372;";
    document.getElementById(`stv_cart_div${STV_counter}`).appendChild(createSpan);

    let cart_check_text_empty = document.getElementById('cart-ttl');
    cart_check_text_empty.innerHTML = '';
    let cart_check_text = document.createElement("span");
    cart_check_text.innerHTML = `Total: ${cart_total} &#8372;`;
    cart_check_text.style.flexGrow = '5';
    document.getElementById('cart-ttl').append(cart_check_text);

    let cart_checkout_button = document.createElement("button");
    cart_checkout_button.disabled = true;
    cart_checkout_button.style.margin = '5px';
    cart_checkout_button.style.height = '30px';
    cart_checkout_button.style.display = 'block';
    cart_checkout_button.style.border = 'none';
    cart_checkout_button.style.background = '#68676e';
    cart_checkout_button.style.borderRadius = '9.5px';
    cart_checkout_button.innerHTML = 'Checkout';
    cart_checkout_button.style.color = 'white';
    cart_checkout_button.style.flexGrow = '2';
    document.getElementById('cart-ttl').append(cart_checkout_button);

    let cart_empty_button = document.createElement("button");
    cart_empty_button.id = 'empty_btn';
    cart_empty_button.style.margin = '5px';
    cart_empty_button.style.height = '30px';
    cart_checkout_button.style.display = 'inline';
    cart_empty_button.style.border = 'none';
    cart_empty_button.style.background = '#68676e';
    cart_empty_button.style.borderRadius = '9.5px';
    cart_empty_button.innerHTML = 'Clear';
    cart_empty_button.style.color = 'white';
    cart_empty_button.style.flexGrow = '2';
    cart_empty_button.style.cursor = 'pointer';
    document.getElementById('cart-ttl').append(cart_empty_button);

    cart_empty_button.onclick = function() {
        let cart_check_text = document.getElementById('cart-ttl');
        cart_check_text.innerHTML = 'Cart is empty';
        cart_check_text.style.color = 'white';
        cart_check_text.style.textAlign = 'center';
        cart_counter_var = 0;
        iPhone_counter = 0;
        cart_total = 0;
        document.getElementById('cartCounter').innerHTML = 0;
        document.getElementById('cart-itms').innerHTML = '';
    }
}

//Hiding cart when clicked outside of it
document.addEventListener('mouseup', function (e) {
    var container = document.getElementById('cart-drp');

    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
}.bind(this));