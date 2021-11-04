// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { users } from "../Data/users"
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        res.status(200).json(users)
    }else if(req.method === 'POST'){
        const user = req.body.user
        const newUser = {
            name: user
        }
        users.push(newUser)
        res.status(200).json(newUser)
    }

  }


