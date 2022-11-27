import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

export default function CreateContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input placeholder="Nome" />

      <Select placeholder="Nome">
        <option value="123">instagram</option>
        <option value="123">google</option>
        <option value="123">twitter</option>
      </Select>
    </>
  );
}
