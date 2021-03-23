import camelcaseKeys from 'camelcase-keys';
import {poolPromise} from './connection';
import sql from 'mssql'
import { SQLParamterModel } from '../../common/helper/models/sqlParameter.model';
import { StoredProcedure } from '../../common/helper/constants/dbConstants';

export class DBHelper 
{
    async getDataFromQry(qry:string)
    {     
        
        const pool = await poolPromise;
        const request = await pool.request();
       
        const resultData = await request.query(qry);                        
        return this.convertToJson(resultData.recordset);

      
        
    }

    async executeProc(procName:StoredProcedure,parameters:SQLParamterModel[]=null)
    {
        const pool = await poolPromise;
        const request = await pool.request();

        if(parameters && parameters.length>0)
        {
            parameters.forEach(x=>{
                request.input(x.name,x.type,x.value);
            });
        }

        const resultData = await request.execute(procName.toString());
        return this.convertToJson(resultData.recordset);

    }

    private convertToJson(data:any)
    {
        return camelcaseKeys(data);
    }
}