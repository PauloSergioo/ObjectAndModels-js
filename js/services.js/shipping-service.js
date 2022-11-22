import * as orderServices from './order-services.js';

export function shipment(Order) {
  
    if(total < 100) {
       return 20;
    } else if (total < 200) {
        return 12;
    } else {
        return 0;
    }
}