// CommonJS, every file is module(by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')//console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
//console.log(data.singlePerson)
//console.log(data.items)
require('./7-mind-granade')

//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)