// menu gombok szovegei
const ubuntu_txt = "Ubuntu";
const ubuntu_mate_txt = "Ubuntu Mate";
const windows_txt = "Windows IoT";

// menu gombok
const ubuntu_btn = document.getElementById("ubuntu_btn");
const ubuntu_mate_bnt = document.getElementById("ubuntu_mate_btn");
const windows_iot_btn = document.getElementById("windows_iot_btn");
const button_text = document.getElementById("texts");
// kozepso gomb
const mid = ubuntu_mate_bnt;
// texts p aminek a szovege valtoztatva lesz
const texts = document.getElementById("texts");
// vissza gomb
const back = document.getElementById("vissza");

back.addEventListener("click", () => {
    // szoveg valtoztatasa
    ubuntu_btn.innerHTML = ubuntu_txt;
    ubuntu_mate_bnt.innerHTML = ubuntu_mate_txt;
    windows_iot_btn.innerHTML = windows_txt;
});


const img = document.querySelector('img');
img.ondragstart = () => {
    return false;
};



// event listenerek a gombokra
// ubuntu
ubuntu_btn.addEventListener("click", () => {
    mid.innerHTML = ubuntu_txt;
    ubuntu_btn.innerHTML = "Előnyök";
    windows_iot_btn.innerHTML = "Hátrányok";
});

// ubuntu mate
ubuntu_mate_bnt.addEventListener("click", () => {
    mid.innerHTML = ubuntu_mate_txt;
    ubuntu_btn.innerHTML = "Előnyök";
    windows_iot_btn.innerHTML = "Hátrányok";
});

// windows IoT
windows_iot_btn.addEventListener("click", () => {
    mid.innerHTML = windows_txt;
    ubuntu_btn.innerHTML = "Előnyök";
    windows_iot_btn.innerHTML = "Hátrányok";
});

// keszitok 
const keszitok_logo = document.getElementById("logo"); // logo
const keszitok = document.getElementsByClassName("creators")[0];
const style = keszitok.style;

keszitok_logo.addEventListener("mouseleave", () => {
    keszitok.style = style;
});