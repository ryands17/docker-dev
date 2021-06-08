import { app } from './app'
import { envs } from './utils'

const start = async () => {
  await app.listen({ port: envs.PORT, host: envs.HOST })
  app.log.info(`app running on http://${envs.HOST}:${envs.PORT}/`)
}

start()
