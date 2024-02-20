import React from 'react'
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
const classes = useStyles();
  return (
    <>
        {/* CssBaseline will provide default styling */}
        <CssBaseline/> 
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera className={classes.icon}/>
                <Typography variant='h6'> Photo Album</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm" style={{marginTop: "80px"}}>
                    <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color="textSecondary" paragraph>
                    Josh had spent year and year accumulating the information. He knew it inside out and if 
                    there was ever anyone looking for an expert in the field, Josh would be the one to call. 
                    The problem was that there was nobody interested in the information besides him and he knew it. 
                    Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic.
                    </Typography>
                    <div className={classes.buttons}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See All Folders
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            {/* Images will not load unless you give it a height */}

            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia 
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="img title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant='h5'>
                                Heading {card}
                            </Typography>
                            <Typography>
                                This section is used to describe the content
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='primary'>View</Button>
                            <Button size='small' color='primary'>Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            
            </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant='h6' align="center">Footer</Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                The content that is in the footer
            </Typography>
        </footer>
    </>
  )
}

export default App
