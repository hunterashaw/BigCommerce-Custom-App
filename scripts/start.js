var nodemon = require('nodemon');

nodemon({script:'app', watch:['.env', 'app.js', 'routes/*']})
console.log('Running.\n')

nodemon.on('restart', (files) => {const now = new Date();console.log('Restart at: ' + now.getHours() + ':' + (now.getMinutes().length===1?'0':'') + now.getMinutes() + ' after:', files, 'changed.\n')})