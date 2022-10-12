type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    "312321": {id: 312321, name: 'Natasha'},
    "1212": {id: 1212, name: 'Valera'},
    "1": {id: 1, name: 'Katya'}
}

test('should update corresponding user from users', () => {

    users["101"].name = 'Ekaterina';
    expect(users["101"].name).toEqual('Ekaterina');

})