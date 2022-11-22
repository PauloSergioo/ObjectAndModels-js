import * as order from 'js/models.js/order.js'

export function total(Order) {

    const porcent = 100 - discount;

    return basic * porcent / 100;
}