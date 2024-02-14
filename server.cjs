const express = require ("express");
const dotenv = require ("dotenv");// require dotenv so that I can use the .env fil

dotenv.config( {path: './config/config.env'}); //load env vars

const app = express(); //initialize app variable with express
// to run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});