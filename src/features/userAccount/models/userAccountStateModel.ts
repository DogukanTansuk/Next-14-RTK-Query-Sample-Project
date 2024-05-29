import { UserAccountModel } from "./userAccountModel";

export interface UserAccountStateModel {
    userAccounts: Nullable<UserAccountModel[]>;
    userAccount: Nullable<UserAccountModel>;
}
