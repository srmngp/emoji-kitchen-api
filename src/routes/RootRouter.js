import { Router } from 'express'

export const rootRouter = Router()

rootRouter.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Emoji Kitchen API!',
    routes: {
      '/emoji': 'Get a list of all emojis',
      '/emoji/:emoji/combinations': 'Get a list of emoji combinations for a specific emoji',
      '/mix/:emoji1/:emoji2': 'Get a specific emoji mix',
      '/mix/random': 'Get a random emoji mix'
    }
  })
})
