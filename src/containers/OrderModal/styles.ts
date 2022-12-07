import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;

  background-color: #fff;
  border-radius: 8px;

  width: 480px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;

      border: none;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  #close-btn {
    border-radius: 12px;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      align-items: flex-start;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      & + .item {
        margin-top: 16px;
      }

      .quantity {
        font-size: 14px;
        color: #666;

        margin: 0 4px 0 12px;
      }

      .product-details {
        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

interface ItemImageProps {
  src: string;
}

export const ItemImage = styled.div<ItemImageProps>`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 6px;

  width: 56px;
  height: 32px;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  .primary {
    background-color: #333;
    border-radius: 48px;
    border: none;
    color: #fff;
    padding: 12px 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
      background-color: #666;
    }
  }

  .secondary {
    padding: 14px 24px;
    color: #D73035;
    font-weight: bold;
    border: none;
    background-color: transparent;
    border-radius: 48px;

    margin-top: 12px;

    &:hover {
      background-color: #ddd;
    }
  }
`;
