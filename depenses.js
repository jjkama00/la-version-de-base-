const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertion des trois dépenses en nombres.

const transport = Number (transportTexte); // Type : number ; unité : FCFA
const alimentation = Number (alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA

// TODO : calculez le total, le budget restant et budgetRespected.

const total = transport+alimentation+loisirs // Type : number ; unité : FCFA
const budgetrestant = budget-total // Type : number ; unité : FCFA
const budgetRespected = budget>=0 // Type : bollean ; unité : FCFA

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.

console.log(`Rapport de dépenses attribué à ${nom}.`); // Type : number ; unité : FCFA
console.log(`Les dépenses pour le transport font ${transport} FCFA.`); // Type : number ; unité : FCFA
console.log(`Les dépenses pour l'alimentation font ${alimentation} FCFA.`); // Type : number ; unité : FCFA
console.log(`Les dépenses pour les loisirs font ${loisirs} FCFA.`); // Type : number ; unité : FCFA
console.log(`Le total des dépenses est de ${total} FCFA.`); // Type : number ; unité : FCFA
console.log(`L' état final du budget est de ${budgetrestant} FCFA.`); // Type : number ; unité : FCFA
console.log(`Le budget est il respecté ? true(vrai) ou false (faux): ${budgetRespected}.`); // Type : bollean ;

