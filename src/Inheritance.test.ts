import { Student, Person } from './Inheritance';

const testData = {
    name: 'Ivan',
    secondName: 'Petrov',
    age: 20,
    phone: '+7(555)555-55-50',
};

describe('Наследование', () => {
    it('Конструктор класса Person', () => {
        const person = new Person(testData);

        expect(person._name).toBe('Ivan');
        expect(person._secondName).toBe('Petrov');
        expect(person._age).toBe(20);
        // @ts-expect-error Тут не должно быть _phone, совсем
        expect(person._phone).toBeUndefined();
    });

    it('Конструктор класса Student', () => {
        const student = new Student(testData);

        expect(student._name).toBe('Ivan');
        expect(student._secondName).toBe('Petrov');
        expect(student._age).toBe(20);
        expect(student._phone).toBe('+7(555)555-55-50');
    });

    it('Данные ответа getData класса Person соответствуют полученным в конструктор класса', () => {
        expect(new Person({ ...testData }).getData()).toStrictEqual({
            name: testData.name,
            secondName: testData.secondName,
            age: testData.age,
        });
    });

    it('Формат ответа getData класса Student соответствует IStudentData', () => {
        const data = new Student({ ...testData }).getData();
        expect(data).toStrictEqual(testData);
    });
});
