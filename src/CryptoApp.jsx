import React, { useState } from 'react';
import Searchbox from './Searchbox.jsx';
import InfoBox from './infobox.jsx'; 

export default function CryptoApp() {
  const [data, setData] = useState(null); 

  const update = (newData) => {
    setData(newData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'blue' }}>Crypto Tracker App</h2>
      <Searchbox update={update} />
      <InfoBox data={data} />
    </div>
  );
}
