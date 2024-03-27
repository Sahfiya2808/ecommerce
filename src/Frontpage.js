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
import './Frontpage.css';
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
{key:1,name:'Dresses and Kurtas',dec:'Designer and Affordable kurtas and dresses for every occassion.',imgurl:'https://i.pinimg.com/564x/82/96/00/8296007d5370ae3edf56a4c1064e18e7.jpg',func:'Website'},
{key:2,name:'Tops and Blouses',dec:'From modern to classy blouses to basic lesiure tees and definetely sweaters.',imgurl:'https://i.pinimg.com/originals/13/86/07/138607aa4bb22e6d7c41a72d0d97b495.jpg',func:'Topwear'},
{key:3,name:'Skirts & Bottomwear',dec:'Denim jeans,Cargo pants,joggers,shorts,skirts- It is everything you ever need.',imgurl:'https://i.pinimg.com/474x/c9/5b/fc/c95bfc45660768eea6644101a2de9d0a.jpg',func:'Bottomwear'},
{key:1,name:'Shoes and Slippers',dec:'Adidas,Nike,New Balance to Ginger,Luna Blue,Crocs',imgurl:'https://i.pinimg.com/736x/8a/31/5b/8a315be90935373c57fbfa666ec69bb4.jpg'},
{key:2,name:'Accessories',dec:'Shop an entire range of ethinic to modern to funky accessories for every event you need',imgurl:'https://img.freepik.com/free-photo/view-elegant-luxurious-wedding-stationery-planner-resources_23-2150166794.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699488000&semt=ais'},
{key:3,name:'Health and Skincare',dec:'You define your OWN beauty, and what else is more beautiful than being YOU',imgurl:'https://i.pinimg.com/736x/b1/65/ae/b165ae0bc0f32f811f974937ae1e4d21.jpg'},

]




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const navigate = useNavigate()
  const handlehome =() =>
  {
    navigate('/Home')
  }
  const handleManage = (card) =>{
    navigate(`/${card.func}`)
  }
    
  
  return (
    <div style={{backgroundImage:'url(https://i.pinimg.com/originals/41/98/aa/4198aac7d6bb9305d1d0889d245e4c17.jpg)'}}>
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
            backgroundImage:'url(https://i.pinimg.com/originals/41/98/aa/4198aac7d6bb9305d1d0889d245e4c17.jpg)',
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
             <div> Categories</div>
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Quality is at the heart of what we do. Each dress in our collection is crafted with precision and attention to detail,
             using the finest materials to guarantee both comfort and durability. 
        
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={4} sm={4} md={4}>
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
                    <Button size="small" onClick={()=>handleManage(card)}>View</Button>
                    
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
    </div>
  );
}