import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Addtocart from './Addtocart';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Luxe Loom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
{key:1,name:'White long sleeves Blouse',dec:'The mystic cream colour frill-blouse that is perfect for every occassion',imgurl:'https://i.pinimg.com/564x/0b/8c/05/0b8c052e17771852a09bcdabc99be274.jpg'},
{key:2,name:'Crop tops Set of 3',dec:'The perfect knit trio for the perfect trio',imgurl:'https://i.pinimg.com/736x/0b/21/50/0b21503e94e1f6d832e8edc3ea9aabeb.jpg'},
{key:3,name:'White Cotton Crop Blouse',dec:'The aesthetic vintage look of this white crop blouse is beyond magic',imgurl:'https://i.pinimg.com/564x/27/d8/97/27d89724659ea7609e84f4c16f425c95.jpg'},
{key:4,name:'Olive oil long top',dec:'Give a modern yet classy twist to this olive green sleeveless top',imgurl:'https://i.pinimg.com/474x/ce/ab/a9/ceaba987ce1fbb259c26ba40a76e8739.jpg'},
{key:5,name:'Beige Knit Sweater',dec:'Its December 3 and its officially sweater weather',imgurl:'https://i.pinimg.com/736x/41/dc/de/41dcde3bf1837723fa11c952f6396a95.jpg'},
{key:6,name:'Black Medievel blouse',dec:'This rustic yet modern black sleeves puffy blouse is all you need ',imgurl:'https://i.pinimg.com/564x/7d/db/98/7ddb98789bf026ed601943906b0b08cd.jpg'},
]


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    const nav=useNavigate();
  const handlehome =() =>
  {
    nav('/Home')
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <MenuItem onClick={handlehome}>Home</MenuItem>
          <Typography variant="h6" color="inherit" noWrap>
        
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundImage:'url(https://i.pinimg.com/736x/41/ca/38/41ca38412647325fbbbd15ec1e45dda0.jpg)',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="black"
              gutterBottom
            >
             <div>Tops and Blouses</div>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            From sleek silhouettes to playful prints, our designs are created to celebrate the diversity of femininity and empower you to embrace your individual style.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Filter By</Button>
              <Button variant="outlined">Sort By</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.key} xs={11} sm={11} md={11}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.imgurl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.dec}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"></Button>
                    <Addtocart />
                    <Button size="small"></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
  
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         Happy Shopping!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}