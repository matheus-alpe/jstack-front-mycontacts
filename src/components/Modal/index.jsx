import Button from '../Button';
import { Overlay, Container, Footer } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>
        <p>corpo do modal</p>

        <Footer>
          <Button type="button" className="flat">Cancelar</Button>

          <Button type="button" className="danger">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
