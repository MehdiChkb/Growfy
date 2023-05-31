// CHAPITRE 1

let numberOfCats = 2;
let numberOfFilms= 9;

// Déclarer des variables avec let //
// Déclarer des constantes avec const //

const hoursPerDay = 24
const minutesPerHour = 60
const secondsPerMinute = 60

// Création d'objet //

let episode = {
    title :'House Of Dragons',
    duration :6 ,
    Watched : true
};

// Accédéer aux données //

let episodeTitle = episode.title;
let episodeduration = episode.duration; // Création de variable avec les éléments souhaités //

// Bracket Notation //

let episodeTitle = episode['title'];

let Variable = 'title';
let episodeTitle = episode[Variable];

// Exo //

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeWatched = episode.Watched;

// Manipulez les classes ((une classe est un modèle pour un objet dans le code.)) //

class Film {

    constructor(title, duration, Watched) {

        this.title = title;
				this.duration = duration;
				this.Watched = Watched;

    }

}

// Créer une instance avec (New) //

let Myfilm = new Film("House Of Dragons",6,true);

// Cette ligne crée l'objet : //
{
    title : "House Of Dragons",
    duaration : 6,
    Watched : true,
}

//  Exo //

class Film {
    constructor(title,duration,hasBeenWatched){
      this.title = title;
      this.duration = duration;
      this.Watched = Watched
    }
  }
  
  let firstEpisode = new Film("Tuer",7,false);
  let secondEpisode = new Film("Dragon",20,true);
  let thirdEpisode = new Film("Targaryen",10,false);

  // Tableaux [] //

let guests =["Mehdi","Brice"]

let firstguest = guests[0]; // Prend le premier élément du tableau //
let tenguest = guests[10] // undefined //

guests.push("Alexandre"); // ajoute "Alexandre" à la fin de notre tableau guests
guests.unshift("Tao Perkington"); // ajoute "Tao Perkington" àau début de notre tableau guests

// CHAPITRE 2 

// IF / ELSE //

let UserLoggedIn = true;

if (UserLoggedIn) {
console.log("Utilisateur connecté!");
} else {
console.log("Alerte, intrus!");
}

//- `&&` – ET logique – pour vérifier si deux conditions sont **toutes les deux** vraies ;
// - `||` – OU logique – pour vérifier si **au moins une** condition est vraie ;
// - `!` – NON logique – pour vérifier si une condition n'est **pas** vraie. 

// Switch //

switch (firstUser.accountLevel) {

    case 'normal':
        console.log('You have a normal account!');
        break;
    
    case 'premium':
        console.log('You have a premium account!');
        break;
    
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    
    default:
        console.log('Unknown account type!');
    }
    
// FOR WHILE //

    - la boucle `for` , pour un nombre d'itérations fixe ;
    - la boucle `while` , quand le nombre d'itérations nécessaires est inconnu.

// CHAPITRE 3

// FONCTION //

// On définit la fonction

function afficherDeuxValeurs(valeur1,valeur2) {

    console.log('Première valeur:' + valeur1);
    
    console.log('Deuxième valeur:' + valeur2);
    
    }

afficherDeuxValeurs(12, 'Bonjour'); // execute