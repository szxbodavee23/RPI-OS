// menu gombok szovegei
const ubuntu_txt = "Ubuntu";
const ubuntu_mate_txt = "Ubuntu Mate";
const windows_txt = "Chrome OS";

// menu gombok
const ubuntu_btn = document.getElementById("ubuntu_btn");
const ubuntu_mate_bnt = document.getElementById("ubuntu_mate_btn");
const windows_iot_btn = document.getElementById("windows_iot_btn");
const button_text = document.getElementById("texts");
// kozepso gomb
const mid = ubuntu_mate_bnt;
// texts p aminek a szovege valtoztatva lesz
const texts = document.getElementById("texts");
const txt = texts.innerHTML;
// vissza gomb
const back = document.getElementById("vissza");

// text containers
const text_containers = document.getElementsByClassName("txt_container");

// context
const contx = document.querySelector("#context");

for (let i = 0; i < text_containers.length; i++) {
    text_containers[i].style = "display: none";
}

back.addEventListener("click", () => {
    // szoveg vissza valtoztatasa
    ubuntu_btn.innerHTML = ubuntu_txt;
    ubuntu_mate_bnt.innerHTML = ubuntu_mate_txt;
    windows_iot_btn.innerHTML = windows_txt;
    texts.innerHTML = txt;
    ubuntu_mate_bnt.style = "color: white;";

    for (let i = 0; i < text_containers.length; i++) {
        text_containers[i].style = "display: none";
    }

    $("ubuntu_teszt_hatrany").style = "display: none;";
    contx.style = "border: 2px solid white;";
});


// const img = document.querySelector('img');
// img.ondragstart = () => {
//     return false;
// };

const $ = (id) => {
    return document.getElementById(id);
}

// event listenerek a gombokra
// ubuntu
ubuntu_btn.addEventListener("click", () => {
    if (ubuntu_btn.innerHTML == ubuntu_txt) {
        // elonyok hatranyok
        mid.innerHTML = ubuntu_txt;
        ubuntu_btn.innerHTML = "Előnyök";
        windows_iot_btn.innerHTML = "Hátrányok";

        texts.innerHTML = "Ha ismered az Ubuntu asztali környezetet a számítógépeden vagy laptopodon, akkor azt kell mondanom, hogy semmi sem változik, amikor az Ubuntu-t futtatod a Raspberry Pi-n. Valójában, ha főként otthoni irodai munkát végzel (dokumentumok írása, internetezés, videók nézése stb.), akkor akár a számítógépedet is kicserélheted egy Raspberry Pi-re, amely sok pénzt takaríthat meg az energia számládon. Az Ubuntu 20.10 azonos alkalmazásokat tartalmaz, mint az Ubuntu asztali környezete GNOME-alapokon, és még egy kis pluszt is kap, mivel a Raspberry Pi-hoz készült Ubuntu 20.10 egyedi válogatással rendelkezik az alapértelmezett háttérképek között, amelyek máshol nincsenek.";
        mid.style = "color: orange;"; // HERE
        contx.style = "border: 2px solid orange;";
    }
    else {
        texts.innerHTML = "";

        if (mid.innerHTML == ubuntu_txt) {
            $("ubuntu_elonyok").style = "display: block";
            $("ubuntu_hatranyok").style = "display: none;";
        }
        else if (mid.innerHTML == ubuntu_mate_txt) {
            $("ubuntu_mate_elonyok").style = "display: block";
            $("ubuntu_mate_hatranyok").style = "display: none;";
        }
        else if (mid.innerHTML == windows_txt) {
            $("windows_elonyok").style = "display: block";
            $("windows_hatranyok").style = "display: none;";
        }
    }
});

// ubuntu mate
ubuntu_mate_bnt.addEventListener("click", () => {
    if (mid.innerHTML == ubuntu_txt) {
        text_containers[0].style = "display: none;";
        text_containers[3].style = "display: none;";
        texts.innerHTML = "Ha ismered az Ubuntu asztali környezetet a számítógépeden vagy laptopodon, akkor azt kell mondanom, hogy semmi sem változik, amikor az Ubuntu-t futtatod a Raspberry Pi-n. Valójában, ha főként otthoni irodai munkát végzel (dokumentumok írása, internetezés, videók nézése stb.), akkor akár a számítógépedet is kicserélheted egy Raspberry Pi-re, amely sok pénzt takaríthat meg az energia számládon. Az Ubuntu 20.10 azonos alkalmazásokat tartalmaz, mint az Ubuntu asztali környezete GNOME-alapokon, és még egy kis pluszt is kap, mivel a Raspberry Pi-hoz készült Ubuntu 20.10 egyedi válogatással rendelkezik az alapértelmezett háttérképek között, amelyek máshol nincsenek.";
    }
    else if (mid.innerHTML == ubuntu_mate_txt) {
        text_containers[1].style = "display: none";
        text_containers[4].style = "display: none;";
        ubuntu_mate_bnt.style = "color: #00BC5E;"; // HERE
        contx.style = "border: 2px solid #00BC5E;";
        texts.innerHTML = "A Raspberry Pi egyike a legnépszerűbb számítógép platformoknak, amelyen sokféle operációs rendszer futtatható, köztük az Ubuntu MATE is. Az Ubuntu MATE egy könnyen használható és felhasználóbarát operációs rendszer, amely kifejezetten a Raspberry Pi és más ARM-alapú számítógépek számára készült.";
    }
    else {
        text_containers[2].style = "display: none;";
        text_containers[5].style = "display: none;";
        texts.innerHTML = "A Raspberry Pi egy kis méretű számítógép, amelyet általában a Linux alapú Raspbian operációs rendszerrel használnak. Azonban a Risc OS (Internet of Things) operációs rendszer is támogatja a Raspberry Pi-t, és lehetővé teszi a számítógép alkalmazásait és eszközeit az IoT-rendszerbe való integrálását.";
    }

    if (ubuntu_mate_bnt.innerHTML == ubuntu_mate_txt) {
        mid.innerHTML = ubuntu_mate_txt;
        ubuntu_btn.innerHTML = "Előnyök";
        windows_iot_btn.innerHTML = "Hátrányok";

        texts.innerHTML = "A Raspberry Pi egyike a legnépszerűbb számítógép platformoknak, amelyen sokféle operációs rendszer futtatható, köztük az Ubuntu MATE is. Az Ubuntu MATE egy könnyen használható és felhasználóbarát operációs rendszer, amely kifejezetten a Raspberry Pi és más ARM-alapú számítógépek számára készült.";

        
    }
});

