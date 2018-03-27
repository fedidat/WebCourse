import { User } from "./user";
import { Room } from "./room";

export enum EventType{
    connect = 1,
    disconnect,
    message
}

export class Message {
    constructor(room: Room, eventType: EventType, userid: string, content?: string) {
        this.date = new Date();
        this.content = content ? content : "";
        this.userid = userid;
        this.eventType = eventType;
        this.room = room;
    }

    eventType: EventType;
    content: string;
    room: Room;
    userid: string;
    date: Date;
}