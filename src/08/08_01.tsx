export const userObj = {
    '0': 'Dimych',
    "1": 'Natasha',
    "2": 'Valera',
    "3": 'Katya'
}


//users[1]

var user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Julia'

export const userArray = [
    {
        '101': {id: 101, name: 'Dimych'},
        "312321": {id: 312321, name: 'Natasha'},
        "1212": {id: 1212, name: 'Valera'},
        "1": {id: 1, name: 'Katya'}
    }
]

// usersArray.find(u => u.id === 1)
//var usersCopy = [...userArray.filter(), user]
//var users = usersArray.filter(u => u.id !== user.id)