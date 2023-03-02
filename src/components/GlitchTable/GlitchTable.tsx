import TableItem from './TableItem/TableItem';
import React, { FC } from 'react';
import { itemType } from 'types';

import './GlitchTable.css';

type GlitchTableType = {
  data: itemType[];
  rankName: string;
  name: string;
  score: string;
};

const GlitchTable: FC<GlitchTableType> = ({ data, rankName, name, score }) => {
  return (
    <table>
      <thead>
        <tr className="headerRow">
          <th className="glitch" data-text={rankName}>
            {rankName}
          </th>
          <th className="glitch" data-text={name}>
            {name}
          </th>
          <th className="glitch" data-text={score}>
            {score}
          </th>
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

export default GlitchTable;
