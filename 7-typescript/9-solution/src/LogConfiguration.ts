import {LogLevel} from './LogLevel';

export class LogConfiguration {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: LogLevel;

    constructor(console: boolean, file: boolean, colors: boolean, logLevel: LogLevel) {
        this.console = console;
        this.file = file;
        this.colors = colors;
        this.logLevel = logLevel;
    }
}