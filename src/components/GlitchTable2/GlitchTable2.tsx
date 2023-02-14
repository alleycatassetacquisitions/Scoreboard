import TableItem from './TableItem/TableItem';
import React, { FC } from 'react';
import { itemType } from 'types';

import './GlitchTable2.css';

type GlitchTable2Type = {
  data: itemType[];
};

const GlitchTable2: FC<GlitchTable2Type> = ({ data }) => {
  console.log('Inspired by https://codepen.io/longfurbyqueen/pen/YLdVjw');
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

export default GlitchTable2;
