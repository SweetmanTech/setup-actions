import { useProvider } from '@/providers/Provider';
import Input from '../Input';

const FundsRecipientInput = () => {
  const { setFundsRecipient } = useProvider();

  const handleChange = (e: any) => {
    setFundsRecipient(e.target.value);
  };

  return (
    <Input onChange={handleChange} placeholder="funds recipient" className="w-[80vw] md:w-[40vw]" />
  );
};

export default FundsRecipientInput;
