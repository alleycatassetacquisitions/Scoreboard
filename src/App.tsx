import React, { useEffect, useState } from 'react';
import './theming/fontImports.css';
import './theming/Atari.css';
import './theming/PublicPixel.css';
import './theming/Galaxus.css';
import './theming/Glitch1.css';
import './theming/Glitch2.css';
import './App.css';
import { returnSortedArrayOfObjects } from 'utils/funcs';
import DefaultTable from 'components/DefaultTable/DefaultTable';
import GlitchTable from 'components/GlitchTable/GlitchTable';
import GlitchTable2 from 'components/GlitchTable2/GlitchTable2';

const themes = ['Atari', 'PublicPixel', 'Glitch1', 'Glitch2'];

const getNewTheme = () => {
  const newIndex = Math.floor(Math.random() * themes.length);
  console.log('Theme changing to: ' + themes[newIndex]);
  return themes[newIndex];
};

function App() {
  const [scoreData, setscoreData] = useState<any[]>([]);
  const [currentTheme, setcurrentTheme] = useState('Glitch2');

  const switchTheme = (e: any) => {
    if (e.keyCode === 13) {
      setcurrentTheme(getNewTheme());
    }
  };

  const getScoreboardData = () => {
    console.log('Get data');
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

    const interval = setInterval(() => {
      console.log('Logs every 10 seconds');
      // setcurrentTheme(getNewTheme());
    }, 10000);

    return () => clearInterval(interval);
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
      ) : currentTheme === 'Glitch2' ? (
        <GlitchTable2 data={scoreData}></GlitchTable2>
      ) : (
        <DefaultTable data={scoreData}></DefaultTable>
      )}
    </div>
  );
}

export default App;
