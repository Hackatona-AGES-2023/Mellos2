import React from 'react';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
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
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" className={classes.title}>
          One Day at a Time
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.section}>
              <Typography variant="h5" component="h2" gutterBottom>
                O Programa de 12 Passos
              </Typography>
              <Typography variant="body1">
                O Programa de 12 Passos é um modelo de recuperação utilizado por várias comunidades e grupos que lidam com vícios e dependências. Ele oferece um caminho estruturado para ajudar na superação desses problemas, promovendo uma abordagem gradual e contínua de recuperação.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper className={classes.section}>
              <Typography variant="h5" component="h2" gutterBottom>
                Os 12 Passos
              </Typography>
              <Typography variant="body1">
                <span className={classes.stepNumber}>1.</span> Admitimos que éramos impotentes perante nosso vício e que nossas vidas tinham se tornado incontroláveis.
                <br />
                <span className={classes.stepNumber}>2.</span> Viemos a acreditar que um Poder superior a nós mesmos poderia devolver-nos à sanidade.
                <br />
                <span className={classes.stepNumber}>3.</span> Decidimos entregar nossa vontade e nossa vida aos cuidados de Deus, na forma em que O concebíamos.
                <br />
                <span className={classes.stepNumber}>4.</span> Fizemos um minucioso e destemido inventário moral de nós mesmos.
                <br />
                <span className={classes.stepNumber}>5.</span> Admitimos perante Deus, perante nós mesmos e perante outro ser humano, a natureza exata de nossas falhas.
                <br />
                <span className={classes.stepNumber}>6.</span> Prontificamo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.
                <br />
                <span className={classes.stepNumber}>7.</span> Humildemente rogamos a Ele que nos livrasse de nossas imperfeições.
                <br />
                <span className={classes.stepNumber}>8.</span> Fizemos uma relação de todas as pessoas que tínhamos prejudicado e nos dispusemos a reparar os danos a elas causados.
                <br />
                <span className={classes.stepNumber}>9.</span> Fizemos reparações diretas dos danos causados a tais pessoas, sempre que possível, salvo quando fazê-lo significasse prejudicá-las ou a outrem.
                <br />
                <span className={classes.stepNumber}>10.</span> Continuamos fazendo o inventário pessoal e, quando estávamos errados, nós o admitíamos prontamente.
                <br />
                <span className={classes.stepNumber}>11.</span> Procuramos, através da prece e da meditação, melhorar nosso contato consciente com Deus, na forma em que O concebíamos, rogando apenas o conhecimento de Sua vontade em relação a nós, e forças para realizar essa vontade.
                <br />
                <span className={classes.stepNumber}>12.</span> Tendo experimentado um despertar espiritual, como resultado destes Passos, procuramos levar esta mensagem a outros viciados e praticar estes princípios em todas as nossas atividades.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
