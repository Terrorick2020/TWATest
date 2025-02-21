const NODE_ENV: string = String(process.env.NODE_ENV) || 'development'
const isDev: boolean = NODE_ENV === 'development'

export default () => ({
    PORT: Number(process.env.PORT) || 3000,
    HOST: String(process.env.HOST) || 'localhost',
    PREFIX: String(process.env.PREFIX) || 'api',
    isDev,
})
