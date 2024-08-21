var fs = require('fs');
var util = require('util');
var path = require('path');

// Directorio donde se guardará el archivo de log
var logDir = 'Debug';

// Verifica si el directorio existe, si no, lo crea
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Ruta completa del archivo de log
var log_file = fs.createWriteStream(path.join(logDir, 'debug.log'), { flags: 'a' });
var log_stdout = process.stdout;

console.log = function (d) {
    var timestamp = new Date().toISOString();
    var log_message = timestamp + ' - ' + util.format(d) + '\n';

    log_file.write(log_message);
    log_stdout.write(log_message);
};

module.exports = console;
