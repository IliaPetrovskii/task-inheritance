# Inheritance

Установите зависимости:

```
npm install
```

В файле `src/Inheritance.ts` выполните следующие задания:

1. Напишите конструкторы для классов `Person` и `Student`, которые принимают в качестве параметра объекты с интерфейсами `IPersonData` и `IStudentData` соответственно

```TypeScript
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
}

export class Student extends Person {
    readonly _phone: string;
}
```

2. Дополните классы `Person` и `Student` методами `getData` с возвращаемыми значениями по интерфейсам `IPersonData` и `IStudentData` соответственно

Проверить себя можно запустив команду `npm run test`.

После выполнения задания создайте pull request с решением.
