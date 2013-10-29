var d, i, j, n;
d = c("div");
for (n = 0; n < 3; n++) {
    for (j = 0; j < 7; j++) {
        i = c("img");
        i.src = "Images/" + j + ".jpg";
        d.appendChild(i);
    }
}
document.getElementById("Layer1").appendChild(d);
function c(el) {
    return document.createElement(el);
}