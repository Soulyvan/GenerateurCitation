// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["L'échec est le fondement de la réussite.", "Lao Tseu"],
    ["La meilleure façon de prédire l'avenir est de le créer.", "Peter Drucker"],
    ["Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.", "Nelson Mandela"],
    ["La vie devient ce que l'on décide d'en faire.", "Eleanor Roosevelt"],
    ["Le seul moyen de faire du bon travail, c'est d'aimer ce que vous faites.", "Steve Jobs"],
    ["Soyez vous-même, tous les autres sont déjà pris.", "Oscar Wilde"],
    ["Le plus grand secret du bonheur, c'est d'être bien avec soi-même.", "Bernard Fontenelle"],
    ["L'éducation est l'arme la plus puissante pour changer le monde.", "Nelson Mandela"],
    ["Le bonheur est la seule chose qui se double si on le partage.", "Albert Schweitzer"],
    ["Le succès, c'est de passer d'échec en échec sans perdre son enthousiasme.", "Winston Churchill"],
    ["Le talent, c'est d'avoir envie.", "Jacques Brel"],
    ["La vraie générosité envers l'avenir consiste à tout donner au présent.", "Albert Camus"],
    ["On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.", "Antoine de Saint-Exupéry"],
    ["Rien n'est impossible, le mot lui-même dit 'je suis possible' !", "Audrey Hepburn"],
    ["La persévérance n'est pas une longue course, mais plusieurs petites courses dans la même direction.", "Walter Elliot"],
    ["La folie, c'est de refaire la même chose et d'attendre des résultats différents.", "Albert Einstein"],
    ["La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", "Confucius"],
    ["L'imagination est plus importante que la connaissance.", "Albert Einstein"],
    ["Si vous voulez connaître un homme, observez comment il traite ses inférieurs, pas ses égaux.", "J.K. Rowling"],
    ["La seule façon de faire du bon travail est d'aimer ce que vous faites.", "Steve Jobs"]
];

let citation = document.getElementById('citation');
let auteur = document.getElementById('auteur');
let nouveau = document.getElementById('nouveau');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

nouveau.addEventListener('click', () => {
    let numeroCitation = getRandomInt(citations.length);

    citation.textContent = citations[numeroCitation][0];
    auteur.textContent = citations[numeroCitation][1];
});
