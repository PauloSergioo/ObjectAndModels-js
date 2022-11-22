import * as Order from "../models.js/order.js"

export function total(Order) {

    const porcent = 100 - order.discount;

    return order.basic * porcent / 100;
}