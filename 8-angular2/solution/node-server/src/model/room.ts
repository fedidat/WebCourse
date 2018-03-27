import { User } from "./user";

export class Room {
    constructor(id: number, name: string, users?: User[]) {
        this.id = id;
        this.name = name;
        this.users = users ? users : [];
    }

    id: number;
    name: string;
    users: User[];
}