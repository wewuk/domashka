const firstUser = {
    name: 'Danil',
    age:16
}

const SecondUser = {
    john: {
        age: 20,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

SecondUser.john.sayHello(`john`)

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },

    {
        name: 'john',
        age: 30,
        isAdmin: true
    }
]



let countUsers = 0

for (let i = 0; i < users.length; i++) {
    if (user[i].isAdmin === false) {
        countUsers++
}

console.log(countUsers)

