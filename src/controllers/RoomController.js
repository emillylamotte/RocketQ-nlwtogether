const Database = require("../db/config")

module.exports = {
    async create(req,res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true
        
        while(isRoom){
        /*Gerando o número da sala */
            for (var i=0; i<6; i++){
                i==0 ? roomId = Math.floor(Math.random() *10).toString() : roomId += Math.floor(Math.random() *10).toString() 
            }
            /*Verificar se o número já existe, para não ter salas duplicadas */
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
            
            if (! isRoom){
            /*Se não houver id igual, insere a sala no banco */
            await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}    
            )`)
           }
        }
        await db.close()
        res.redirect(`/room/${roomId}`)
    },

    open(req,res){
       const roomId = req.params.room
        res.render("room", {roomId: roomId})
    }
}