//Variables
const qr = document.getElementById("QR");
const btnClear = document.getElementById("btnClear");
const itemSerial = document.getElementById("serial");
const itemType = document.getElementById("itemType");
const itemLocation = document.getElementById("loc");
const itemImg = document.getElementById('itemImg');

//File handling
itemImg.addEventListener('change', ()=>{
 const file = itemImg.files[0];
 if(!file) return;

 const reader = new FileReader();
 reader.onload = function QRGenerator(e){
//Inventory Body
const inventoryBody = {
    id: itemSerial.value,
    itemType: itemType.value,
    location: itemLocation.value,
}
const qrData = JSON.stringify(inventoryBody, null, 1);

console.log(qrData);


const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: qrData,
    image: e.target.result,
    dotsOptions: { color: "#000000", type: "rounded" },
    backgroundOptions: { color: "#ffffff" },
    imageOptions: { crossOrigin: "anonymous", margin: 6, hideBackgroundDots: true, imageSize: 0.3 },
    qrOptions: { errorCorrectionLevel: "H" }
});
qr.innerHTML = "";
qrCode.append(qr);
}

 reader.readAsDataURL(file);
});








