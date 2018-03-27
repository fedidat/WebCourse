import {LogLevel} from './LogLevel';
import {MessagePrinter} from './MessagePrinter';

export class MessagePrinterBuilder {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: LogLevel;

    constructor() {
    }

    public toConsole(): MessagePrinterBuilder {
        this.console = true;
        return this;
    }

    public toFile(): MessagePrinterBuilder {
        this.file = true;
        return this;
    }

    public withColor(): MessagePrinterBuilder {
        this.colors = true;
        return this;
    }

    public defaultLogLevel(level: LogLevel): MessagePrinterBuilder {
        this.logLevel = level;
        return this;
    }

    public build(): MessagePrinter {
        return new MessagePrinter(this);
    }
}