// on récupère l'id du produit présent dans l'url

let params = new URLSearchParams(document.location.search);
let productId = params.get("id"); //
console.log(productId)
/**
 * fonction qui affiche le produit
 * @param {int} productId 
 */
async function displayProduct(productId) {// asynch (asynchrone = execute toutes les ligne en même temps et peut être mis sur pause grace à await) = fait en sorte d'attendre la réponse de fetch zpès le await

    const product = await getOneProduct(productId); // réponse de l'API
 console.log(product)

// j'appel l'api pour récupérer ce produit

    // ajout du nom, du prix et de la description
    const title = document.querySelector("#title"); // séléctionne l'id demandé
    const price = document.querySelector("#price"); // séléctionne l'id demandé
    const des = document.querySelector("#description"); //séléctionne l'id demandé
    const img = document.querySelector(".item__img img")
    const colors = document.querySelector("#colors")
    title.innerHTML = product.name
    img.src= product.imageUrl
    img.alt= product.altTxt
    price.innerHTML = product.price
    des.innerHTML = product.description
    console.log(colors, product.colors)

    product.colors.forEach(color => {
         const opt = color
        const el = document.createElement("option")
        el.textContent = opt
        el.value = opt
        colors.appendChild(el)
    });

    //remplir le panier au click sur le bouton ajouter addeventlistener
    //vérifier qu'une couleur a bien été selectionnée. commernt vérifier en js qu'un select est bien slectionné
    // vérifier qu'une quantité a bien été sélectionnée aussi comment vérifier si un input de type number est supérieur à zero
    // sinon il faut afficher un message d'alert d'erreur alert()
    // si tout est ok on remplit le panier en utilisant le localStorage, 
    // bien voir les données qu'il faut sauvegarder dans le localstorage, il ne faut pas sauvegarder le prix
    // color, id, quantité

    const button = document.getElementById("addToCart"); // création du boutton
    //on écoute l'événement  click sur le bouton d'ajout au panier
    button.addEventListener("click", (e) => {
        console.log("clické !!!!!!!")
      //création de l'événement au clique de l'ajout du canapé dans le panier
      const quant = document.querySelector("#quantity")
      const panier = JSON.parse(localStorage.getItem("items")) || []; // la création du panier || ( localStorage.getItem('panier') permet de récuperer la valeur lié à la clé

      const infoCanap = {
        // création de l'objet contenant les informations du canapé
        id: productId,
        color: colors.value, //valeur de la clé
        quantity: quant.value,
      };
      let otherCanap = true; // si c'est un nouveau canapé, ajout du canapé dans le panier avec la condition ligne 63
      if (infoCanap.quantity < 1) {// condition de de la quantité si inférieur à 1 = on quitte la fonction panier
        alert('quantité incorrecte')
        return;
      }
      if (infoCanap.color ==  "" ) {//condition de de la couleur si elle n'es pas choisit = on quitte la fonction panier
        alert('couleur  incorrecte')
        return;
      }
      
      for (let canape of panier) {
        //
        if (canape.color == infoCanap.color && canape.id == infoCanap.id) { // si les couleurs et l'id sont les mêmes
          //
          otherCanap = false;
          let addition = Number(infoCanap.quantity) + Number(canape.quantity); //addition d'une nouvelle quantité
          canape.quantity = addition; //
        }
      }
      if (otherCanap == true) { // si c'est un nouveau canapé, alors ajout dans le panier
        panier.push(infoCanap);
        alert('ajouter au panier')
      }

      localStorage.setItem("items", JSON.stringify(panier)); //création de la clé dans le locale storage dans laquelle la valeur "panier" est attribubé pour la valeur
    });
}
displayProduct(productId)
// je remplie le html



//fonction d'ajout dans le localstorage
localStorage.setItem('monChat', 'Tom');

const cat = localStorage.getItem('monChat');
console.log(cat)

const panier = { '564564654': 
                    { 
                        'blue': 2,
                        'red' :3  
                    }, 
                '564564655': 
                    { 
                        'green': 2,
                        'yellow' :3  
                    }
                };
localStorage.setItem("panier", JSON.stringify(panier));

const panier2 = localStorage.getItem('panier');
console.log(JSON.parse(panier2))
 
