import { fastify } from 'fastify'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import { isProd, envs } from './utils'

const app = fastify({
  logger: { level: isProd() ? 'warn' : 'info' },
})

app.register(helmet)
app.register(cors, { credentials: true, origin: envs.CORS_HOST })

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'API functional!',
  })
})

export { app }
