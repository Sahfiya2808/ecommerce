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
import Addto from './Addto';
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
{key:1,name:'Navy Blue long kurta',dec:'Engourge in this Punjabi Sahara Suit',imgurl:'https://i.pinimg.com/564x/82/96/00/8296007d5370ae3edf56a4c1064e18e7.jpg'},
{key:2,name:'Lilac A-Line Kurta',dec:'A-Line cut straight Kurta with tassels',imgurl:'https://i.pinimg.com/736x/45/95/7d/45957df86314e5b5bd7ee7ed0d99f783.jpg'},
{key:3,name:'Mermaid Pink Sahara Suit',dec:'Feel like a princess mermaid in this gorgeous Dress',imgurl:'https://i.pinimg.com/564x/21/46/12/214612fa8a0255aa1545b9f38eb7b8f0.jpg'},
{key:4,name:'Black Mirror Work Kurta Set',dec:'With a stunning mirror and bead patchwork black kurta',imgurl:'https://i.pinimg.com/564x/58/20/2e/58202e4e63dd0c65545503efda38a60a.jpg'},
{key:5,name:'White Anarkali set',dec:'A beautiful combination of Modern meets Traditional suit',imgurl:'https://i.pinimg.com/736x/03/48/e9/0348e933b1c916b157058384689f9e0a.jpg'},
{key:6,name:'Gorgeous Green',dec:'In love with this Pastel Green Chikankuri set',imgurl:'https://i.pinimg.com/564x/d4/57/33/d457332064830fe38ed74493c3c60a12.jpg'},
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
             <div> Dresses and Kurtas</div>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Explore our website and discover a world of dresses that inspire confidence, radiate sophistication, and capture the essence of modern femininity. 
        
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
                    <Addto />
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