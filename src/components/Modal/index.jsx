import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Button from '../Button';
import { Container, Footer } from './styles';
import Overlay from '../Overlay';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>corpo do modal</p>

        <Footer>
          <Button type="button" className="flat">Cancelar</Button>

          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool
};

Modal.defaultProps = {
  danger: false
};
