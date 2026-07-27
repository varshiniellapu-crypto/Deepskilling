import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Varshini"
        School="Vignan Institute of Engineering for Women"
        Total={450}
        goal={5}
      />
    </div>
  );
}

export default App;