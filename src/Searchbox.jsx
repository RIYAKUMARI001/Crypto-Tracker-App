import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Searchbox({ update }) {
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
  const [cryptoId, setCryptoId] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setCryptoId(event.target.value);
  };

  const getCryptoData = async () => {
    try {
      const response = await fetch(`${API_URL}?vs_currency=usd&ids=${cryptoId.toLowerCase()}`);
      const jsonResponse = await response.json();

      if (!response.ok || jsonResponse.length === 0) {
        throw new Error('Cryptocurrency not found');
      }

      return {
        name: jsonResponse[0].name,
        currentPrice: jsonResponse[0].current_price,
        priceChangePercentage24h: jsonResponse[0].price_change_percentage_24h,
        marketCap: jsonResponse[0].market_cap,
        image: jsonResponse[0].image,
      };
    } catch (error) {
      setError(true);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInfo = await getCryptoData();
    if (newInfo) {
      update(newInfo);
      setError(false);
    }
    setCryptoId('');
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Crypto ID"
          variant="outlined"
          required
          value={cryptoId}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <h3 style={{ color: 'red' }}>Cryptocurrency not found</h3>}
      </form>
    </div>
  );
}
