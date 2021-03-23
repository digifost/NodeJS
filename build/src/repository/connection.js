"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConnection = void 0;
const mssql_1 = __importDefault(require("mssql"));
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
const sqlConnection = new mssql_1.default.ConnectionPool(sqlConfig);
exports.sqlConnection = sqlConnection;
sqlConnection.connect().then(function () {
    console.log('DB is connected');
});
