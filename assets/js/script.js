// Pour stocké les articles crée //
let article = [];

// Récupère le input du nom de l'article HTML //
const articleNameHtml = document.getElementById('articleName');
// Récupère le sélecteur de categories HTML //
const articleSelectCatHtml = document.getElementById('articleSelectCat');
// Récupère la div ou irons les articles //
const articleListHtml = document.getElementById('articleList');
// Récupère le boutons d'ajout d'article HTML //
const articleAddBtnHtml = document.getElementById('articleAddBtn');
// Récupère le span pour les messages d'erreurs HTML //
const errorHTML = document.getElementById('error');
// Récupère l'url du input pour ajouter une image a un article //
const articleImageHtml = document.getElementById('articleImage');


// Récupère les boutons de filtre par categories //
const manFilterHTML = document.getElementById('manFilterBtn');
manFilterHTML.addEventListener('click', () => displayArticle("Man"));
const womanFilterHTML = document.getElementById('womanFilterBtn');
womanFilterHTML.addEventListener('click', () => displayArticle("Woman"));
const childrenFilterHTML = document.getElementById('childrenFilterBtn');
childrenFilterHTML.addEventListener('click', () => displayArticle("Children"));


// CODE POUR AJOUTER UN ARTICLE AU CLIC DU BOUTON//
articleAddBtnHtml.addEventListener('click', () => {

    console.log('Add article button is clicked');
    console.log(article);

    // Définit find False par défaut //
    let find = false;
    // Crée une boucle pour connaître le nom de chaque articles et le comparé a la valeur de l'input //
    for (let i = 0; i < article.length; i++) {
        // Si un article a le meme nom que la valeur de notre nouvel article //
        if (article[i].title == articleNameHtml.value && article[i].category == articleSelectCatHtml.value) {
            // Dans ce cas définit find True et arrête la boucle //
            errorHTML.textContent = "Article with same name & category already exist";
            find = true;
            break;
        }
    }

    // Et si aucun titre n'est tapé, renvoyé une erreur //
    if (articleNameHtml.value.length == 0) {
        errorHTML.textContent = "You need to add a title for your article";
        // Et si aucune category n'est choisi, renvoyé une erreur //
    } else if (articleSelectCatHtml.value.length == 0) {
        errorHTML.textContent = "You need to select category for your article";
        // Et si aucun article trouvé à le même nom Find est false donc ajoute les elements au tableau //
    } else if (articleImageHtml.value == 0) {
        errorHTML.textContent = "You need to add an image for your article";
    } else if (find == false) {
        errorHTML.textContent = "";
        // Ajoute un article dans le tableau (en premier) avec title et category //
        article.unshift({ title: articleNameHtml.value, category: articleSelectCatHtml.value, quantity: 0 });
    }

    // Appel de la fonction display //
    displayArticle();

});


// CODE POUR L'AFFICHAGE DES ARTICLES //
// Fonction pour afficher les articles (displayArticle)) //
const displayArticle = (filter) => {

    // /!\ IMPORTANT: VIDE LA LISTE D'ARTICLE HTML /!\ //
    articleListHtml.innerHTML = '';

    // Crée une boucle pour récupérer le nom des articles //
    for (let i = 0; i < article.length; i++) {
        if (article[i].category.includes(filter) || article[i].category.includes(filter) || filter == undefined || filter == '') {

            // Crée la div article son titre et le texte du titre + la categories de l'article //
            const articleDiv = document.createElement("div");
            const articleTitle = document.createElement("h2");
            articleTitle.textContent = `Article: ${article[i].title}`;
            const articleSpan = document.createElement("span");

            // Crée la div container de l'image + l'image et sa source //
            const articleImgContainer = document.createElement("div");
            const articleImg = document.createElement("img");
            articleImg.src = articleImageHtml.value;

            articleSpan.textContent = `Category: ${article[i].category}`;
            const articleCountDiv = document.createElement('div');

            let num = 0;

            // Ajoute le résultat entre les boutons //
            const howManyArticle = document.createElement('div');
            howManyArticle.textContent = num;

            // Ajoute le bouton + //
            const articleAdd = document.createElement('button');
            const iconButtonAdd = document.createElement('img');
            iconButtonAdd.setAttribute('src', 'assets/img/add-ico.svg');
            // Écoute l’événement clic sur le bouton + pour ajouter //
            articleAdd.addEventListener('click', function () {
                num++
                howManyArticle.textContent = num;
            });


            // Ajoute le bouton - //
            const articleRemove = document.createElement('button');
            const iconButtonRemove = document.createElement('img');
            iconButtonRemove.setAttribute('src', 'assets/img/remove-ico.svg');
            // Écoute l’événement clic sur le bouton - pour retirer //
            articleRemove.addEventListener('click', function () {
                if (num != 0) {
                    num--;
                    howManyArticle.textContent = num;
                }
            });

            // Ajoute le bouton ajouter au panier //
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = "Add to cart";
            addToCartButton.addEventListener('click', function () {
                article[i].quantity += num;
            });

            // Attache les éléments les uns aux autres //
            articleListHtml.appendChild(articleDiv);

            // Titre et catégorie //
            articleDiv.appendChild(articleTitle);
            articleDiv.appendChild(articleSpan);

            // Image //
            articleDiv.appendChild(articleImgContainer);
            articleImgContainer.appendChild(articleImg);

            // Div du compteur, des boutons + et - et leur svg //
            articleDiv.appendChild(articleCountDiv);

            articleCountDiv.appendChild(articleRemove);
            articleRemove.appendChild(iconButtonRemove);

            articleCountDiv.appendChild(howManyArticle);

            articleCountDiv.appendChild(articleAdd);
            articleAdd.appendChild(iconButtonAdd);

            articleDiv.appendChild(addToCartButton);

            addStyleToArticle(articleDiv, articleTitle, articleImgContainer, articleImg, articleCountDiv, articleAdd, articleRemove, addToCartButton);
        }
    }
}

// CODE POUR LE STYLE DES ARTICLES //
// Fonction pour ajouter des styles a un article (addStyleToArticle) //
const addStyleToArticle = (div, title, containerImg, img, count, buttonAdd, buttonRemove, addToCartBtn) => {

    div.classList.add('d-flex', 'flex-col', 'gap-1', 'items-center', 'txt-white', 'txt-center', 'fw-bold', 'w-90', 'p-05', 'bg-light');

    title.classList.add('bg-dark', 'w-100', 'pb-05', 'pt-05');

    containerImg.classList.add('h-100', 'w-100');

    img.classList.add('max-h-img', 'max-w-img', 'img-contain');

    count.classList.add('bg-dark', 'd-flex', 'gap-1', 'items-center', 'p-1',);

    buttonAdd.classList.add('bg-valid');
    buttonRemove.classList.add('bg-valid');

    addToCartBtn.classList.add('bg-valid', 'txt-white', 'fw-bold', 'txt-up', 'p-05', 'w-100')

}
const articleCartHtml = document.getElementById('articleCart')
// Récupère le bouton pour voir le panier //
const showMyCartHtml = document.getElementById('showMyCart');
showMyCartHtml.addEventListener('click', () => displayCart());


const displayCart = () => {
    articleCartHtml.classList.toggle('d-none');
}