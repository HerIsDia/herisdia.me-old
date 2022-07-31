import logoGenerated from "../logo.json";

export const logoRandom = (): string => {
    const nbrOfImages = logoGenerated.nbrOfImages;
    const chosenImage = Math.floor(Math.random() * nbrOfImages);
    return `./logos/${logoGenerated.files[chosenImage]}`;
}
