// on va appeler l'api pour récupérer la liste des canapés (tableau)

//Catalogue de canapés : http://localhost:3000/api/products/

/**
 * fonction qui affiche les artciles recuent via l'aPI
 */
async function displayPRoducts(){
  //je récupère tous les canapes
    const products = await getProducts()
// on récupérer la di qui contiendra tous ces canapes
const items = document.querySelector("#items")
//on boucle sur le tableau de canape recu pour les ajouter dans items
products.forEach(product => {
    //concatenation
    items.innerHTML +=  `<a href="./product.html?id=${product._id}">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
  </a>`
});
}

displayPRoducts()



