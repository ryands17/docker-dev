export const isProd = () => process.env.NODE_ENV === 'production'

export const envs = {
  PORT: Number(process.env.PORT || 4000),
  HOST: process.env.HOST || '0.0.0.0',
  CORS_HOST: process.env.CORS_HOST || 'http://frontend:3000/',
}
