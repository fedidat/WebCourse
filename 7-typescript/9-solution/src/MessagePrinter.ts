import * as fs from 'fs';

import {LogLevel} from './LogLevel';
import {MessagePrinterBuilder} from './MessagePrinterBuilder';

export class MessagePrinter {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: LogLevel;

    constructor(builder: MessagePrinterBuilder) {
        this.console = builder.console;
        this.file = builder.file;
        this.colors = builder.colors;
        this.logLevel = builder.logLevel;
    }

    public print(message: string, level: LogLevel) {
        if(!level) {
            level = this.logLevel;
        }
        message = level + " " + message;
        if(this.file) {
            MessagePrinter.printToFile("./log.txt", message);
        }
        if(this.console) {
            if(this.colors) {
                message = MessagePrinter.colorize(message, level);
            }
            console.log(message);
        }
    }

    static colorMap: { [key:string]: number; } = {
        "INFO": 34,
        "WARNING": 33,
        "DEBUG": 32,
        "ERROR": 31
    };

    private static colorize(message: string, level: LogLevel) {
        return `\x1b[${MessagePrinter.colorMap[level]}m${message}\x1b[0m`;
    }

    private static printToFile(fileName: string, message: string): void {
        fs.appendFile(fileName, message + "\n", function(err) {
            if(err) {
                return console.log("Error writing to file: " + err);
            }
        }); 
    }
}