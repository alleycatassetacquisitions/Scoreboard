import TableItem from './TableItem/TableItem';
import React, { FC } from 'react';
import { itemType } from 'types';

import './DefaultTable.css';

type DefaultTableType = {
  data: itemType[];
};

const DefaultTable: FC<DefaultTableType> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr className="headerRow">
          <th>Rank</th>
          {/* <th>Ident</th> */}
          <th>Hunter</th>
          <th>Captures</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return <TableItem key={i} data={item} rank={i + 1}></TableItem>;
        })}
      </tbody>
    </table>
  );
};

export default DefaultTable;
