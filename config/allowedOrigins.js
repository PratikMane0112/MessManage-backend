import dotenv from 'dotenv'
dotenv.config({path:'.env.example'})
const allowedOrigins = [
    'process.env.BASE_URL',
]

export default allowedOrigins