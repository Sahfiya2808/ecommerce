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
import Addtobottom from './Addtobottom';
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
{key:1,name:'GREY HIGH RISE CO-ORD JOGGERS',dec:'Co-ord joggers in soft fabric with glitter, high waist with smocked elastication and gently tapered legs with smocked elastication at the hems.',imgurl:'https://images.bestsellerclothing.in/data/only/1-july-2022/153337401_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto'},
{key:2,name:'Wardrobe Brown Pleated Midi Skirt',dec:'Unveil the magic of our Wardrobe midi skirt - the epitome of boho-chic sophistication. The elastic waistline ensures a flattering fit, while the gracefully pleated design adds a touch of timeless elegance.',imgurl:'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300957770BROWN_1.jpg?v=1699015768'},
{key:3,name:'Light Blue High Rise Boyfriend Jeans',dec:'5-pocket boyfriend fit jeans in washed cotton denim with a loose fit in a mid rise, zip fly and button, and tapered legs',imgurl:'https://images.bestsellerclothing.in/data/only/7-oct-2022/132760701_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto'},
{key:4,name:'Dreamy Drape Stretch Super High-Waisted Cargo Baggy Wide-Leg Jean',dec:'Real Good jeans are made with the planet in mind, meeting a higher set of standards for sustainability. By the numbers...',imgurl:'https://s7d2.scene7.com/is/image/aeo/0437_4914_584_os?$pdp-mdg-opt$&fmt=webp'},
{key:5,name:'Ernesta Embellished Velvet Skirt',dec:'Beautiful and glamorous, this knit velvet skirt features an embellished floral design and an exposed back zipper.',imgurl:'https://img.guess.com/image/upload/f_auto,q_auto:eco,fl_strip_profile,dpr_1.5,fl_advanced_resize,fl_progressive,w_392,c_scale/v1/NA/Style/ECOMM/W3RD73KBE30-FJ3O'},
{key:6,name:'Studiofit Solid Purple High-Waisted Joggers',dec:'Sleek and stylish, our Studiofit joggers in a rich purple hue exudes effortless elegance',imgurl:'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300956302ROSE_1.jpg?v=1697205648'},
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
        <table>
        <tr>
        <td><MenuItem onClick={handlehome}>Home</MenuItem></td>
          <Typography variant="h6" color="inherit" noWrap>
          
          </Typography>
          </tr>
          </table>
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
             <div>SKIRTS & BOTTOMWEAR</div>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            At Luxe Loom, we're not just offering dresses; we're presenting an opportunity for you to make a statement, leaving a lasting impression wherever life takes you. Your perfect dress awaits – let the journey begin!
        
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
                    <Addtobottom />
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