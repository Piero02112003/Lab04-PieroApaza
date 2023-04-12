const express = require('express');
const app = express();
const PORT = 5000;

const clientes = [
  { nombre: 'Piero Apaza', numero: 978128910, correo: 'pieroapaza@mail.com' },
  { nombre: 'Marco Rivera', numero: 912781345, correo: 'gianmarcorivera@mail.com' },
  { nombre: 'Mariana Flores', numero: 945512799, correo: 'marianaflores@mail.com' }
];

const productos = [
  { nombre: 'Refrigerador', precio: 'S/.' + 2500 },
  { nombre: 'Televisión', precio: 'S/.' + 1800 },
  { nombre: 'PS4', precio: 'S/.' + 3500 }
];

app.set('view engine', 'ejs');

app.get('/clientes', (req, res) => {
  res.render('clientes', { clientes });
});

app.get('/productos', (req, res) => {
  res.render('productos', { productos });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
