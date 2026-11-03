import pool from '../database/conection.js'

class usersControl{
    async index(req,res){
        try{
            const users = await pool.query(
                'SELECT * from users'
            )
            res.json(users.rows)
        }
        catch(e){
            console.error(e)
            res.status(500).json({error:'Error interno do servidor'})
        }
    }
}

export default usersControl;