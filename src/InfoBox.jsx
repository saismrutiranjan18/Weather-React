import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1695697478813-9cd8058712e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1628134785730-0476293bf596?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V0lOVEVSfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTll8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
        <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=
        {info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15 
          ? HOT_URL : 
          COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ? (<ThunderstormIcon />  )
          : info.temp > 15 
          ? (<WbSunnyIcon /> ): 
          (<AcUnitIcon /> )}
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