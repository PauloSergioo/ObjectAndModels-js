import Order from "./models.js/order.js";
import orderServices, { total } from "./services.js/order-services.js";
import shippingServices, { shipment } from "./services.js/shipping-service.js"

const dados = document.getElementById("grossSalaryInput").innerHTML.split('\n');

const order = new Order(Number(dados[0]), Number(dados[1]), Number(dados[2]));

console.log(`Pedido código ${order.code}`)
console.log(`Valor total: R$ ${total + shipment }`)