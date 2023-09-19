import express from 'express'
import { mixRouter } from './src/routes/MixRouter.js'
import { rootRouter } from './src/routes/RootRouter.js'

export const app = express()

try {
  app.disable('x-powered-by')

  app.use('/', rootRouter)
  app.use('/mix', mixRouter)

  const PORT = process.env.PORT ?? 3000
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })

} catch (error) {
  console.log('que ta pachando')
  console.log(error)
}
