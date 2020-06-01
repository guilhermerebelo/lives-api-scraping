const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
  fs.writeFile("./example.json", JSON.stringify({"teste": "teste"}), function(err){
    //Caro ocorra algum erro
    if(err){
      return console.log(err)
    }
    //Caso não tenha erro, retornaremos a mensagem de sucesso
    console.log('Arquivo Criado');
  });

  res.send('das')
});

module.exports = router;
