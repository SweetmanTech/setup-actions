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
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
