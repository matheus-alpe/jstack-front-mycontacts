import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import useErrors from '../../hooks/useErrors';
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
  const {
    setError,
    removeError,
    getErrorMessageByField
  } = useErrors(Object.values(ERRORS_REQUIRED));

  const handleNameChange = useCallback((event) => {
    const { value } = event.target;
    setName(value);

    if (!value) {
      setError((prevState) => [
        ...prevState,
        ERRORS_REQUIRED.name
      ]);
      return;
    }

    removeError('name');
  });

  const handleEmailChange = useCallback((event) => {
    const { value } = event.target;
    setEmail(value);

    if (value && !isEmailValid(value)) {
      setError({ field: 'email', message: 'Email é inválido' });
      return;
    }

    removeError('email');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

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
        <FormGroup error={getErrorMessageByField('name')}>
          <Input
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
            error={getErrorMessageByField('name')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByField('email')}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            error={getErrorMessageByField('email')}
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
