import { useProvider } from '@/providers/Provider';
import Checkbox from './Checkbox';

const Checkboxes = () => {
  const { selectedSetupLabels, setSelectedSetupLabels } = useProvider();

  const handleCheckboxChange = (label: string) => {
    setSelectedSetupLabels((prevLabels: string[]) => {
      if (prevLabels.includes(label)) {
        return prevLabels.filter((l) => l !== label);
      } else {
        return [...prevLabels, label];
      }
    });
  };

  const callLabels = [
    'updateTokenURICall',
    'setupNewTokenCall',
    'updateRoyaltiesForTokenCall',
    'minterPermissionCall',
    'callSaleCall',
    'adminMintCall',
  ];

  return (
    <div>
      {' '}
      {callLabels.length > 0 && (
        <div className="w-full max-w-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Setup Actions</h2>
          <div className="flex flex-col space-y-2">
            {callLabels.map((action) => (
              <Checkbox
                key={action}
                action={action}
                selectedSetupLabels={selectedSetupLabels}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkboxes;
