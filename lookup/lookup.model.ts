import { IBaseEntity } from "../../model/base.model";

export interface ILookupModel extends IBaseEntity
{
    Name:string,
    LookupType:string,
    FullName:string,
    DisplayName:string,
    DisplayOrdering:string,
}
