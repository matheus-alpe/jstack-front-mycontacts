import logoSvg from '../../assets/images/logo.svg';
import { HeaderContainer, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="logo MyContacts" />
      <InputSearchContainer>
        <input type="search" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </HeaderContainer>
  );
}
