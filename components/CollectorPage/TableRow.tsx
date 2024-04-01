import getArweaveLink from '@/lib/getArweaveLink';

const TableRow = ({ item }: any) => (
  <tr
    className="text-left border border-gray-950 rounded"
    tw="flex justify-between text-left border border-gray-950 rounded"
  >
    <td className="flex items-center" tw="flex items-center pl-3">
      {item?.metadata?.image && (
        <div className="pr-3" style={{ display: 'flex' }}>
          <img
            height={88}
            width={88}
            src={getArweaveLink(item?.metadata?.image)}
            className="rounded-lg"
          />
        </div>
      )}
      <div
        className="flex flex-col w-[350px]"
        tw="flex flex-col w-[800px]"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div className="font-bold">{item?.metadata?.title || item.address}</div>
        <div className="text-xs" tw="text-xs">
          {item?.metadata?.artist || ''}
        </div>
      </div>
    </td>
    <td className="text-center">{item.numberOfEditions}</td>
  </tr>
);

export default TableRow;
