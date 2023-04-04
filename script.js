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

// szovegek
const ubuntu_szoveg = "A Wi-Fi 2,4 GHz-es és 5 GHz-es hálózatok működnek a Bluetooth-al egyetemben, és egyetlen egérkattintással sikerült csatlakoztatni a TaoTronics vezeték nélküli fülhallgatót is. A Full HD (1080p) YouTube videók mind a Mozilla Firefoxban (alapértelmezett), mind pedig a Chromium webböngészőben (snap-ként telepítve) működnek, és a Full HD (1080p) videólejátszás is hibátlanul működik.";
const ubuntu_mate_szoveg = "Felhasználóbarát felület: Az Ubuntu MATE felhasználóbarát felülete lehetővé teszi, hogy könnyen navigálj a rendszerben, és használja a különböző alkalmazásokat és eszközöket. Stabil: Az Ubuntu MATE stabil és megbízható operációs rendszer, amely megbízhatóan fut a Raspberry Pi-n, és minimális karbantartást igényel. Támogatás: Az Ubuntu MATE-t aktívan fejlesztik, és rendszeresen frissítik a biztonsági frissítéseket és a hibajavításokat. Az Ubuntu MATE-hoz is van közösségi támogatás, amely segíthet az esetlegesen felmerülő problémák megoldásában. Nagy alkalmazáskínálat: Az Ubuntu MATE-hez elérhető nagy alkalmazáskínálat könnyen telepíthető a rendszerre a felhasználók számára, amelyek különböző célokra használhatók, például a webböngészés, a szövegszerkesztés, a multimédiás lejátszás és még sok más.";
const windows_szoveg = "Jól ismert környezet: A Windows IoT operációs rendszer jól ismert és elterjedt az iparban, ezért sok fejlesztő számára ismerős lehet. Ez azt jelenti, hogy az átállás könnyebb lehet a fejlesztőknek, akik már tapasztalattal rendelkeznek a Windows fejlesztés terén. Felhő integráció: A Windows IoT operációs rendszer lehetővé teszi a felhő alapú szolgáltatásokkal való integrációt, mint például az Azure IoT Hub, a Microsoft felhőalapú IoT platformja. Ez lehetővé teszi a felhasználók számára az eszközeik távoli felügyeletét és irányítását. Windows kompatibilitás: A Windows IoT operációs rendszer lehetővé teszi a Windows-kompatibilis alkalmazások futtatását a Raspberry Pi-n. Ez azt jelenti, hogy a fejlesztőknek nem kell külön alkalmazásokat fejleszteniük a Raspberry Pi-hoz.";

back.addEventListener("click", () => {
    // szoveg vissza valtoztatasa
    ubuntu_btn.innerHTML = ubuntu_txt;
    ubuntu_mate_bnt.innerHTML = ubuntu_mate_txt;
    windows_iot_btn.innerHTML = windows_txt;
    texts.innerHTML = txt;

    for (let i = 0; i < text_containers.length; i++) {
        text_containers[i].style = "display: none";
    }
});


const img = document.querySelector('img');
img.ondragstart = () => {
    return false;
};

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