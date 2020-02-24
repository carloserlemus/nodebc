/*
Show the following output using the logplease module
Hello Node.js (use debug method)
Node.js is great!! (use info method)
Warning, Warning, I think we have a Warning (use warn method)
Mayday Mayday, we have an errro, repeat.. we have an error (use error method)
*/

const Logger = require('logplease');
const logger = Logger.create('utils');

//debug method
logger.debug(`This is a debug message`);




//info method
logger.info(`This is an info message`);

//warn method
logger.warn(`This is a warning`);

//error method
logger.error(`This is an error`);
