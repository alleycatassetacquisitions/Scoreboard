import TableItem from './TableItem/TableItem';
import React, { FC } from 'react';
import { itemType } from 'types';

import './GlitchTable.css';

type GlitchTableType = {
  data: itemType[];
};

const GlitchTable: FC<GlitchTableType> = ({ data }) => {
  console.log('Inspired by https://codepen.io/acupoftee/pen/WNbBxXq');
  return (
    <table>
      <thead>
        <tr className="headerRow">
          <th className="glitch" data-text="Rank">
            Rank
          </th>
          {/* <th>Ident</th> */}
          <th className="glitch" data-text="Hunter">
            Hunter
          </th>
          <th className="glitch" data-text="Captures">
            Captures
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
