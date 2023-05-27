import "./DailyForm.css";
import axios from "axios";
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from "react";
import { styled } from '@mui/system';

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 700px;
    font-family: IBM Plex Sans, Montserrat;
    text-align: justify;
    font-size: 16px;
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
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8085/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="daily-form">
        <form className="form-daily-form" onSubmit={handleSubmit}>
            <div className="title-daily-form">
                <h1>Formulário Diário</h1>
                <p>Fale um pouco do seu dia para mim por favor</p>
            </div>
            <div className="text-area-daily-form">
                <StyledTextarea
                    minRows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                ></StyledTextarea>
            </div>
            <div className="button-submit-daily-form">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </form>
        <div className="feedback-daily-form">
            <h1>Feedback</h1>
            <p>{response}</p>
        </div>
    </div>
  );
}

export default DailyForm;
