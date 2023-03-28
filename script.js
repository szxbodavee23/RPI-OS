// menu gombok
const ubuntu_btn = document.getElementById("ubuntu_btn");
const ubuntu_mate_bnt = document.getElementById("ubuntu_mate_btn");
const windows_iot_btn = document.getElementById("windows_iot_btn");


const img = document.querySelector('img');
img.ondragstart = () => {
    return false;
};



// event listenerek a gombokra
// ubuntu
ubuntu_btn.addEventListener("click", () => {
    
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