import React, { useState } from "react";
import Header from "../../header/Header";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Box,
  Avatar,
} from "@mui/material";

function InitialForm() {
  const [response, setResponse] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    estadoCivil: "",
    filhos: "",
    vicio: "",
    gatilhos: "",
    hobbies: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDisabled(true);
  
    const prompt = `Baseado nessas seguintes características: Vícios: ${formData.vicio}, Gatilhos: ${formData.gatilhos}, Hobbies: ${formData.hobbies}, eu gostaria que falasse a seguinte mensagem: Achamos o Sponsor perfeito para você! Após essa mensagem diga que esse sponsor já passou pelo mesmo vício que o portador do vício, mas sem mencionar o vício e os gatilhos e tem os mesmo hobbies também`;
  
    axios
      .post("http://localhost:8085/match", { prompt })
      .then((res) => {
        setResponse(res.data);
        setModalOpen(true);
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        setIsDisabled(false);
      });
  };
  

  const navigate = useNavigate();

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/dailyForm");
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
        className="mainWrapper"
      >
        <Typography
          variant="h4"
          component="h1"
          style={{ marginBottom: "1rem" }}
        >
          Formulário Inicial
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "400px",
          }}
        >
          <TextField
            name="nome"
            label="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            name="idade"
            label="Idade"
            value={formData.idade}
            onChange={handleChange}
            type="number"
            required
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <FormControl required fullWidth variant="outlined" size="small">
            <InputLabel>Estado Civil</InputLabel>
            <Select
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleChange}
              label="Estado Civil"
              disabled={isDisabled}
            >
              <MenuItem value="solteiro">Solteiro</MenuItem>
              <MenuItem value="casado">Casado</MenuItem>
              <MenuItem value="divorciado">Divorciado</MenuItem>
              <MenuItem value="viuvo">Viúvo</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="filhos"
            label="Filhos"
            value={formData.filhos}
            onChange={handleChange}
            type="number"
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            name="vicio"
            label="Qual é o seu vício"
            value={formData.vicio}
            onChange={handleChange}
            multiline
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            name="gatilhos"
            label="Quais são os seus gatilhos"
            value={formData.gatilhos}
            onChange={handleChange}
            multiline
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            name="hobbies"
            label="O que você gosta de fazer"
            value={formData.hobbies}
            onChange={handleChange}
            multiline
            fullWidth
            variant="outlined"
            size="small"
            disabled={isDisabled}
            InputLabelProps={{ shrink: true }}
          />

          <Button type="submit" variant="contained" color="primary" disabled={isDisabled}>
            Enviar
          </Button>

          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                p: 4,
                maxWidth: 500,
                width: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/607/607451.png?w=1060&t=st=1685191130~exp=1685191730~hmac=2248c080586a1ea0dad86a53d8fe5c77fd990196654bde8a116fc6f999d2fabb"
                  alt="Avatar"
                  style={{ width: 60, height: 60, marginRight: "3.5rem" }}
                />
                <Typography
                  variant="h5"
                  component="h2"
                  id="modal-title"
                  align="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: "18px",
                  }}
                >
                  Sponsor Encontrado!
                </Typography>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/219/219983.png?w=1060&t=st=1685191167~exp=1685191767~hmac=5176d5e8853edf6891d98b1802f5d9f4f1947f4dbf7bfce8e690800e39fba4a7"
                  alt="Avatar"
                  style={{ width: 60, height: 60, marginLeft: "3.5rem" }}
                />
              </div>
              <div style={{ textAlign: 'justify' }}>
                <p>{response}</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleModalClose}
                  textAlign="center"
                >
                  Close
                </Button>
              </div>
            </Box>
          </Modal>
        </form>
      </div>
    </div>
  );
}

export default InitialForm;