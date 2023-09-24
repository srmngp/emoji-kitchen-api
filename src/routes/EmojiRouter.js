import { Router } from 'express'
import { EmojiController } from '../controllers/EmojiController.js'

export const emojiRouter = Router()

emojiRouter.get('/', EmojiController.getEmojis)
