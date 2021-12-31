export const headerMiniLogo = require('./assets/images/logo-coco-bambu-mini.png');
export const lookingIcon = require('./assets/images/icon-busca.png');
export const clock = require('./assets/images/icon-time.png');
export const loginIcon = require('./assets/images/icon-login.png');
export const keyIcon = require('./assets/images/icon-key.png');
export const bigLogo = require('./assets/images/logo-coco-bambu.png');



const pratoBoboG = require('./assets/images/prato-bobo-grande.jpg');
const pratoBoboP = require('./assets/images/prato-bobo-peq.jpg');
const pratoArrozMariscosG = require('./assets/images/prato-arroz-grande.jpg');
const pratoArrozMariscosP = require('./assets/images/prato-arroz-marisco-peq.jpg');
const pratoFrutoG = require('./assets/images/prato-fruto-grande.jpg');
const pratoFrutoP = require('./assets/images/prato-fruto-peq.jpg');
const pratoMassaG = require('./assets/images/prato-massa-grande.jpg');
const pratoMassaP = require('./assets/images/prato-massa-peq.jpg');
const pratoMoquecaG = require('./assets/images/prato-moqueca-grande.jpg');
const pratoMoquecaP = require('./assets/images/prato-moqueca-peq.jpg');

export function imagensPratos() {
    const imagensPratoGrandeMap = new Map();
    imagensPratoGrandeMap.set("Bobó de Lagosta", pratoBoboG);
    imagensPratoGrandeMap.set("Arroz de Mariscos para 2 pessoas", pratoArrozMariscosG);
    imagensPratoGrandeMap.set("Frutos do Mar ao Azeite de Ervas", pratoFrutoG);
    imagensPratoGrandeMap.set("Massa espaguete à Italiana", pratoMassaG);
    imagensPratoGrandeMap.set("Moqueca Tropical", pratoMoquecaG);

    const imagensPratoPequenoMap = new Map();
    imagensPratoPequenoMap.set("Bobó de Lagosta", pratoBoboP);
    imagensPratoPequenoMap.set("Arroz de Mariscos para 2 pessoas", pratoArrozMariscosP);
    imagensPratoPequenoMap.set("Frutos do Mar ao Azeite de Ervas", pratoFrutoP);
    imagensPratoPequenoMap.set("Massa espaguete à Italiana", pratoMassaP);
    imagensPratoPequenoMap.set("Moqueca Tropical", pratoMoquecaP);
    return {
        imagensGrandes: imagensPratoGrandeMap,
        imagensPequenas: imagensPratoPequenoMap
    }
}

