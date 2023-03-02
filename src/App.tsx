import React, { useEffect, useState } from 'react';
import './theming/fontImports.css';
import './theming/Glitch2.css';
import './App.css';
import { returnSortedArrayOfObjects } from 'utils/funcs';
import FlickerTable from 'components/FlickerTable/FlickerTable';
function App() {
  const [hunterScoreData, sethunterScoreData] = useState<any[]>([]);
  const [bountyScoreData, setbountyScoreData] = useState<any[]>([]);

  const getScoreboardData = () => {
    console.log('Getting data');
    fetch('data-hunters.json', {
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
        sethunterScoreData(sortedArr);
      });

    fetch('data-bounties.json', {
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
        setbountyScoreData(sortedArr);
      });
  };

  useEffect(() => {
    getScoreboardData();

    const interval = setInterval(() => {
      console.log('Logs every 5 Minutes');
    }, 900000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="left">
        <div className="header">
          <h1 className="glitch" data-text="Top Hunters">
            Top Hunters
          </h1>
        </div>

        {/* <GlitchTable
          data={hunterScoreData}
          rankName="Rank"
          name="Hunter"
          score="Captures"
        ></GlitchTable> */}

        <FlickerTable
          data={hunterScoreData}
          rankName="Rank"
          name="Hunter"
          score="Captures"
        ></FlickerTable>
      </div>

      <div className="right">
        <div className="header">
          <h1 className="glitch" data-text="Top Hunters">
            Most Wanted
          </h1>
        </div>
        <FlickerTable
          data={bountyScoreData}
          rankName="Rank"
          name="Bounty Ident"
          score="Escapes"
        ></FlickerTable>
      </div>
    </div>
  );
}

export default App;
