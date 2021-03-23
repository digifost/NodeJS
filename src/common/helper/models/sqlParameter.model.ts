import { ISqlType, ISqlTypeFactoryWithNoParams } from "mssql";
import sql from 'mssql'


export class SQLParamterModel
{
    constructor(name:string,value:any,type:ISqlTypeFactoryWithNoParams=sql.NVarChar)
    {
        this.name = name;
        this.value = value;
        this.type = type ?? sql.NVarChar;
    }

    name:string;
    type:ISqlTypeFactoryWithNoParams;
    value:any;
}