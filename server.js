const express = require('express')
const cors = require('cors')

//configuração de saida para o front
const app = express();
app.use(express.json());
app.use(cors());

//rota de teste da Api
app.listen(3000,() =>{
    console.log("API rodando com sucesso!!")
})