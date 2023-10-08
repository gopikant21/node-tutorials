const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user)

console.log(os.version())

//methos return the system uptime in seconds
console.log(`the system uptime is ${os.uptime()/60} minutes`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)