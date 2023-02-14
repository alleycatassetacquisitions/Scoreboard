import React, { FC } from 'react';
import { itemType } from 'types';
import './TableItem.css';

type TableItemType = {
  data: itemType;
  rank: number;
};

const TableItem: FC<TableItemType> = ({ data, rank }: TableItemType) => {
  return (
    <tr className="dataRow">
      <td className="glitch" data-text={rank} style={{ textAlign: 'right' }}>
        {rank}:
      </td>
      {/* <td>{data.id}</td> */}
      <td className="glitch" data-text={data.name}>
        {data.name}
      </td>
      <td className="glitch" data-text={data.score}>
        {data.score}
      </td>
    </tr>
  );
};

export default TableItem;
