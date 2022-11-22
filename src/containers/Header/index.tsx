import logo from '../../assets/images/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WaiterApp Logo" />
      </S.Content>
    </S.Container>
  );
}