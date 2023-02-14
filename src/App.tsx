import TableItem from 'components/TableItem/TableItem';
import React, { useEffect, useState } from 'react';
import './theming/fontImports.css';
import './theming/Atari.css';
import './theming/PublicPixel.css';
import './theming/Galaxus.css';
import './App.css';
import { returnSortedArrayOfObjects } from 'utils/funcs';

const themes = ['Atari', 'PublicPixel'];

function App() {
  const [scoreData, setscoreData] = useState<any[]>([]);
  const [currentTheme, setcurrentTheme] = useState('Atari');

  const switchTheme = (e: any) => {
    if (e.keyCode === 13) {
      const newIndex = Math.floor(Math.random() * themes.length);
      setcurrentTheme(themes[newIndex]);
      console.log('Theme CHnged to: ' + themes[newIndex]);
    }
  };

  const getScoreboardData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let sortedArr = returnSortedArrayOfObjects(myJson);
        setscoreData(sortedArr);
      });
  };

  useEffect(() => {
    getScoreboardData();
  }, []);

  return (
    <div
      className={`wrapper ` + currentTheme}
      tabIndex={-1}
      onKeyDown={switchTheme}
    >
      <div className="header">
        <h1>Top Hunters</h1>
      </div>

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
          {scoreData.map((item, i) => {
            return <TableItem key={i} data={item} rank={i + 1}></TableItem>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
