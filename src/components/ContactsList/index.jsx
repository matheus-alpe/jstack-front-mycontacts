import {
  Header, ListContainer, ListHeader, ListBody, Card
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <div>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <ListHeader>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
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
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>

              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
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
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>

              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
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
              <a href="/">
                <img src={edit} alt="Edit" />
              </a>

              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        </ListBody>
      </ListContainer>
    </div>
  );
}
