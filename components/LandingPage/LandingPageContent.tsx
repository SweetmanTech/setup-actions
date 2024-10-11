import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';
import SaleStrategyInput from './SaleStrategyInput';
import FundsRecipientInput from './FundsRecipientInput';
import Checkboxes from './Checkboxes';

const LandingPageContent = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <FundsRecipientInput />
      <SaleStrategyInput />
      <Checkboxes />
      <Output />
      <p className="mt-4 text-sm text-gray-600 w-[80vw] md:w-[40vw]">
        The generated output can be used in the setupActions field when creating a new ERC155
        collection or as the single param in the multicall method on an existing 1155 collection.
      </p>
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
