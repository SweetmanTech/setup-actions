import TableRow from './TableRow';

const Results = ({ snapshot }: any) => (
  <table tw="w-[75vw] w-full flex flex-col">
    <thead>
      <tr tw="flex w-full justify-between">
        <th>Collection</th>
        <th className="w-[77px]">Number of Editions</th>
      </tr>
    </thead>
    <tbody tw="flex flex-col w-full justify-between">
      {(snapshot as any).map((item: any, index: number) => (
        <TableRow item={item} key={index} />
      ))}
    </tbody>
  </table>
);

export default Results;
