import ReactDOM from 'react-dom';

import { LoaderContainer } from './styles';
import Overlay from '../Overlay';

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay loader>
      <LoaderContainer />
    </Overlay>,
    document.getElementById('loader-root')
  );
}
