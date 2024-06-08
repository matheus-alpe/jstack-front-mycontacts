import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { isEmailValid } from '../../utils';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { Container } from './styles';

const ERRORS_REQUIRED = {
  name: { field: 'name', message: 'Nome é obrigatório' }
};

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErros] = useState(Object.values(ERRORS_REQUIRED));

  const handleNameChange = useCallback((event) => {
    const { value } = event.target;
    setName(value);

    if (!value) {
      setErros((prevState) => [
        ...prevState,
        ERRORS_REQUIRED.name
      ]);
      return;
    }

    setErros((prevState) => prevState.filter((error) => error.field !== 'name'));
  });

  const handleEmailChange = useCallback((event) => {
    const { value } = event.target;
    setEmail(value);

    if (value && !isEmailValid(value)) {
      if (errors.find((error) => error.field === 'email')) return;

      setErros((prevState) => [
        ...prevState,
        { field: 'email', message: 'Email é inválido' }
      ]);
      return;
    }

    setErros((prevState) => prevState.filter((error) => error.field !== 'email'));
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (errors.length > 0) {
      console.log(errors);
      return;
    }

    console.log({
      name,
      email,
      phone,
      category
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FormGroup>
          <Input
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Select
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>Categoria</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
          </Select>
        </FormGroup>

        <Button
          type="submit"
        >
          {buttonLabel}
        </Button>
      </Container>
    </form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};
