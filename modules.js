// Modules

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)