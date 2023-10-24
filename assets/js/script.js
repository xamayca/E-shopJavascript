// Pour stocké les articles crée //
let article = [];


const articleNameHtml = document.getElementById('articleName');


// CODE POUR RÉCUPÉRER LA SELECTION DU MENU DÉROULANT //
// Récupère le sélecteur de categories HTML //
const articleSelectCatHtml = document.getElementById('articleSelectCat');

// CODE POUR AJOUTER UN ARTICLE //
// Récupère le boutons d'ajout d'article HTML //
const articleAddBtnHtml = document.getElementById('articleAddBtn');
articleAddBtnHtml.addEventListener('click', () => {

    console.log('Add button is clicked');
    console.log(article);

    const newArticle = article.filter(el => el.title == articleNameHtml.value);

    if (newArticle.length == 0) {
        // Ajoute au tableau article le titre récupérer et la categories sélectionné //
        article.unshift({ title: articleNameHtml.value, category: articleSelectCatHtml.value });
    }
    // Appel de la fonction display//
    displayArticle();

});

// Récupère la div ou irons les articles //
const articleListHtml = document.getElementById('articleList');

// CODE POUR L'AFFICHAGE DES ARTICLES //
// Fonction pour afficher les articles (displayArticle)) //
const displayArticle = () => {

    // /!\ IMPORTANT: VIDE LA LISTE D'ARTICLE HTML /!\ //
    articleListHtml.innerHTML = '';

    console.log(`Article Name is: ${article[0].title}`);
    console.log(`Article Category is: ${article[0].category}`);

    for (let i = 0; i < article.length; i++) {
        //Crée les éléments HTML //
        //Crée une div //
        const articleDiv = document.createElement("div");

        //Crée un h2 avec le texteContent du nom de l'article //
        const articleTitle = document.createElement("h2");
        articleTitle.textContent = `Article: ${article[i].title}`;

        //Crée une span avec le texteContent de la catégorie de l'article //
        const articleSpan = document.createElement("span");
        articleSpan.textContent = `Catégorie: ${article[i].category}`;

        // Attache le h2 crée a la div crée (newDiv) //
        articleDiv.appendChild(articleTitle);
        // Attache le span crée a la div crée (newDiv) //
        articleDiv.appendChild(articleSpan);
        // Ajoute les style de la fonction (addStyle) aux arguments newDiv et newSpan //
        addStyleToArticle(articleDiv, articleSpan);
        // Attache la div crée a la div HTML id: articleList //
        articleListHtml.appendChild(articleDiv);
    }


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