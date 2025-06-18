const firstUser = {
    name: `Danil`,
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
        name: `alex`,
        age: 23,
        isAdmim: false
    },

    {
        name: `john`,
        age: 30,
        isAdmim: true
    }
]



const someUsers = [0, 1, 2, 3]

for (let i = 0; i < someUsers.length; i++) {
    console.log(`Обычных пользователей 3`)
}

