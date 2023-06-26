// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Tableau  
const gamePlayStation = ['Call Of Duty', 'GTA', 'FIFA 23', 'Last Of US', 'Watch Dogs']; // Création du tableau avec des éléments 
const theMethodJoin = gamePlayStation.join(' - '); // join (ou ajoute) ' - '
console.log(theMethodJoin); // print 'Call Of Duty - GTA - FIFA 23 - Last Of US - Watch Dogs'

let count = 0; // j'initialise le compteur à 0 
let food = 'Pizza'; // Attribue ma variable 'food' à la valeur 'Pizza'
 
// Instructions Do...While 
do {
    count++; // Incrémente count de + 1
    console.log(`I like to eat ${food} ` + count); // print 'I like to eat Pizza 1, ...., I like to eat Pizza 10' 
} while (count < 10); // Tant que count est inférieur à 10, il continuera à s'incrémenter 

// Utlisation des majuscules et miniscules 
console.log('Hello'.toUpperCase()); // print 'HELLO'
console.log('HELLO'.toLocaleLowerCase()); // print 'hello'

// Utilisation des débuts et fins de lettres 
console.log('Mike'.startsWith('M')); // prit 'true' 
console.log('Mike'.endsWith('i')); // print 'false'


// utilsation de la méthode .charAt(); 
const setenteToFindTheCharactere = 'Ce jour là, j\'ai bien cru qu\'il allait pleuvoir, mais en fait, il faisait beau.'; 
const index = 17; 

console.log(`La lettre qui se trouve à l'index ${index} est ${setenteToFindTheCharactere.charAt(index)}`);

var useString = 'Salut Londres';
console.log('Le caractère de l\'indice 0 est ' + useString.charAt(0) + ' \' ');

// utilisation de la métode
var sentenceToFindUtfSixTeen = 'Ce jour là, j\'ai bien cru qu\'il allait pleuvoir, mais en fait, il faisait beau.';
const theIndex = 4; 

console.log(`Ce numéro ${theIndex} dans la phrase "${sentenceToFindUtfSixTeen}" correspond au chiffre ${sentenceToFindUtfSixTeen.charCodeAt(theIndex)} dans l'UTF-16.`);

// création des objets 
let dog = {
    name : 'Halley', // paire clé-valeur 
    age : 5,  
    type : 'Golden retriever', 
}; 

console.log(dog.name); // j'accède au nom  => print 'Halley'
console.log(dog['age']); // j'accède à l'âge => print '5'
console.log(dog.type);  // j'accède au type => print 'Gelden retriever' 
console.log(dog['!!!!!!!']); // print 'Undefined'   

const theInstance = (objectName, propName) => objectName[propName];
console.log(theInstance(dog,'name')); // print Halley 

// EXERCICE SUR CODEACADEMY
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   }; 
  
// COMPRENDRE LA STUCTURE 
let propName =  'Active Mission';
// let isActive = spaceship['Active Mission']; 
console.log(spaceship[propName]); 

// CREATION DU OBJET VIA UN ARRAY DE PAIRS CLÉ/VALE
for (let key in {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10}) {
    console.log(typeof key); 
}

const obj  = {name : 'Guilly', age : 34, type : '/'};
for (let objet in obj) {
    console.log(obj[objet]);
}


