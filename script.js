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
const txt = texts.innerHTML;
// vissza gomb
const back = document.getElementById("vissza");

// text containers
const text_containers = document.getElementsByClassName("txt_container");

for (let i = 0; i < text_containers.length; i++) {
    text_containers[i].style = "display: none";
}

back.addEventListener("click", () => {
    // szoveg vissza valtoztatasa
    ubuntu_btn.innerHTML = ubuntu_txt;
    ubuntu_mate_bnt.innerHTML = ubuntu_mate_txt;
    windows_iot_btn.innerHTML = windows_txt;
    texts.innerHTML = txt;
    ubuntu_mate_bnt.style = "color: black;";

    for (let i = 0; i < text_containers.length; i++) {
        text_containers[i].style = "display: none";
    }

    $("ubuntu_teszt_hatrany").style = "display: none;";
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
        mid.style = "color: #FF99FF;";
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
        ubuntu_mate_bnt.style = "color: #FF99FF;";
        texts.innerHTML = "A Raspberry Pi egyike a legnépszerűbb számítógép platformoknak, amelyen sokféle operációs rendszer futtatható, köztük az Ubuntu MATE is. Az Ubuntu MATE egy könnyen használható és felhasználóbarát operációs rendszer, amely kifejezetten a Raspberry Pi és más ARM-alapú számítógépek számára készült.";
    }
    else {
        text_containers[2].style = "display: none;";
        text_containers[5].style = "display: none;";
        texts.innerHTML = "A Raspberry Pi egy kis méretű számítógép, amelyet általában a Linux alapú Raspbian operációs rendszerrel használnak. Azonban a Windows IoT (Internet of Things) operációs rendszer is támogatja a Raspberry Pi-t, és lehetővé teszi a számítógép alkalmazásait és eszközeit az IoT-rendszerbe való integrálását.";
    }

    if (ubuntu_mate_bnt.innerHTML == ubuntu_mate_txt) {
        mid.innerHTML = ubuntu_mate_txt;
        ubuntu_btn.innerHTML = "Előnyök";
        windows_iot_btn.innerHTML = "Hátrányok";

        texts.innerHTML = "A Raspberry Pi egyike a legnépszerűbb számítógép platformoknak, amelyen sokféle operációs rendszer futtatható, köztük az Ubuntu MATE is. Az Ubuntu MATE egy könnyen használható és felhasználóbarát operációs rendszer, amely kifejezetten a Raspberry Pi és más ARM-alapú számítógépek számára készült.";

        
    }
});

// windows IoT
windows_iot_btn.addEventListener("click", () => {
    if (windows_iot_btn.innerHTML == windows_txt) {
        mid.innerHTML = windows_txt;
        ubuntu_btn.innerHTML = "Előnyök";
        windows_iot_btn.innerHTML = "Hátrányok";

        texts.innerHTML = "A Raspberry Pi egy kis méretű számítógép, amelyet általában a Linux alapú Raspbian operációs rendszerrel használnak. Azonban a Windows IoT (Internet of Things) operációs rendszer is támogatja a Raspberry Pi-t, és lehetővé teszi a számítógép alkalmazásait és eszközeit az IoT-rendszerbe való integrálását.";

        mid.style = "color: #FF99FF;";
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