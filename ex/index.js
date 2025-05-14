import Pessoa from "./pessoa"

const logger = require("./funcaoRuim")
logger.nada("Usando Padrão CommonJS!")

const pessoa = new Pessoa("Guilherme")
console.log(Pessoa.toString())