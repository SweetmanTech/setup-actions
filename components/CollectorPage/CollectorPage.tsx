'use client';

import CollectorProvider from '@/providers/CollectorProvider';
import CollectorPageContent from './CollectorPageContent';

const CollectorPage = ({ collectorId }: any) => (
  <CollectorProvider collectorId={collectorId}>
    <div className="flex font-helvetica flex-col items-center justify-center min-h-screen py-12 sm:py-24 lg:py-36 bg-blend-color-burn">
      <CollectorPageContent />
    </div>
  </CollectorProvider>
);

export default CollectorPage;
