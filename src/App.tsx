import TableItem from 'components/DefaultTable/TableItem/TableItem';
import React, { useEffect, useState } from 'react';
import './theming/fontImports.css';
import './theming/Atari.css';
import './theming/PublicPixel.css';
import './theming/Galaxus.css';
import './theming/Glitch1.css';
import './App.css';
import { returnSortedArrayOfObjects } from 'utils/funcs';
import DefaultTable from 'components/DefaultTable/DefaultTable';
import GlitchTable from 'components/GlitchTable/GlitchTable';

const themes = ['Atari', 'PublicPixel', 'Glitch1'];

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
      {/* <div className="scanlines"></div> */}
      <div className="header">
        <h1 className="glitch" data-text="Top Hunters">
          Top Hunters
        </h1>
      </div>

      {currentTheme === 'Glitch1' ? (
        <GlitchTable data={scoreData}></GlitchTable>
      ) : (
        <DefaultTable data={scoreData}></DefaultTable>
      )}
    </div>
  );
}

export default App;
