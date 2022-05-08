import { Router } from 'express'
const router = Router()

// Routes


router.get('/ping', (req, res) => res.send('Pong!'))

export default router


    