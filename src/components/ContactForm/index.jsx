import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { Container } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [erros, setErros] = useState([]);

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);

    if (!value) {
      setErros((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' }
      ]);
      return;
    }

    setErros((prevState) => prevState.filter((error) => error.field !== 'name'));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      erros
    });
  }

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
            onChange={(event) => setEmail(event.target.value)}
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
