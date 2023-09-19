import express from 'express'
import { rootRouter } from '../src/routes/RootRouter'
import { mixRouter } from '../src/routes/MixRouter'

export const app = express()

app.disable('x-powered-by')

app.use('/', rootRouter)
app.use('/mix', mixRouter)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
