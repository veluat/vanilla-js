import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    let result1 = sum(a, b);
    let result2 = sum(c, b);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('mult should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    let result1 = mult(a, b);
    let result2 = mult(c, b);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friends!';
    const sent2 = 'JS is programming language';

    let result1 = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('is');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');
})