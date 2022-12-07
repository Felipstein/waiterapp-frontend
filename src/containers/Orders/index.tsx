import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';

import * as S from './styles';

const orders: Order[] = [
  {
    '_id': '637c3988e2d331fa403df08f',
    'table': '3',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'quantity': 1,
        '_id': '637c3988e2d331fa403df090',
        'product': {
          'name': 'Limonada',
          'imagePath': '1669085556357-coca-cola.png',
          'price': 3.5,
        },
      },
      {
        'quantity': 1,
        '_id': '637c3988e2d331fa403df090',
        'product': {
          'name': 'Limonada',
          'imagePath': '1669085556357-coca-cola.png',
          'price': 3.5,
        },
      },
      {
        'quantity': 1,
        '_id': '637c3988e2d331fa403df090',
        'product': {
          'name': 'Limonada',
          'imagePath': '1669085556357-coca-cola.png',
          'price': 3.5,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard
        icon="🕛️"
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title='Em preparação'
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title='Pronto'
        orders={[]}
      />
    </S.Container>
  );
}
