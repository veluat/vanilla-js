import {createGreetingMessage, ManType} from "./05_01";
import exp from "constants";

let people: ManType[] = [];

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hallo Andrew. Welcome!')
    expect(messages[1]).toBe('Hallo Alexander. Welcome!')
    expect(messages[2]).toBe('Hallo Dmitry. Welcome!')
})