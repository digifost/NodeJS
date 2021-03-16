"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mssql_1 = __importDefault(require("mssql"));
const index_1 = __importDefault(require("../route/index"));
// rest of the code remains same
const app = express_1.default();
const router = express_1.default.Router();
const PORT = 8000;
const sqlConfig = {
    authentication: {
        type: 'default',
        options: {
            userName: 'test',
            password: 'Password2', //update me
        }
    },
    server: 'localhost',
    options: {
        instanceName: 'SQLExpress',
        enableArithAbort: true,
        integratedSecurity: true,
        database: 'Employee',
        port: 59910
    }
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api2/', index_1.default);
//app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    let dbConn = new mssql_1.default.ConnectionPool(sqlConfig);
    dbConn.connect().then(function () {
        let request = new mssql_1.default.Request(dbConn);
        console.log('DB is connected');
    });
});
