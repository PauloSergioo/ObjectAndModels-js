import Order from "./models/order.js";
import orderServices from "./services/order-services.js";
import shippingServices from "./services/shipping-service.js";

const dados = document.getElementById("grossSalaryInput").innerHTML.split('\n').map(x => Number(x));

const order = new Order(Number(dados[0]), Number(dados[1]), Number(dados[2]));

const total = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${total.toFixed(2) }`);