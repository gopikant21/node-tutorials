const {readFileSync,writeFileSync} = require('fs')

console.log('start')
const first = readFileSync('./folder2/content/first.txt','utf8')
const second = readFileSync('./folder2/content/second.txt','utf8')

//console.log(first,second)
writeFileSync(
    './folder2/content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');