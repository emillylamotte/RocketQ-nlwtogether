//arquivo de iniciação do db, cria as tabelas no db, criado no package.json pois só será executado uma vez

const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT,
            sala INT
        )`);

        await db.close()
    }
}
initDb.init();
