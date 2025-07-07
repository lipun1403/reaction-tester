var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function move() {
    var left = Math.floor(Math.random() * 300);
    var top = Math.floor(Math.random() * 300);
    var wh = Math.floor((Math.random() * 400) + 100);

    // var elem = document.getElementById("touch");
    document.getElementById("touch").style.left = left + "px";
    document.getElementById("touch").style.top = top + "px";
    document.getElementById("touch").style.height = wh + "px";
    document.getElementById("touch").style.width = wh + "px";
    document.getElementById("touch").style.display = "block";
    document.getElementById("touch").style.backgroundColor = getRandomColor();

    start = new Date().getTime();
}

move();

document.getElementById("touch").onclick = function () {
    document.getElementById("touch").style.display = "none";
    var end = new Date().getTime();
    var timetaken = (end - start) / 1000;
    alert(timetaken);
    move();
}