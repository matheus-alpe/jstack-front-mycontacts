import { Link } from 'react-router-dom';
import {
  Header,
  ListContainer,
  ListHeader,
  ListBody,
  Card,
  InputSearchContainer
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Loader from '../../components/Loader';

export default function Home() {
  return (
    <div>
      <Loader />

      <InputSearchContainer>
        <input
          type="search"
          placeholder="Pesquisar contato"
        />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/create">Novo contato</Link>
      </Header>

      <ListContainer>
        <ListHeader>
          <button type="button">
            <span>Nome</span>
            <img
              src={arrow}
              alt="Arrow"
            />
          </button>
        </ListHeader>

        <ListBody>
          <Card>
            <div className="info">
              <div className="name">
                <strong>Matheus Alves</strong>
                <small>instagram</small>
              </div>
              <span>matttalves@gmail.com</span>
              <span>(48) 9999-9999</span>
            </div>

            <div className="actions">
              <Link to="/edit/1">
                <img
                  src={edit}
                  alt="Edit"
                />
              </Link>

              <button type="button">
                <img
                  src={trash}
                  alt="Delete"
                />
              </button>
            </div>
          </Card>
        </ListBody>
      </ListContainer>
    </div>
  );
}
