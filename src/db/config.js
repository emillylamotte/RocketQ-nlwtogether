//Importando os pacotes do db
const sqlite3 = require("sqlite3");7
const { open } = require("sqlite")

module.exports = () =>
    open({
        filename:'./src/db/rocketq.sqlite',
        driver: sqlite3.Database,

    });
