const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `"Olá ${order.order['delivery'].deliveryPerson}, entrega para ${order.name}, telefone ${order.phoneNumber}, ${order['address'].street}, Nº ${order['address'].number}, ${order['address'].apartment}."`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const saboresPizza = Object.keys(order.order.pizza);
  const gastoTotal = parseInt(order.order.drinks.coke.price = 5) + parseInt(order.order.pizza.marguerita.price) + parseInt(order.order.pizza.pepperoni.price);
  return `"Olá ${order.name = 'Luiz Silva'}, o total do seu pedido de ${saboresPizza[0]}, ${saboresPizza[1]} e ${order.order.drinks.coke.type} é de R$${gastoTotal},00"`;

}

console.log(orderModifier(order));