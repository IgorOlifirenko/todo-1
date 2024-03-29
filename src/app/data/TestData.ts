import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учёба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'},
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#e5e5e5'},
        {id: 2, title: 'Средний', color: '#85D1B2'},
        {id: 3, title: 'Высокий', color: '#F1858D'},
        {id: 4, title: 'Очень срочно!', color: '#F1128D'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Заправить бензином полный бак',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2019-11-12')
        },
        {
            id: 2,
            title: 'Передать отчеты начальнику управления',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2019-11-13')
        },
        {
            id: 3,
            title: '',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1],
        },
        {
            id: 4,
            title: 'Сходить в парк с семьей, пригласить друзей',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-11-16')
        },
        {
            id: 5,
            title: 'Найти и выучит учебник по квантовой физике',
            completed: false,
            category: TestData.categories[2],
        },
        {
            id: 6,
            title: 'Сходить на семинар по программированию',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-10-12')
        },
        {
            id: 7,
            title: 'Найти билеты в Турцию, выбрать отель',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3],
        },
        {
            id: 8,
            title: 'Приготовить ужин для всей семьи',
            completed: false,
            category: TestData.categories[5],
        },
        {
            id: 9,
            title: 'Подтянуться 10 раз',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-08-12')
        },
        {
            id: 10,
            title: 'Пробежать 3 км.',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4],
        },
        {
            id: 11,
            title: 'Организовать детский праздник',
            completed: false,
        },
        {
            id: 12,
            title: 'Сходить на лекцию "Как научиться программировать на Java"',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2],
        },
        {
            id: 13,
            title: 'Купит продукты на неделю',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2019-09-12')
        },
        {
            id: 14,
            title: 'Провести собрание по поводу всех проектов',
            completed: true,
            category: TestData.categories[0],
        },
        {
            id: 15,
            title: 'Сдать экзамен по Java',
            priority: TestData.priorities[2],
            completed: true,
        },
        {
            id: 16,
            title: 'Положить 100 000 грн. в банк на депозит',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6],
        },
        {
            id: 17,
            title: 'Попросит аванс на работе',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6],
        },
        {
            id: 18,
            title: 'Сдать анализы, проверить гемоглобин',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2019-12-12')
        },
        {
            id: 19,
            title: 'Сравнить новый айпад с самсунгом',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-10-14')
        },
        {
            id: 20,
            title: 'Футбол с сотрудниками',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-08-19')
        },

    ];

}