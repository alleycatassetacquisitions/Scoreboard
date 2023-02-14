import React, { FC } from 'react';
import { itemType } from 'types';

type TerminalItemType = {
  data: itemType;
  rank: number;
};

const TerminalItem: FC<TerminalItemType> = ({ data, rank }) => {
  const generateIcons = (numItems: number) => {
    let returnArr = [];
    for (let i = 0; i < numItems; i++) {
      returnArr.push(<span key={i} className="square"></span>);
    }
    return returnArr;
  };
  return (
    <li>
      {/* <span className="new_line">:</span> */}
      <span className="rank">[{rank}]</span>{' '}
      <span className="name">{data.name}</span>{' '}
      <span className="score_visual">
        <span className="score">({data.score})</span>{' '}
        <span className="squares_wrapper">{generateIcons(data.score)}</span>
      </span>
    </li>
  );
};

export default TerminalItem;
