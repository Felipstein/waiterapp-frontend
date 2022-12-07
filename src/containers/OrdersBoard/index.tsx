import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import * as S from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrder(order: Order) {
    setIsModalOpened(true);
    setSelectedOrder(order);
  }

  function handleCloseOrder() {
    setIsModalOpened(false);
    setSelectedOrder(null);
  }

  return (
    <S.Board>
      <OrderModal
        visible={isModalOpened}
        order={selectedOrder}
        onClose={handleCloseOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <S.OrdersContainer>
          {orders.map((order) => (
            <button
              key={order._id}
              type='button'
              onClick={() => handleOpenOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} ite{order.products.length > 1 ? 'ns' : 'm'}</span>
            </button>
          ))}
        </S.OrdersContainer>
      )}
    </S.Board>
  );
}
