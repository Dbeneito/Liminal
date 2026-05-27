import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes'
import projectRoutes from './routes/projects.routes'
import userRoutes from './routes/users.routes'
import referentRoutes from './routes/referents.routes'
import categoryRoutes from './routes/categories.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://liminal-sooty.vercel.app',
  ],
  credentials: true,
}))

app.use(express.json())

// Rutas
app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/users', userRoutes)
app.use('/api/referents', referentRoutes)
app.use('/api/categories', categoryRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'LIMINAL API running' })
})

// Solo en local llamamos a listen
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

export default app