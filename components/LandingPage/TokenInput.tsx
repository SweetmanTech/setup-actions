import { useProvider } from '@/providers/Provider';
import Input from '../Input';

const TokenInput = () => {
  const { tokenId, setTokenId } = useProvider();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      // Ensure the input is a valid number
      setTokenId(BigInt(value));
    }
  };

  return (
    <div className="flex flex-col text-left">
      <Input
        type="number"
        value={tokenId.toString()}
        onChange={handleChange}
        placeholder="Enter Token ID"
        className="w-[80vw] md:w-[40vw]"
      />
    </div>
  );
};

export default TokenInput;
