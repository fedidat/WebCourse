import { Room } from '../model/room';
import { User } from '../model/user';
import { Team } from '../model/team';

export class DummyData {
    public static rooms: Room[] = [
        new Room(1, "room 1"),
        new Room(2, "room 2"),
        new Room(3, "room 3"),
        new Room(4, "room 4"),
    ];

    public static users: User[] = [
        new User("user1", "p"),
        new User("user2", "p"),
        new User("user3", "p"),
        new User("user4", "p"),
    ];

    public static teams: Team[] = [
        new Team("team 1", 
            [DummyData.users[0], DummyData.users[1]],
            [DummyData.rooms[0], DummyData.rooms[1]],
        ),
        new Team("team 2", 
            [DummyData.users[2], DummyData.users[3]],
            [DummyData.rooms[2], DummyData.rooms[3]],
        ),
    ]
}