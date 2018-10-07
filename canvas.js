window.addEventListener('load', init, false);
var started = false, canvas, context, button;
function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    button = document.getElementById('clear');

    canvas.addEventListener('mousemove', moveHandler, false);
    canvas.addEventListener('mousedown', downHandler, false);
    canvas.addEventListener('mouseup', upHandler, false);

    button.onclick = function() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    function getCoords(e) {
        var x, y;
        if (e.layerX || e.layerX == 0) {
            x = e.layerX;
            y = e.layerY;
        } else if (e.offsetX || e.offsetX == 0) {
            x = e.offsetX;
            y = e.offsetY;
        }
        return { x: x, y: y};
    }

    function downHandler(e) {
        context.beginPath();
        context.moveTo(getCoords(e).x, getCoords(e).y);
        started = true;
    }

    function upHandler(e) {
        started = false;
    }

    function moveHandler(e) {
        if (started) {
            context.lineTo(getCoords(e).x, getCoords(e).y);
            context.strokeStyle = 'grey';
            context.stroke();
        }
    }
}