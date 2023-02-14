import React, { FC } from 'react';
import { itemType } from 'types';

import './Terminal.css';
import TerminalItem from './TerminalItem';

type TerminalType = {
  data: itemType[];
};

const Terminal: FC<TerminalType> = ({ data }) => {
  return (
    <div className="terminal_wrapper">
      <div className="terminal_header">$~: ls -a Top_Hunters</div>
      <ul>
        {data.map((item, i) => {
          return <TerminalItem key={i} data={item} rank={i + 1}></TerminalItem>;
        })}
      </ul>
    </div>
  );
};

export default Terminal;
