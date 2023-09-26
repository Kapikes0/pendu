

function difficulte() {
    if (facile.onclick) {                                                                                                                   // difficulte facile
        dif = 'facile';
        dif_class.className = "row d-none";
        debute.className = "btn btn-danger fs-2 d-inline";
    }
    else if (moyen.onclick) {                                                                                                               // difficulte moyen
        dif = 'moyen';
        dif_class.className = "row d-none";
        debute.className = "btn btn-danger fs-2 d-inline";
    }
    else if (dur.onclick) {                                                                                                                 // difficulte dur
        dif = 'dur';
        dif_class.className = "row d-none";
        debute.className = "btn btn-danger fs-2 d-inline";
    }

    console.log(dif);                                                                                                                       // fonctionne pas
}


function debut() {                                                                                                                          // debut


    clearTimeout(t);                                                                                                                        // pause du chrono
    nombre_coup = 0;                                                                                                                        // mise a zero des variable
    mots_restant = 10;
    nombre_error = 0;
    pv = 10;
    vie = 100;
    debute.className = "d-none";                                                                                                            // cache boutton

    suivant();

}

function random_mot() {                                                                                                                     // mot au hasard
    let melange, mot;
    melange = MOTS[dif].sort(() => Math.random() - 0.5);
    mot = melange[0];
    melange.shift();
    return mot;
}


function suivant() {
    pendu.innerHTML = "";
    document.querySelectorAll('.lettre').forEach(function (lettre_clavier) {                                                                // lier les clavier 
        lettre_clavier.style.backgroundColor = "rgba(0,0,0,0.001)";                                                                         // remets a zero le bg du clavier
        lettre_clavier.style.borderRadius = "10px";
    })
    document.querySelector('#soluce').className = "d-none";





    nombre_error = 0;                                                                                                                       // nombre erreur au debut du mot


    letsgo();                                                                                                                               // fonction temps

    document.querySelector("#kk").innerText = "mots restant a trouver=> " + mots_restant + "";                                              // afficher pv et mot restant a trouvé

    document.querySelector('#boom').src = "./assets/img/boom/b0.png";                                                                       // afficher img de base 
    mot_selectionne = random_mot();                                                                                                         // varbialiser la fonction 
    console.log(mot_selectionne);
    console.log(MOTS[dif]);

    lettres_mot = mot_selectionne.split('');                                                                                                // trancher le mot


    lettres_mot.forEach(function (lettre) {                     //mot a trouver                                                                creer des span _ _ _   
        span = document.createElement('span');                                                                                              // pour remplacer les lettres   
        span.className = "border-bottom border-dark px-2 mx-1";
        span.id = lettre;
        pendu.appendChild(span);
    })

    document.querySelector('body').onkeydown = function (evenement) {           //clavier

        document.querySelector("#let_" + evenement.key.toLowerCase()).style.backgroundColor = "rgba(214, 0, 0, 0.952)";                     // change le bg des touche appuyer
        // document.querySelectorAll('.lettre').forEach(function (button) {             //fonctionne pas
        //    button.onclick = function () {                                            //foctionne pas


        if (lettres_mot.includes(evenement.key)) {                                                                                          // si les mot tape sur le clavier sont juste



            //if (lettreAccepter.indexOf(evenement.key) == -1)
            //  return;
            


            document.querySelectorAll('#' + evenement.key).forEach(function (span) {                                                        // la span _ se ramplace par la lettre
                span.innerText = evenement.key;

                mot_etapes = ""
                document.querySelectorAll('#pendu span').forEach(function (span) {
                    mot_etapes += span.innerText
                    if (mot_etapes === mot_selectionne) {                                                                                   // si toute les lettre on ete trouvé
                        mots_restant--;
                        // decrementation des mot encore a trouvé
                        if (mots_restant == 0) {                                                                                            // si mot a trouvé est =0
                            clearTimeout(t);
                            document.querySelector("#restart").className = "btn btn-danger btn-lg";                                         // pause du chrono
                            document.querySelector("#kk").innerText = "bravo vous avez reussi et il vous reste encore " + pv + " de vie";   // gagne  la partie
                            if (pv < 3) {
                                document.querySelector("#kk").innerText = "bravo vous avez reussi mais a un cheveux il ne vous reste que " + pv + " vie en esperant que vous fairiez mieux la prochaine fois";

                            }
                            // fin
                            console.log("fini c'est gg");
                        } else {                                                                                                            // sinon
                            clearTimeout(t);                                                                                                // pause du chrono
                            window.setTimeout(function att() {                                                                              // on att 1.5sec avant d'envoyer le mot suivant
                                suivant();
                            }, 1500);
                        }
                    }
                })
            })

        } else {


            nombre_error++;                                                                                                                 // sinon incrementation du nombre d'erreur
            point_vie = nombre_error                                                                                                        // perte de point de vie en fonction des erreurs

            if (point_vie = +1) {
                vie -= 20;

                if (vie == 0) {
                    vie = 80;
                    pv -= 1;
                }

            }
            console.log(nombre_error);

            document.querySelector('#vie' + pv).src = "./assets/img/vie/vie" + vie + ".png";                                                // degression des point de vie


            document.querySelector('#boom').src = "./assets/img/boom/b" + nombre_error + ".png";                                            // changement img
            if (pv <= 1 && vie <= 20) {                                                                                                     // perdu fin de la partie
                document.querySelector('#pendu').className = "d-none";
                document.querySelector('#soluce').className = "d-block";
                document.querySelector("#restart").className = "btn btn-danger btn-lg";
                clearTimeout(t);                                                                                                            // pause du chrono
                document.querySelector('#soluce').innerText = "perdu, vous n'etes pas arriver au bout de la liste ,il ne vous restait pourtant " + mots_restant + " mots a trouver";
                if (mots_restant < 3) {

                    document.querySelector('#soluce').innerText = "perdu, vous n'etes pas arriver au bout de la liste pourtant vous y etiez pres, " + mots_restant + "mots  a trouver";
                }
            }


            if (nombre_error == 8 && pv >= 1 && vie >= 20) {                                                                                // si erreur est = 8 et qu'il reste + de 1/4 de vie   
                clearTimeout(t);                                                                                                            // pause du chrono
                window.setTimeout(function att() {                                                                                          // on att 2sec avant d'envoyer le mot suivant
                    mots_restant--;                                                                                                         // decrementation des mot encore a trouvé
                    suivant();                                                                                                              // mot suivant
                }, 2000);

                document.querySelector('#soluce').className = "d-block";                                                                    // on rend la solution visible

                document.querySelector('#soluce').innerText = "le mot a trouver etait => " + mot_selectionne;
            }

            console.log('perdu essaie une autre lettre');


        }
        //   }
        //})

    }

}

























/*  var mot;
  mot = "javascript";

  tableau = mot.split(''); // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
  console.log(tableau.length);

  document.querySelector('button').onclick = function() {
      let lettre;
      lettre = document.querySelector('input').value;
      console.log(lettre);
  }

  console.log([1, 2, 3, 4, 5].includes(2));
  console.log([1, 2, 3, 4, 5].includes(7));
*/