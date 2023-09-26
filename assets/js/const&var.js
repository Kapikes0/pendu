
                                                // tableaux des mots
const MOTS = {
    'facile': ["un", "deux", "trois", "toi", "moi", "lui", "ile", "sot", "cop", "coq", "tot", "top", "hop", "bob", "fou",
        "ado", "bis", "cor", "fac", "gaz", "git", "glu", "gos", "goy", "hip", "hop", "jet", "cru", "mai", "ski", "ton", "tic"],

    'moyen': ["balise", "document", "juda", "Aacces", "alfas", "aloes", "awale", "banjo", "boeuf", "chera", "escot", "honni", "houez",
        "igloo", "iodes", "moult", "seau", "seuil", "toqua", "tyran", "vetit", "volve", "saut", "sceaux", "sot"],

    'dur': ["hippopotomonstrosesquippedaliophobie", "Mittelschaeffolsheimoises", "encephalographie", "contraventionnalisation", "hexakosioihexekontahexaphobie", "cyclopentanoperhydrophenanthrene", "coccyx", "acutesse", "pontil", "sabord", "seisme", " whisky", "yankee", "peccamineux", "gaupe",
        "languide", "goupillon", "primesautier", "neotenie", "spermaceti", "anonchalir", "passementerie", "Cracovie", "sabouler", "bassinoire", "cacatois", "galhauban"]
}




                                                // variables


var pendu, lettreAccepter, soluce, fin, lettres_mot, vie, pv, dif, facile, moyen, dur, dif_class, debute,
    nombre_error, mots_restant, point_vie;




                                                // valeur des variables
facile = document.querySelector('#dif_facile');
moyen = document.querySelector('#dif_moyen');
dur = document.querySelector('#dif_dur');
dif_class = document.querySelector('#dif_class');
debute = document.querySelector('#debut')


pendu = document.querySelector('#pendu');
soluce = document.querySelector('#soluce');
lettreAccepter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
mots_restant = 10;
nombre_error = 0;
pv = 10;
vie = 100;







/*
                 probleme a regler 

        limite les touche cliquable sur le clavier

        rendre le clavier virtuel cliquable pour plus de praticite

        et rendre les difficulte choisissable

        meilleur bg sur les touches deja clique


                a rajoute et ou modifier
        
        le nombre de mots pas trouvé
        le diferencié avec avec le nombre de mot trouvé
        meilleur ergonomie sur la disposition des elements
        des effets





*/