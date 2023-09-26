


const MOTS = ["un", "deux", "trois", "toi", "moi", "lui", "ile", "sot", "cop", "coq", "tot", "top", "hop", "bob", "fou"]

var pendu, lettreAccepter, soluce, fin,
    nombre_error, mots_restant, point_vie;






fin = true;
pendu = document.querySelector('#pendu');
soluce = document.querySelector('#soluce');
lettreAccepter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
mots_restant = 0;
nombre_error = 0;
point_vie = 10;










function debut() {
    fin = false;
    nombre_coup = 0;
    mots_restant = 0;
    nombre_error = 0;
    point_vie = 10;

    suivant();

}

function random_mot() {                             //mot au hasard
    let melange, mot;
    melange = MOTS.sort(() => Math.random() - 0.5);
    mot = melange[0];
    melange.shift();
    return mot;
}

function suivant() {
    point_vie -= nombre_error / 8;
    nombre_error = 0;


    letsgo()

    document.querySelector("#vie").innerText = "vie restant=> " + point_vie + " /10, mots restant=> " + (10 - mots_restant);
    document.querySelector('#boom').src = "./assets/img/b0.jpg";
    document.querySelectorAll('#let').forEach(function (lettre_clavier) {
        lettre_clavier.style.backgroundColor = "#ffffff";
        mot_selectionne = random_mot();
        console.log(mot_selectionne);
        console.log(MOTS);

        lettres_mot = mot_selectionne.split('');


        lettres_mot.forEach(function (lettre) {                     //mot a trouver
            span = document.createElement('span');
            span.className = "border-bottom border-dark px-2 mx-1";
            span.id = lettre;
            pendu.appendChild(span);
        })
    })
}


document.querySelector('body').onkeydown = function (evenement) {           //clavier
    document.querySelector("#let_" + evenement.key.toLowerCase()).style.backgroundColor = "#666666";
    //if (lettreAccepter.indexOf(evenement.key) == -1)
    //  return;
    // if pour gerer les caracteres speciaux [A..Z]
    if (lettres_mot.includes(evenement.key)) {


        document.querySelectorAll('#' + evenement.key).forEach(function (span) {
            span.innerText = evenement.key;

            mot_etapes = ""
            document.querySelectorAll('#pendu span').forEach(function (span) {
                mot_etapes += span.innerText
                if (mot_etapes === mot_selectionne) {
                    mots_restant++;
                    if (mots_restant == 10) {
                        document.querySelector("#vie").innerText = "vie restant=> " + (point_vie - nombre_error / 8) + " /10, mots restant=> " + (10 - mots_restant);
                        fin = true;
                        console.log('vous avez trouver le mot');
                    } else {
                        window.setTimeout(function att() {
                            suivant();
                        }, 5000);
                    }
                } else {
                    //
                    nombre_error++;
                    document.querySelector('#boom').src = "./assets/img/b" + nombre_error + ".jpg";
                    if (nombre_error == 8) {
                        window.setTimeout(function att() {
                            suivant();
                            soluce.className = ("d-block");
                            soluce = "le mot a trouver etait => " + mot_selectionne;
                        }, 5000);
                        mots_restant++;
                    }
                    soluce.className = ("d-none");
                    console.log('perdu');
                }
            })
        })
    }
}









