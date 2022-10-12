function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        age: 32
    }

    icreaseAge(user);
    expect(user.age).toEqual(33);
    const superman = user;
    superman.age = 1000;
    expect(user.age).toEqual(1000);
})

test('array test', () => {
    let users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Julia",
            age: 25
        }
    ]

    const admins = users;
    admins.push({name: 'Bandito', age: 12})
    expect(users[2]).toEqual({name: 'Bandito', age: 12});

})

test('array reference test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;
    expect(adminsCount).toEqual(101);

})