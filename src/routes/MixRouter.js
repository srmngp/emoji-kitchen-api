import { Router } from 'express'
import { EmojiMixController } from '../controllers/EmojiMixController.js'

export const mixRouter = Router()

mixRouter.get('/random', EmojiMixController.getRandomMix)
mixRouter.get('/:emoji1/:emoji2', EmojiMixController.getMix)
