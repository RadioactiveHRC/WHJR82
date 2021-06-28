var mouseEvent = "empty";
var lastX, lastY;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
widthoftheline = 1;
canvas.addEventListener("mousedown", mouse_down);
function mouse_down(e) {
    color = document.getElementById("color").value;
    widthoftheline = document.getElementById("widthoftheline").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if (mouseEvent = "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthoftheline;
        console.log("Last position of X and Y coordinates");
        console.log("X=" + lastX + "Y=" + lastY);
        ctx.moveTo(lastX, lastY);
        console.log("Current position of X and Y coordinates");
        console.log("X=" + currentX + "Y=" + currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
canvas.addEventListener("mouseup", mouse_up);
function mouse_up(e) {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(e) {
    mouseEvent = "mouseleave";
}
function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}