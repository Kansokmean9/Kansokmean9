// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Collapse });

const properties = ["សូមស្វាគមន៍", "WELCOME"];
const bgColor = [];

let arrayIndex = 0;
let arrayElementIndex = 0;

const container = document.querySelector("#container-text");
const body = document.querySelector("body");

autoTextEffectFun();

function autoTextEffectFun() {
    arrayElementIndex++;
    container.innerHTML = `<h2>I ${properties[arrayIndex].slice(
        0,
        arrayElementIndex
    )}</h2>`;
    body.style.backgroundColor = bgColor[arrayIndex];
    if (arrayElementIndex === properties[arrayIndex].length) {
        arrayIndex++;
        arrayElementIndex = 0;
    }

    if (arrayIndex === properties.length) {
        arrayIndex = 0;
    }

    setTimeout(autoTextEffectFun, 400);
}


