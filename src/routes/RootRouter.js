import { Router } from 'express'

export const rootRouter = Router()

rootRouter.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Emoji Kitchen API!',
    routes: {
      '/mix/random': 'Get a random emoji mix'
    }
  })
})
