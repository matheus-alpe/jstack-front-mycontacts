import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

export default function CreateContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input placeholder="Nome" />

      <Select placeholder="Nome">
        <option value="123">Instagram</option>
        <option value="123">Facebook</option>
        <option value="123">Twitter</option>
      </Select>

      <Button type="button" disabled>Cadastrar</Button>
    </>
  );
}
