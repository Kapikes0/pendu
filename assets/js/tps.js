// variable pour le chrono
var temps = document.querySelector('#time');
var s = [];
var m = [];
var h = [];
var t, scd, mnt, hs;
var min = 0;
var sec = 0;
var hrs = 0;





//fonction chronometre


function tiktak() {                                                         // fonction systeme horaire
    sec++
    if (sec >= 60) {                                                        // si 60sec => 1min
        sec = 0;
        min++;
        if (min >= 60) {                                                    // si 60min => 1h
            min = 0;
            hrs++;
        }
    }
}

function chrono() {
    tiktak();
    temps.innerText = (hrs > 9 ? hrs : "0" + hrs)                              // si il y a qu'un seul chiffre
        + ":" + (min > 9 ? min : "0" + min)                              // rajout d'un 0 devant
        + ":" + (sec > 9 ? sec : "0" + sec);
    letsgo();
}
function letsgo() {                                                         // fonction temps d'attente
    t = setTimeout(chrono, 1000);                                           // entre 2sec 1000 milieme de sec
}






/*
function augmenteTemps() {

    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.innerText = minutes + "m:" + secondes + "s";
    temps++;
    //temps = temps <= 0 ? 0 : temps - 1  //pour stoper la decremantation
}

setInterval(augmenteTemps, 1000);
/*



/* version un peu plus ameliorer du tps en decrematation


const departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
*/