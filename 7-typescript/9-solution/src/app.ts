import {LogLevel} from "./LogLevel"; 
import {LogConfiguration} from "./LogConfiguration";
import {Logger} from "./Logger";

let loggerConfig: LogConfiguration, logger: Logger;

loggerConfig = new LogConfiguration(true, true, true, LogLevel.Warning);
logger = new Logger("appLogger");
logger.log(LogLevel.Error, 'ColorError');
logger.log(LogLevel.Info, 'ColorInfo');

loggerConfig = new LogConfiguration(true, false, false, LogLevel.Warning);
logger = new Logger("appLogger", loggerConfig);
logger.log(LogLevel.Error, 'Error');
logger.log(LogLevel.Info, 'Info');