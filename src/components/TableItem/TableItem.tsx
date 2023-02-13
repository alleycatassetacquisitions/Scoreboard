import React, { FC } from 'react';
import './TableItem.css';

type itemType = {
  id: string;
  name: string;
  score: number;
};

type TableItemType = {
  data: itemType;
  rank: number;
};

const TableItem: FC<TableItemType> = ({ data, rank }: TableItemType) => {
  return (
    <tr className="dataRow">
      <td style={{ textAlign: 'right' }}>{rank}:</td>
      {/* <td>{data.id}</td> */}
      <td>{data.name}</td>
      <td>{data.score}</td>
    </tr>
  );
};

export default TableItem;
