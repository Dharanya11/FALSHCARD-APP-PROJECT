const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const router = require('./routers/egRouters')
const cors = require('cors')
const daaRouter = require('./routers/daaRouter');
const mathsRoutes = require('./routers/mathsRouter');
dotenv.config();
const app = express();
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json())
app.use('/', router)
app.use('/api/daa', daaRouter);
app.use('/api/maths', mathsRoutes);
connectDB();

app.listen(PORT, () => { console.log(`server running on port http://localhost:${PORT}`) })