import TableItem from 'components/TableItem/TableItem';
import React, { useEffect, useState } from 'react';
import './theming/fontImports.css';
import './theming/atari.css';
import './App.css';

// import { data } from 'public/data.json';

const themes = ['atari'];

function App() {
  const [scoreData, setscoreData] = useState([]);
  const [currentTheme, setcurrentTheme] = useState('atari');

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
        setscoreData(myJson);
      });
  };

  useEffect(() => {
    getScoreboardData();
  }, []);

  return (
    <div className={`wrapper ` + currentTheme}>
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
