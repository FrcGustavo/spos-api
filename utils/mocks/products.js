const productsMock = [
    {
        "_id": "5dc6fd9f73d25e14b07ac672",
        "name": "Manzana Roja Americana #100",
        "description": "Manzana americana, tambien conocida como manzana starking",
        "avatar": "/",
        "price": 65,
        "unity": "KG",
        "slug": "manzana-roja-americana-100"
    },
    {
        "_id": "5dc75260ba7c580491c3abbb",
        "name": "Acelga Blanca",
        "description": "Acelga blanca de manojo agranel",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "acelga-blanca"
    },
    {
        "_id": "5dc75da60258b107eda9e473",
        "name": "Acelga Roja",
        "description": "Acelga de un solo color(Rojo) selección de manojo agranel",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "acelga-roja"
    },
    {
        "_id": "5dc888345998891c423e7560",
        "name": "Espinaca Verde",
        "description": "Manojo de espinaca normal",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "espinaca-verde"
    },
    {
        "_id": "5dc8883c5998891c423e7561",
        "name": "Acelga De Colores",
        "description": "Manojo de acelga mixta, distintos colores",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "acelga-de-colores"
    },
    {
        "_id": "5dc8884a5998891c423e7562",
        "name": "Manzana Roja Americana #100",
        "description": "Acelga de un solo color(Rojo) selección de manojo agranel",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "manzana-roja-americana-100-1"
    },
    {
        "_id": "5dc888515998891c423e7563",
        "name": "Manzana Roja Nacional",
        "description": "Manzana nacional, de tamaño pequeño",
        "avatar": "/",
        "price": 25,
        "unity": "KG",
        "slug": "manzana-roja-nacional"
    }
];

function filteredProductsMock(filter) {
    return productsMock.filter(product => product.slug === filter);
}

class ProductsServiceMock {
    getProducts() {
        return Promise.resolve(productsMock);
    }

    createProduct() {
        return Promise.resolve(productsMock[0]);
    }
}

module.exports = {
    productsMock,
    filteredProductsMock,
    ProductsServiceMock
};