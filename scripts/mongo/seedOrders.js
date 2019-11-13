// DEBUG=app:* node scripts/mongo/seedOrders.js

const { ObjectId } = require('mongodb');
const clients = [
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc2") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc1") },
    { _client: ObjectId("5dcb20ad566ea802b0e72cc0") },
];

const products =[
    {
        "name": "CAJAS DE PLASTICO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "ABARROTES",
        "unity": "Pieza"
    },
    {
        "name": "ACELGA BLANCA",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "ACELGA COLORES **",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "ACELGA ROJA **",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "AGUACATE GRANDE P/REBANAR 210 A 260 gr",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AGUACATE MEDIANO P/REBANAR 160 A 200 gr",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AGUACATE SEGUNDA P/REBANAR 110 A 150 gr",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJO CRIOLLO CALIBRE # 10",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJO CRIOLLO PELADO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJO ITALIANO EN DIENTE",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJO ITALIANO ENTERO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJO MACHO MEDIANO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "BODEGAS",
        "unity": "Kilogramo",
    },
    {
        "name": "AJONJOLI BLANCO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "ABARROTES",
        "unity": "Kilogramo",
    },
    {
        "name": "AJONJOLI NEGRO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "ABARROTES",
        "unity": "Kilogramo",
    },
    {
        "name": "AJONJOLI TOSTADO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "ABARROTES",
        "unity": "Kilogramo",
    },
    {
        "name": "ALBAHACAR MORADA **",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "ALBAHACAR ORGANICA/ITALIANA **",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "ALBAHACAR VERDE",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    },
    {
        "name": "ALCACHOFA CHICA MANOJO C/12 PZ",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Pieza",
    },
    {
        "name": "ALCACHOFA CORAZON FRASCO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Pieza",
    },
    {
        "name": "ALCACHOFA GRANDE 250 A 400 gr",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Pieza",
    },
    {
        "name": "ALCACHOFA GRANDE KILO",
        "description": "/",
        "avatar": "/",
        "price": 25,
        "category": "SUBASTA",
        "unity": "Kilogramo",
    }
];

const chalk = require('chalk');
const debug = require('debug')('app:scripts:orders');
const MongoLib = require('../../lib/index');
//const { productsMock } = require('../../utils/mocks/products');
const slugify = require('../../utils/plugins/slugify');

async function seedOrders() {
    console.log('CLIENTES', clients.length);
    console.log('PRODUCTOS', products.length);
    
  try {
    const mongoDB = new MongoLib();

    const promises = clients.map(async client => await mongoDB.create('orders', client) );
    const orders = await Promise.all(promises);
    const productsPromise = orders.map(async order => { 
        const productos = products.map(pro => ({ ...pro, _order: order }));
        return await mongoDB.createMany('orderProducts', productos);
    });

    await Promise.all(productsPromise);

    debug(chalk.green(`${promises.length} orders with ${productsPromise.length} products have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedOrders();

//module.exports = { clients, products };