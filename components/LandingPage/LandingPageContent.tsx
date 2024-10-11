import { useProvider } from '@/providers/Provider';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';
import SaleStrategyInput from './SaleStrategyInput';
import FundsRecipientInput from './FundsRecipientInput';

const LandingPageContent = () => {
  const { setupActions, setSetupActions } = useProvider();

  const handleCheckboxChange = (action: string) => {
    setSetupActions((prevActions) => {
      if (prevActions.includes(action)) {
        // Remove the action if it's already selected
        return prevActions.filter((a) => a !== action);
      } else {
        // Add the action if it's not selected
        return [...prevActions, action];
      }
    });
  };

  console.log(setupActions);

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <FundsRecipientInput />
      <SaleStrategyInput />

      {setupActions.length > 0 && (
        <div className="w-full max-w-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Setup Actions</h2>
          <div className="flex flex-col space-y-2">
            {setupActions.map((action, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`setup-action-${index}`}
                  name={action}
                  checked={true}
                  onChange={() => handleCheckboxChange(action)}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`setup-action-${index}`} className="text-gray-700">
                  {action}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Output />
      <GenerateButton />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
