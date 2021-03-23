import sql from 'mssql'

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
    database:'Employee',
    options:
    {
        instanceName:'SQLExpress',
        enableArithAbort: true,
        integratedSecurity: true,
        database:'Employee1',      
        port:59910
       
    }
}

const poolPromise = new sql.ConnectionPool(sqlConfig)
.connect().then(pool=>
{
   
    console.log('DB is connected here');
    return pool;
});

export 
{
    poolPromise
}