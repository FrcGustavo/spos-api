const ordersMock = {
    orders: [
        {
            "_id": "5dcb45af6137600cc4defd2c",
            "_client": "5dcb20ad566ea802b0e72cc0"
        },
        {
            "_id": "5dcb45af6137600cc4defd2d",
            "_client": "5dcb20ad566ea802b0e72cc2"
        },
        {
            "_id": "5dcb45af6137600cc4defd2e",
            "_client": "5dcb20ad566ea802b0e72cc1"
        }
    ],
    products: [
        {
            "_id": "5dcb45b59dbe750cd4b7e79d",
            "name": "CAJAS DE PLASTICO",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "ABARROTES",
            "unity": "Pieza",
            "slug": "cajas-de-plastico"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e79f",
            "name": "ACELGA COLORES **",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "SUBASTA",
            "unity": "Kilogramo",
            "slug": "acelga-colores"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e79e",
            "name": "ACELGA BLANCA",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "SUBASTA",
            "unity": "Kilogramo",
            "slug": "acelga-blanca"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a0",
            "name": "ACELGA ROJA **",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "SUBASTA",
            "unity": "Kilogramo",
            "slug": "acelga-roja"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a1",
            "name": "AGUACATE GRANDE P/REBANAR 210 A 260 gr",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "aguacate-grande-prebanar-210-a-260-gr"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a2",
            "name": "AGUACATE MEDIANO P/REBANAR 160 A 200 gr",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "aguacate-mediano-prebanar-160-a-200-gr"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a3",
            "name": "AGUACATE SEGUNDA P/REBANAR 110 A 150 gr",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "aguacate-segunda-prebanar-110-a-150-gr"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a4",
            "name": "AJO CRIOLLO CALIBRE # 10",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "ajo-criollo-calibre-10"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a5",
            "name": "AJO CRIOLLO PELADO",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "ajo-criollo-pelado"
        },
        {
            "_id": "5dcb45b59dbe750cd4b7e7a6",
            "name": "AJO ITALIANO EN DIENTE",
            "description": "/",
            "avatar": "/",
            "price": 25,
            "category": "BODEGAS",
            "unity": "Kilogramo",
            "slug": "ajo-italiano-en-diente"
        }
    ]
};

class OrdersServiceMock {
    getOrders() {
        return Promise.resolve(ordersMock.orders);
    }

    getOrder({ orderId }) {
        if(orderId)      
            return Promise.resolve({ 
                ...ordersMock.orders[0], 
                products: ordersMock.products 
            });
    }

    createOrder({ order, products }) {
        const productsIds = ordersMock.products.map(product => product._id);
        if(order && products)
            return Promise.resolve({ 
                createdOrderId: ordersMock.orders[0]._id, 
                createdIdsOrderProducts: productsIds
            });
    }

    updateOrder({ orderId, order, products }) {
        const productsIds = ordersMock.products.map(product => product._id);
        if(orderId && order && products)
            return Promise.resolve({
                updatedOrderId: ordersMock.orders[0]._id, 
                updatedIdsOrderProducts: productsIds, 
                deletedListProducts: productsIds.length
            });
    }

    deleteOrder({ orderId }) {
        if(orderId)
            return Promise.resolve({
                deletedOrderId: ordersMock.orders[0]._id,
                deletedListProducts: ordersMock.products.length
            });
    }
}

module.exports = {
    ordersMock,
    OrdersServiceMock
}