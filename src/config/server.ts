import express from 'express';
import sql from 'mssql'
import apiRoutes  from '../route/index';

// rest of the code remains same
const app = express();
const router = express.Router();

const PORT = 8000;
const sqlConfig = 
{
    authentication: {
        type: 'default',
        options: {
            userName: 'test', //update me
            password: 'Password2', //update me
        }
    },
    server:'localhost',
    options:
    {
        instanceName:'SQLExpress',
        enableArithAbort: true,
        integratedSecurity: true,
        database:'Employee',      
        port:59910
       
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api2/', apiRoutes);

//app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    let dbConn = new sql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function()
    {
        let request = new sql.Request(dbConn);
        console.log('DB is connected');
    });
});


