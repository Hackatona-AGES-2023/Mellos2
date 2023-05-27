import React from 'react';
import { Typography, Container, Grid, Paper, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router";
import watermarkImage from '../../12ai.png';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginTop: "100px",
    marginBottom: theme.spacing(4),
    color: '#2E86AB',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  section: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: '#F5F5F5',
  },
  stepNumber: {
    color: '#2E86AB',
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  watermarkContainer: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999,
  },
  watermark: {
    opacity: 0.3,
    width: '200px',
    height: 'auto',
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: 'white',
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#2E86AB',
    fontWeight: 'bold',
    width: '105%',
  },
  loginButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#2E86AB',
    color: 'white',
    '&:hover': {
      backgroundColor: '#205B78',
    },
  },
  contentContainer: {
    paddingTop: '64px',
    marginTop: '64px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  w90:{
    width: '100%',
  }
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/initialForm");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.flex}>
        <view className={classes.w90}>
        <Typography variant="h6" className={classes.headerTitle}>
          12 Steps.AI
        </Typography>
        </view>
        <Button className={classes.loginButton} onClick={handleOnClick}>Log In</Button>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div style={{ marginTop: '48px' }}></div>
      <Container maxWidth="md">
        <div className={classes.watermarkContainer}>
          <img src={watermarkImage} className={classes.watermark} alt="Watermark" />
        </div>
        <Typography variant="h4" component="h1" align="center" className={classes.title}>
          One Day at a Time
        </Typography>

        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Paper className={classes.section}>
              <div className={classes.centered}>
                <Typography variant="h5" component="h2" gutterBottom>
                  O Programa de 12 Passos
                </Typography>
              </div>
              <Typography variant="body1">
                O Programa de 12 Passos é um modelo de recuperação utilizado por várias comunidades e grupos que lidam com vícios e dependências. Ele oferece um caminho estruturado para ajudar na superação desses problemas, promovendo uma abordagem gradual e contínua de recuperação. No 12 Step AI você poderá ter um acompanhamento personalizado e direto através de nossa inteligência artificial, que irá atuar para reconhecer comportamentos que podem levá-lo a uma recaída e parear você com um Sponsor que seja compatível com você e seus objetivos. O seu caminho para a sobriedade e uma vida nova de liberdade começa agora!
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={12}>
            <Paper className={classes.section}>
              <div className={classes.centered}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Os 12 Passos
                </Typography>
              </div>
              <Typography variant="body1">
                <span className={classes.stepNumber}>1.</span> Admitimos que éramos impotentes perante nosso vício e que nossas vidas tinham se tornado incontroláveis.
                <br />
                <span className={classes.stepNumber}>2.</span> Viemos a acreditar que um Poder superior a nós mesmos poderia devolver-nos à sanidade.
                <br />
                <span className={classes.stepNumber}>3.</span> Decidimos entregar nossa vontade e nossa vida aos cuidados daqueles que podem nos ajudar
                <br />
                <span className={classes.stepNumber}>4.</span> Fizemos um minucioso e destemido inventário moral de nós mesmos.
                <br />
                <span className={classes.stepNumber}>5.</span> Admitimos perante uma força maior, perante nós mesmos e perante outro ser humano, a natureza exata de nossas falhas.
                <br />
                <span className={classes.stepNumber}>6.</span> Prontificamo-nos inteiramente a deixar que uma força superior removesse todos esses defeitos de caráter.
                <br />
                <span className={classes.stepNumber}>7.</span> Humildemente pedimos ajuda para que nos livrasse de nossas imperfeições.
                <br />
                <span className={classes.stepNumber}>8.</span> Fizemos uma relação de todas as pessoas que tínhamos prejudicado e nos dispusemos a reparar os danos a elas causados.
                <br />
                <span className={classes.stepNumber}>9.</span> Fizemos reparações diretas dos danos causados a tais pessoas, sempre que possível, salvo quando fazê-lo significasse prejudicá-las ou a outrem.
                <br />
                <span className={classes.stepNumber}>10.</span> Continuamos fazendo o inventário pessoal e, quando estávamos errados, nós o admitíamos prontamente.
                <br />
                <span className={classes.stepNumber}>11.</span> Procuramos, através da prece e da meditação, melhorar nosso contato consciente com nós mesmos, na forma em que nos concebíamos, rogando apenas a forças para realizar essa vontade.
                <br />
                <span className={classes.stepNumber}>12.</span> Tendo experimentado um despertar, como resultado destes Passos, procuramos levar esta mensagem a outros portadores de vícios e praticar estes princípios em todas as nossas atividades.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
