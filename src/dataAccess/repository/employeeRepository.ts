import { EmployeeModel } from "../../common/helper/models/employee.model";
import { DBHelper } from "../helper/dbHelper";
import sql from 'mssql';
import { SQLParamterModel } from "../../common/helper/models/sqlParameter.model";
import { StoredProcedure } from "../../common/helper/constants/dbConstants";


export class EmployeeRepository extends DBHelper
{      

    async getEmployees():Promise<EmployeeModel[]>
    {
        let parameters:SQLParamterModel[] = [
            {
                name:"name" ,
                type:sql.NVarChar,
                value:"chetan"

            }
        ]

        return await this.executeProc(StoredProcedure.getEmployee,parameters);
    }

    async authenticateEmployee(userName:string,pwd:string):Promise<EmployeeModel>
    {
        const parameters : SQLParamterModel[]=
        [
            this.addParameter("userName",userName),
            this.addParameter("password",pwd)
        ]
        return await this.executeProc(StoredProcedure.validateUser,parameters);
    }
}
