const { log } = require('console')
const os =require('os')

// info about current uuser
const user =os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`the system uptime is ${os.uptime}`)
const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)