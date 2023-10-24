// Pour stocké les articles crée //
let article = [];


// Déclaration pour utilisation externe a l'addEventListener //
let articleName;
// Récupère le input pour le nom des articles HTML //
const articleNameHtml = document.getElementById('articleName');
articleNameHtml.addEventListener('input', () => {
    //Renvois le texte tapé dans l'input //
    articleName = articleNameHtml.value;

    console.log(`Article name is: ${articleName}`);
});

// CODE POUR RÉCUPÉRER LA SELECTION DU MENU DÉROULANT //
// Déclaration pour utilisation externe a l'addEventListener //
let catName;
// Récupère le sélecteur de categories HTML //
const articleSelectCatHtml = document.getElementById('articleSelectCat');
articleSelectCatHtml.addEventListener('change', () => {

    console.log(`Category select is: ${catName}`);

    // /!\ Important /!\ //
    //Renvois le texte contenu dans l'option sélectionnée du select menu //
    catName = articleSelectCatHtml.options[articleSelectCatHtml.selectedIndex].text;

});


// CODE POUR AJOUTER UN ARTICLE //
// Récupère le boutons d'ajout d'article HTML //
const articleAddBtnHtml = document.getElementById('articleAddBtn');
articleAddBtnHtml.addEventListener('click', () => {

    console.log('Add button is clicked');
    console.log(article);

    // Ajoute au tableau article le titre récupérer et la categories sélectionné //
    article.unshift({ title: articleName, category: catName });

    // Appel de la fonction display//
    displayArticle();

});

// Récupère la div ou irons les articles //
const articleListHtml = document.getElementById('articleList');

// CODE POUR L'AFFICHAGE DES ARTICLES //
// Fonction pour afficher les articles (displayArticle)) //
const displayArticle = () => {

    console.log(`Article Name is: ${article[0].title}`);
    console.log(`Article Category is: ${article[0].category}`);


    //Crée les éléments HTML //
    //Crée une div //
    const newDiv = document.createElement("div");

    //Crée un h2 avec le texteContent du nom de l'article //
    const newTitle = document.createElement("h2");
    newTitle.textContent = `Article: ${article[0].title}`;

    //Crée une span avec le texteContent de la catégorie de l'article //
    const newSpan = document.createElement("span");
    newSpan.textContent = `Catégorie: ${article[0].category}`;

    // Attache la div crée a la div HTML id: articleList //
    articleListHtml.appendChild(newDiv);
    // Attache le h2 crée a la div crée (newDiv) //
    newDiv.appendChild(newTitle);
    // Attache le span crée a la div crée (newDiv) //
    newDiv.appendChild(newSpan);
    // Ajoute les style de la fonction (addStyle) aux arguments newDiv et newSpan //
    addStyleToArticle(newDiv, newSpan);

}

// CODE POUR LE STYLE DES ARTICLES //
// Fonction pour ajouter des styles a un article (addStyleToArticle) //
const addStyleToArticle = (div, span) => {
    // Style de la div crée //
    // Display //
    div.classList.add('d-flex');
    div.classList.add('flex-col');
    div.classList.add('justify-between');
    div.classList.add('items-center');
    // Text //
    div.classList.add('txt-white');
    div.classList.add('txt-center');
    div.classList.add('fw-bold');
    // Size & color //
    div.classList.add('w-75');
    div.classList.add('p-05');
    div.classList.add('bg-light');

    // Style de la span crée //
    // Size & color //
    span.classList.add('bg-dark');
    span.classList.add('p-05');
    span.classList.add('w-75');
}