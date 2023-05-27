import React from 'react';
import { Avatar, Button } from '@mui/material';
import './Header.css';

const handleHomeClick = () => {
   // Lógica para ir para a página inicial
   console.log('Botão Home clicado!');
};

function Header() {
   return (
      <div className="header">
         <div className="buttons">
            <Button onClick={handleHomeClick} variant="text" color="inherit">Home</Button>
         </div>
         <h2>Olá, João</h2>
         <Avatar
            src="https://cdn-icons-png.flaticon.com/512/607/607451.png?w=1060&t=st=1685191130~exp=1685191730~hmac=2248c080586a1ea0dad86a53d8fe5c77fd990196654bde8a116fc6f999d2fabb"
            alt="Avatar"
            className="icon"
            style={{ width: 35, height: 35 }}
         />
      </div>
   );
}

export default Header;