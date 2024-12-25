import { type Express, type Request, type Response } from 'express'
import bcrypt from "bcrypt"
import { usersTable } from '../db/schema'
import { db } from '../database'

export const initializeAuthAPI = (app: Express) => {
    
    app.post('/api/auth/register', async (req: Request, res: Response) => {
        const {password,username} = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await db.insert(usersTable).values({username, password: passwordHash}).returning()
        res.send({ id: newUser[0].id, username: newUser[0].username})
      })
    
}