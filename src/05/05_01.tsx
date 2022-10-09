export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]


const dimychTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: man.name.split(' ')[0],
        lastname: man.name.split(' ')[1],
    })

const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Andrew', lastname: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Alexander', lastname: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstname: 'Dmitry', lastname: 'Sidorov'
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator);
const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstname: man.name.split(' ')[0],
    lastname: man.name.split(' ')[1],
}));

const messages = people.map(man => `Hallo ${man.name.split(' ')[0]}. Welcome!}`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map(man => `Hallo ${man.name.split(' ')[0]}. Welcome!`)
}