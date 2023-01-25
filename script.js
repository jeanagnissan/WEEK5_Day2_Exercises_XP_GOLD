/** Exercice 1 : Couleur Préférée */

//1.Écrivez un code Javascript simple qui rejoindra tous les éléments du tableau ci-dessus, et console.log le résultat.

let sentence = ["my","favorite","color","is","blue"];
sentence.join(" ")
console.log(sentence.join(" "));

/** Exercice 2 : Mixup */

//Créez 2 variables. Les valeurs doivent être des chaînes. Par exemple:

let str1 = "mix";
let str2 = "pod";

//2. Découpez et échangez les 2 premiers caractères des deux chaînes de la partie 1.


str1.replace("mi" ,"po");
str2.replace("po", "mi");

//3. Créez une troisième variable où la valeur est la concaténation des deux chaînes de la partie 1 (séparées par un espace).

let newString = str1.replace("mi" ,"po")+ ' ' + str2.replace("po", "mi");;

console.log(newString);

//str1 = str1.split("").splice(0, 1, 'p', 'o').join("");
//str2 = str2.split("").splice(0, 1, 'm', 'i').join("");

// Exercice 3 : calculatrice

let num1 = prompt("saisissez un numéro : ");

num1 = parseInt(num1);

let num2 = prompt("saisissez un second numéro :");
num2 = parseInt(num2);

let result;

let operator = prompt("quel opération souhaité vous faire? (+, -, /, *");

switch(operator) {
    case '+' :
        result = num1 + num2;
        break;
    case '-' :
        result = num1 - num2;
        break;
    case '*' :
        result = num1 * num2;
        break;
    case '/' :
        result = num1 / num2;
        break;
    default :
        result = "erreur";
        break
}

alert(`le resultat est ${result}`);

