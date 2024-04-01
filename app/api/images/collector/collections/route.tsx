import CollectorPageHeader from '@/components/CollectorPage/CollectorPageHeader';
import Results from '@/components/CollectorPage/Results';
import { boldFont, regularFont } from '@/lib/fonts';
import formatErc721Events from '@/lib/formatErc721Events';
import get30DayBlockRange from '@/lib/get30DayBlockRange';
import getEnsName from '@/lib/getEnsName';
import getErc721TransferEvents from '@/lib/getErc721TransferEvents';
import getSoundBatchCollectionMetadata from '@/lib/sound/getSoundBatchCollectionMetadata';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const [regularFontData, boldFontData] = await Promise.all([regularFont, boldFont]);
  const queryParams = req.nextUrl.searchParams;
  const address: any = queryParams.get('address');
  const collectorId = await getEnsName(address);
  const { ImageResponse } = await import('@vercel/og');
  const { fromBlock, toBlock } = await get30DayBlockRange();
  const filteredLogs = await getErc721TransferEvents([null, address], fromBlock, toBlock);
  const snapshot = formatErc721Events(filteredLogs);
  let soundResponse = await getSoundBatchCollectionMetadata(snapshot);
  soundResponse = soundResponse.sort((a: any, b: any) => b.numberOfEditions - a.numberOfEditions);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          fontFamily: '"HelveticaBold"',
        }}
      >
        <CollectorPageHeader collectorId={collectorId} />
        <Results snapshot={soundResponse} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Helvetica',
          data: regularFontData,
          weight: 400,
        },
        {
          name: 'HelveticaBold',
          data: boldFontData,
          weight: 700,
        },
      ],
    },
  );
}
