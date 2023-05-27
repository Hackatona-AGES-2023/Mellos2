require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const key = process.env.REACT_APP_OPENAI_API_KEY;
const config = new Configuration({
  apiKey: key,
});

const openai = new OpenAIApi(config);

const firstMessage = `Vou lhe passar uma série de perguntas que identificam se o usuário respondendo está em perigo de recaída para seu vício. Logo após, irei descrever o dia do usuário. Utilize essa descrição para avaliar baseado nas perguntas se o usuário está em perigo de recaída ou não.

Perguntas:
1- Eu tive uma recaída hoje?
2- Quanto eu tive vontade de participar de meu vício?
3- Tive algum trigger?
4- Fiquei dessentido?
5- Fui desonesto?
6- Admiti prontamente quando estava errado?
7- Devo desculpas?
8- Fiz ou disse algo hoje por medo?
9- Guardei algo para mim mesmo que deveria ser discutido com outra pessoa imediatamente?
10- Hoje pensei que no que poderia fazer pelos outros?
11- Fui gentil e amoroso com os outros?
12- Falei com meu sponsor?

Agora aplique as perguntas para o seguinte relato:`;

const secondMessage = `De 1 a 10, qual é meu nivel de perigo de recaida? 

Além disso, me de um feedback sobre a situação e o que eu posso fazer para melhorar. Me de o feedback se direcionando ao usuário em segunda pessoa. Respondendo no seguinte formato: primeiro informe ao usuário o seu nível de recaída, e após, de o feedback.
Se a nota for maior que 7, insira no final da mensagem a seguinte frase: Devido à nota do seu relato de hoje, o seu sponsor foi notificado, mantenha-se forte, você consegue!`;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: firstMessage + prompt + secondMessage,
  });

  res.send(completion.data.choices[0].text);
});

const port = 8085;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
