document.getElementById('random').onclick = function () {
    var min = Math.ceil(document.getElementById('min').value);
    var max = Math.floor(document.getElementById('max').value);

    random(min, max);
}

const history = [];

function random(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (history.includes(randomNumber)) {
        random(min, max);
    }
    else {
        document.getElementById('selectedNumber').innerHTML = randomNumber;
        history.push(randomNumber);

        document.getElementById('history').innerHTML = "";

        for (var i = 0; i < history.length; i++) {
            document.getElementById('history').innerHTML += history[i] + "<br>";
        }
    }
}