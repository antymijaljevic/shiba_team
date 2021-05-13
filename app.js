//init class
const SHIBprice = new SHIB();
const ui = new UI();


//get shib price
function getShibPrice(){
    SHIBprice.getPrice()
    .then(data => {
        ui.paint(data)
    })
    .catch(err => console.log(err));
}

//get price on DOM load
document.addEventListener('DOMContentLoaded', getShibPrice);

//refresh page every min
setInterval(function(){ location.reload(); }, 60000);