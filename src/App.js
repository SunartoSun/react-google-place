import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GoogleMap from './components/GoogleMap';
import Marker from './components/Marker';
import AutoComplete from './components/AutoComplete';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { getLatLng } from 'react-google-places-autocomplete';

function Copyright() {
  return (
    <Typography sx={{ mt: 6 }} variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [center, setCenter] = useState({lat: 40.73, lng: -73.93})
  const resultList = useSelector(state => state.search.results)
  
    useEffect(() => {
        if(resultList.length > 0) getLatLng(resultList[resultList.length-1]).then(latLng=>setCenter(latLng))

    }, [resultList])
    
    return (
        <Container >
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
                Google Map Autocomplete
            </Typography>

            <Box sx={{ my: 4 }}>
                <AutoComplete />
            </Box>

            <Grid container spacing={2}>
            <Grid item lg={8}>
                <GoogleMap 
                defaultZoom={12}
                defaultCenter={{lat: 40.73, lng: -73.93}}
                center={center}
                >
                <Marker
                        text="test"
                        lat={center.lat}
                        lng={center.lng}
                    />
                </GoogleMap>
            </Grid>
            <Grid item lg={4}>          
                <Typography variant="h6" textAlign="center" gutterBottom>
                Search Result
                </Typography>
                <List sx={{maxHeight: '55vh', overflow: 'auto'}}>  
                {resultList.slice(0).reverse().map((item, index) => (
                    <ListItem key={index} disablePadding>
                    <ListItemButton onClick={()=> getLatLng(item).then(latLng=>setCenter(latLng))}>
                        <ListItemIcon>
                        <RoomOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.formatted_address} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Grid>
            </Grid>

            <Copyright />
        </Box>
        </Container>
    );    
}
