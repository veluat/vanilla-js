export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Julia',
        age: 40,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Hope Str.'
            }
        }
    }
})

test('destructuring', () => {


    //const age = props.age;
    //const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(40);
    expect(lessons.length).toBe(3);

    expect(title).toBe('Hope Str.');

})

test('rest', () => {

    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    //const [ls1, ls2] = props.lessons;
    const [,,ls3] = props.lessons; // если нужен только 3-й элемент

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

   // expect(ls1.title).toBe('1');
   // expect(ls2.title).toBe('2');
    expect(ls3.title).toBe('3');

})