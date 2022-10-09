const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

export const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150},
]



