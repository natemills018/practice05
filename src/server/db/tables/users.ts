import { SelectQuery, ModifyQuery, AlterQuery } from "../queryUtils";
import { MySqlResponse } from "../../types";
import {User} from '../../types';
import { NewUser } from "../../types";



export function find(column: string, value: string) {
    return SelectQuery<User>('SELECT * FROM Users WHERE ?? = ?', [column, value])
}


export function insert(newUser: NewUser) {
    return ModifyQuery('INSERT INTO Books SET ?', [newUser])
};