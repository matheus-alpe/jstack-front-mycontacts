import logoSvg from '../../assets/images/logo.svg';
import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoSvg} alt="logo MyContacts" />
    </HeaderContainer>
  );
}
