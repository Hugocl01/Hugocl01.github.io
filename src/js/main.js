window.addEventListener("load", cargar, false);

//Variables
var body;
var cursor;

function cargar() {
    body = document.querySelector("body");
    body.addEventListener("mousemove", moverCursor, false);
    body.addEventListener("mouseover", fijarCursor, false);
}

function moverCursor() {
    cursor = document.querySelector("#cursor");
    var cursorWidth = cursor.offsetWidth;
    var cursorHeight = cursor.offsetHeight;
    var posX = event.pageX - (cursorWidth / 2);
    var posY = event.pageY - (cursorHeight / 2);
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";
}

function fijarCursor() {
    cursor = document.querySelector("#cursor");
    var cursorWidth = cursor.offsetWidth;
    var cursorHeight = cursor.offsetHeight;
    var posX = event.pageX - (cursorWidth / 2);
    var posY = event.pageY - (cursorHeight / 2);
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";
}