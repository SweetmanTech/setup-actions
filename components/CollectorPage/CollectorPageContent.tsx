import { useCollectorProvider } from '@/providers/CollectorProvider';
import MadeBySweets from '../MadeBySweets';
import CollectorPageHeader from './CollectorPageHeader';
import Results from './Results';

const CollectorPageContent = () => {
  const { collectorId, snapshot } = useCollectorProvider();

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <CollectorPageHeader collectorId={collectorId} />
      <Results snapshot={snapshot} />
      <MadeBySweets />
    </div>
  );
};

export default CollectorPageContent;
