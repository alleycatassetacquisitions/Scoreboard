import React, { FC, useRef } from 'react';
import { itemType } from 'types';

import './FlickerTable.css';

type FlickerTableType = {
  data: itemType[];
  rankName: string;
  name: string;
  score: string;
};

const NumbStickyScoreRows = 20;

const FlickerTable: FC<FlickerTableType> = ({
  data,
  rankName,
  name,
  score,
}) => {
  const scrollingWindow = useRef(null);
  const scrollingArea = useRef(null);

  const returnScoreboardItems = (data: any, startingAt?: number) => {
    let returnArr: any = [];

    data.map((item: any, i: any) => {
      if (!!startingAt ? i >= startingAt : i < NumbStickyScoreRows) {
        returnArr.push(
          <div key={i} className="table_row">
            <div className="table_data glitch" data-text={i + 1}>
              <div className="data"> {i + 1}:</div>
            </div>
            <div className="table_data glitch" data-text={item.name}>
              <div className="data">{item.name}</div>
            </div>
            <div className="table_data glitch" data-text={item.score}>
              <div className="data">{item.score}</div>
            </div>
          </div>
        );
      }
    });
    return returnArr;
  };

  return (
    <div className="table_wrapper">
      <div className="table_row">
        <div className="table_data glitch" data-text={rankName}>
          <div className="data"> {rankName}</div>
        </div>
        <div className="table_data glitch" data-text={name}>
          <div className="data">{name}</div>
        </div>
        <div className="table_data glitch" data-text={score}>
          <div className="data">{score}</div>
        </div>
      </div>
      {returnScoreboardItems(data)}
      {data.length > NumbStickyScoreRows && (
        <div className="scrollingArea_window" ref={scrollingWindow}>
          <div className="scrollingArea_wrapper primary" ref={scrollingArea}>
            {returnScoreboardItems(data, NumbStickyScoreRows)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlickerTable;
