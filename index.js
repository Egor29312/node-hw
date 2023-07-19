const fs = require('fs');

fs.writeFileSync('first.txt', 'Я люблю NodeJS');

fs.writeFileSync('second.txt', 'I like NodeJS');

const data = fs.readFileSync('first.txt', 'utf8');
fs.appendFileSync('second.txt', data);