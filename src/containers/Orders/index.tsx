import * as S from './styles';

export function Orders() {
  return (
    <S.Container>
      <S.Board>
        <header>
          <span>🕛️</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.OrdersContainer>
          <button
            type='button'
          >
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>

          <button
            type='button'
          >
            <strong>Mesa 1</strong>
            <span>4 itens</span>
          </button>
        </S.OrdersContainer>
      </S.Board>
      <S.Board>
        <header>
          <span>🔥</span>
          <strong>Em andamento</strong>
          <span>(3)</span>
        </header>

        <S.OrdersContainer>
          <button
            type='button'
          >
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>

          <button
            type='button'
          >
            <strong>Mesa 1</strong>
            <span>4 itens</span>
          </button>
        </S.OrdersContainer>
      </S.Board>

      <S.Board>
        <header>
          <span>🕛️</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.OrdersContainer>
          <button
            type='button'
          >
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>

          <button
            type='button'
          >
            <strong>Mesa 1</strong>
            <span>4 itens</span>
          </button>
        </S.OrdersContainer>
      </S.Board>
    </S.Container>
  );
}
