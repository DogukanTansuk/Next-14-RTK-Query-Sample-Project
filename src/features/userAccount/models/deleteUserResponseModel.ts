import { UserAccountModel } from "./userAccountModel";

export interface DeleteUserResponseModel extends UserAccountModel{
    isDeleted: boolean;
}