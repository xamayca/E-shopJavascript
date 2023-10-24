const item = document.createElement('div')
item.classList.add('d-flex', 'gap-1', 'items-center', 'p-1', 'bg-grey');

const articleAdd = document.createElement('button');


const image = document.createElement('img');
image.setAttribute('src', 'assets/img/add-ico.svg');
articleAdd.appendChild(image);


articleAdd.addEventListener('click', function () {
    article[i].quantity++
    displayArticle();
})


item.appendChild(articleAdd);

const result = document.createElement('div');
result.textContent = article[i].quantity;
item.appendChild(result);


const articleRemove = document.createElement('button');
const image2 = document.createElement('img');
image2.setAttribute('src', 'assets/img/remove-ico.svg');
articleRemove.appendChild(image2);



articleRemove.addEventListener('click', function () {

    if (article[i].quantity != 0) {
        article[i].quantity--;
        displayArticle();
    }
})
item.appendChild(articleRemove);