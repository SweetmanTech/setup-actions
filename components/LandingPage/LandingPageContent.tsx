import Button from '../Button';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import SearchInput from '../SearchInput';
import LandingPageHeader from './LandingPageHeader';

const BASE_SEPOLIA_FIXED_PRICE_SALE_STRATEGY = '0xd34872BE0cdb6b09d45FCa067B07f04a1A9aE1aE';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <SearchInput />
    <GenerateButton tokenId={1n} minter={BASE_SEPOLIA_FIXED_PRICE_SALE_STRATEGY} />
    <MadeBySweets />
  </div>
);

export default LandingPageContent;
