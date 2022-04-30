const urlApiBase= " http://localhost:3000/api/products/"

/**
 * renvoie tous les canapés
 * @returns Array<Product>
 */
 async function getProducts(){
    const products = await fetch(urlApiBase)
    .then(res => res.json())
    return products
}

/**
 * renvoie un canape
 * @param {string} id 
 * @returns Product
 */
async function getOneProduct(id){
    const product = await fetch(urlApiBase + id)
    .then(res => res.json())
    return product
}
