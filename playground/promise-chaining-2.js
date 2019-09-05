require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d43241e43a6a2412d03fd90').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})