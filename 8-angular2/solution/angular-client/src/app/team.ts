import {User} from './user';
import {Room} from './room';

export class Team {
    constructor(id: string, users?: [User], rooms?: [Room]) {
        this.id = id;
        this.users = users ? users : [];
        this.rooms = rooms ? rooms : [];
    }

    id: string;
    users: User[] = [];
    rooms: Room[] = [];

    public addUser(userNew: User) {
        if(!this.users.filter(user => user.id === userNew.id)) {
            this.users.push(userNew);
        }
    }
    public addRoom(roomNew: Room) {
        if(!this.rooms.filter(user => user.id === roomNew.id)) {
            this.rooms.push(roomNew);
        }
    }
}