// Risc OS
windows_iot_btn.addEventListener("click", () => {
    if (windows_iot_btn.innerHTML == windows_txt) {
        mid.innerHTML = windows_txt;
        ubuntu_btn.innerHTML = "Előnyök";
        windows_iot_btn.innerHTML = "Hátrányok";

        texts.innerHTML = "A Chrome OS egy könnyűsúlyú, webalapú operációs rendszer, amelyet eredetileg a Google fejlesztett ki. Alapvetően a Google Chrome böngészőre épül, és célja a gyors, biztonságos és egyszerű használat a webes alkalmazások és szolgáltatások számára. A Chrome OS-Raspberry Pi kombináció előnye, hogy gyors és egyszerű hozzáférést biztosít a webes alkalmazásokhoz és szolgáltatásokhoz, mint például a Google Drive, a Google Docs és a Gmail. Emellett a Chrome OS automatikusan frissül, így mindig a legújabb biztonsági frissítésekkel és fejlesztésekkel rendelkezik.";

        mid.style = "color: #0393D9;"; // HERE
        contx.style = "border: 2px solid #0393d9";
    }
    else {
        texts.innerHTML = "";

        if (mid.innerHTML == ubuntu_txt) {
            $("ubuntu_hatranyok").style = "display: block";
            $("ubuntu_elonyok").style = "display: none";
        }
        else if (mid.innerHTML == ubuntu_mate_txt) {
            $("ubuntu_mate_hatranyok").style = "display: block";
            $("ubuntu_mate_elonyok").style = "display: none";
        }
        else if (mid.innerHTML == windows_txt) {
            $("windows_hatranyok").style = "display: block";
            $("windows_elonyok").style = "display: none";
        }

    }
});

// keszitok 
const keszitok_logo = document.getElementById("logo"); // logo
const keszitok = document.getElementsByClassName("creators")[0];
const style = keszitok.style;

keszitok_logo.addEventListener("mouseleave", () => {
    keszitok.style = style;
});

let v = false;
 $("teszt_eredmeny_gomb_ubuntu_hatrany").addEventListener("click", () => {
    v = !v;
    if (v) {
        $("ubuntu_teszt_hatrany").style = "display: block;";
    }
    else {
        $("ubuntu_teszt_hatrany").style = "display: none;";
    }
 });

 let v2 = false;
 $("teszt_eredmeny_gomb_ubuntu_elony").addEventListener("click", () => {
    v2 = !v2;
    if (v2) {
        $("ubuntu_teszt_elony").style = "display: block";
    }
    else {
        $("ubuntu_teszt_elony").style = "display: none;";
    }
 });

 let v3 = false;
 $("teszt_eredmeny_gomb_windows_elony").addEventListener("click", () => {
    v3 = !v3;
    if (v3) {
        $("windows_teszt_elony").style = "display: block";
    }
    else {
        $("windows_teszt_elony").style = "display: none;";
    }
 });

 let v4 = false;
 $("teszt_eredmeny_gomb_windows_hatrany").addEventListener("click", () => {
    v4 = !v4;
    if (v4) {
        $("windows_teszt_hatrany").style = "display: block";
    }
    else {
        $("windows_teszt_hatrany").style = "display: none;";
    }
 });

 let v5 = false;
 $("ubuntu_mate_elonyok_gomb").addEventListener("click", () => {
    v5 = !v5;
    if (v5) {
        $("ubuntu_mate_teszt_elonyok").style = "display: block";
    }
    else {
        $("ubuntu_mate_teszt_elonyok").style = "display: none;";
    }
 });

 let v6 = false;
 $("ubuntu_mate_gomb_hatrany").addEventListener("click", () => {
    v6 = !v6;
    if (v6) {
        $("ubutnu_mate_teszt_hatrany").style = "display: block";
    }
    else {
        $("ubutnu_mate_teszt_hatrany").style = "display: none;";
    }
 });