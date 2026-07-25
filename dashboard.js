let products = JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("totalProducts").innerText = products.length;

let expired = 0;
let expiringSoon = 0;
let safe = 0;

let today = new Date();

products.forEach(product => {

    let expiry = new Date(product.expiryDate);

    let diff = (expiry - today) / (1000 * 60 * 60 * 24);

    if(diff < 0){
        expired++;
    }
    else if(diff <= 7){
        expiringSoon++;
    }
    else{
        safe++;
    }

});

document.getElementById("expiredProducts").innerText = expired;
document.getElementById("expiringSoon").innerText = expiringSoon;
document.getElementById("safeProducts").innerText = safe;