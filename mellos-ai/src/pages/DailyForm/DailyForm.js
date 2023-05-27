import "./DailyForm.css";
import axios from "axios";
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from "react";
import { styled } from '@mui/system';
import Header from "../../header/Header";

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 700px;
    text-align: justify;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 12px 12px;
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

function DailyForm() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("Por favor, faça uma pergunta");
  const [clicou, setClicou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    axios
      .post("http://localhost:8085/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setClicou(true);
        setIsLoading(false);
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        setClicou(false);
        setIsLoading(false);
        setIsDisabled(false);
      });
  };
  return (
    <div>
      <Header/>
      <div className="daily-form">
        <form className="form-daily-form" onSubmit={handleSubmit}>
          <div className="title-daily-form">
              <h1>Formulário Diário</h1>
              <p>Como foi seu dia? Vamos conversar para analisar seu progresso.</p>
          </div>
          <div className="text-area-daily-form">
              <StyledTextarea
                  minRows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isDisabled}
              ></StyledTextarea>
          </div>
          <div className="button-submit-daily-form">
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isDisabled}>
                  Enviar
              </Button>
          </div>
        </form>
        {isLoading ? (
        <div className="feedback-daily-form">
            <span>Aguarde enquanto estamos analisando a sua resposta...</span>
        </div>
        ) : clicou && (
          <div className="feedback-daily-form">
              <h1>Feedback</h1>
              <p>{response}</p>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default DailyForm;
