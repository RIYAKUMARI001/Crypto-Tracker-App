import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ data }) {
  if (!data || !data.name) return null;

  return (
    <div className="infoBox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={data.image}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Current Price: ${data.currentPrice}</p>
              <p>24h Change: {data.priceChangePercentage24h}%</p>
              <p>Market Capitalization: ${data.marketCap}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
