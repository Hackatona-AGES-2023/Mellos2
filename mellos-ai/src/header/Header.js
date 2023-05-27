import React from "react";
import "./Header.css";
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Modal, Box, Avatar } from '@mui/material';

function Header() {
   return (
      <div>
         <div className="header">
            <h2>Olá, João</h2>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/607/607451.png?w=1060&t=st=1685191130~exp=1685191730~hmac=2248c080586a1ea0dad86a53d8fe5c77fd990196654bde8a116fc6f999d2fabb"
            alt="Avatar"
            className="icon"
            style={{ width: 35, height: 35, marginLeft: '0.5rem' }         
         }
         />
         </div>
      </div>
   );
}

export default Header;