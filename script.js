// menu gombok
const ubuntu_btn = document.getElementById("ubuntu_btn");
const ubuntu_mate_bnt = document.getElementById("ubuntu_mate_btn");
const windows_iot_btn = document.getElementById("windows_iot_btn");
const button_text = document.getElementById("texts");

// event listenerek a gombokra
// ubuntu
ubuntu_btn.addEventListener("click", () => {
    button_text.igitL = "A cikk az Ubuntu 20.10 telepítésének és futtatásának tapasztalatait tárgyalja egy Raspberry Pi 4-en. A telepítési folyamatot egyszerűnek írja le, köszönhetően annak, hogy az Ubuntu elérhető a Raspberry Pi Imager-en. A cikk megjegyzi, hogy az Ubuntu for Raspberry Pi asztali élménye hasonló az asztali élményhez egy hagyományos PC-n. Az operációs rendszer képes Wi-Fi, Bluetooth és Full HD videólejátszásra, de a 4K videólejátszás a hardveres korlátozások miatt nem lehetséges. A cikk arra a következtetésre jut, hogy az Ubuntu 20.10 Raspberry Pi 4-en az eddigi legjobb Linux-élmény Raspberry Pi-n, néhány apró javítással, amelyet a jövőbeli kiadásokban még el lehet végezni."

});

// ubuntu mate
ubuntu_mate_bnt.addEventListener("click", () => {
    
});

// windows IoT
windows_iot_btn.addEventListener("click", () => {
    
});

// keszitok 
const keszitok_logo = document.getElementById("logo"); // logo
const keszitok = document.getElementsByClassName("creators")[0];
const style = keszitok.style;

keszitok_logo.addEventListener("mouseleave", () => {
    keszitok.style = style;
});