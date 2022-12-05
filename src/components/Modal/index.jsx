import PropTypes from 'prop-types';

import Button from '../Button';
import { Overlay, Container, Footer } from './styles';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>corpo do modal</p>

        <Footer>
          <Button type="button" className="flat">Cancelar</Button>

          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool
};

Modal.defaultProps = {
  danger: false
};
