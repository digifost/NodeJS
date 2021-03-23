import express from 'express';

import apiRoutes  from '../route/index';

// rest of the code remains same
const app = express();
const router = express.Router();

const PORT = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/', apiRoutes);

//app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    
});


