import { Router } from 'express'
import { EmojiMixController } from '../controllers/EmojiMix.js'

export const mixRouter = Router()

mixRouter.get('/random', EmojiMixController.getRandomMix)
