import { useProvider } from '@/providers/Provider';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';
import SaleStrategyInput from './SaleStrategyInput';
import FundsRecipientInput from './FundsRecipientInput';
import { decodeFunctionData } from 'viem';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';

const LandingPageContent = () => {
  const { selectedSetupLabels, setSelectedSetupLabels } = useProvider();

  const handleCheckboxChange = (label: string) => {
    setSelectedSetupLabels((prevLabels) => {
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

  console.log(selectedSetupLabels);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <FundsRecipientInput />
      <SaleStrategyInput />

      {callLabels.length > 0 && (
        <div className="w-full max-w-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Setup Actions</h2>
          <div className="flex flex-col space-y-2">
            {callLabels.map((action) => (
              <div key={action} className="flex items-center">
                <input
                  type="checkbox"
                  id={`setup-action-${action}`}
                  name={action}
                  checked={selectedSetupLabels.includes(action)}
                  onChange={() => handleCheckboxChange(action)}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`setup-action-${action}`} className="text-gray-700">
                  {action}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Output />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
