import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1695697478813-9cd8058712e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
        <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>

        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temperature = {info.temp}&deg;C </div>
        <div>Humidity = {info.humidity}</div>
        <div>Min Temp = {info.tempMin}&deg; C</div>
        <div>Max Temp = {info.tempMax}&deg; C</div>
        <div>The Weather can be describes as {info.weather} and feels like {info.feelslike}&deg; C</div>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}