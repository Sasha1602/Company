import Group17 from '../../image/Group 17.png';
import logo from '../../image/logo.png';
import laptop from '../../image/laptop.png';
import checkCircle from '../../image/box-check-circle.svg';
import person1 from '../../image/1.png';
import person2 from '../../image/2.png';
import person3 from '../../image/3.png';
import person4 from '../../image/4.png';
import person5 from '../../image/5.png';
import person6 from '../../image/6.png';
import person7 from '../../image/7.png';
import logodo from '../../image/logodo.png';
export let navElement = [
    {
        element: 'Главная'
    },
    {
        element: 'Услуги'
    },
    {
        element: 'Команда'
    },
    {
        element: 'О компании'
    },
    {
        element: 'Реквизиты'
    },
    {
        element: 'Контакты'
    },
    {
        image: Group17
    }
]
export let header = [
    {
        id: 0,
        title: 'ООО «Нейропринт»',
        text: 'это стремительно развивающаяся IT-компания, специализирующаяся \n' +
            'на проведении исследований в области передовых технологий, \n' +
            'таких как искусственный интеллект и нейронные сети, \n' +
            'а также осуществляющая разработки в сфере веб-технологий.',
        image: logo,
    },
    {
        id: 1,
        leftText: 'Генерация эскизов одежды',
        rightText: 'Генерация текстильных композиций',
    }
];

export let info = [
    {
        image: laptop,
        title: 'Основные услуги',
        text: 'ООО «Нейропринт» специализируется на разработке \n' +
            'высококачественного программного обеспечения и \n' +
            'предоставлении услуг разработки по \n' +
            'индивидуальному заказу.',
        point: checkCircle,
        point1: 'Разработка веб-сайтов по заказов',
        point2: 'Разработка сервисов',
        point3: 'Разработка программного обеспечения под заказ',
    }
];

export let team = [
    {
        title: 'Команда проекта',
    },
    {
        name: 'Руководитель',
        image: person1,
    },
    {
        name: 'Дизайнер',
        image: person2,
    },
    {
        name: 'Аналитик',
        image: person3,
    },
    {
        name: 'Фронтенд-разработчик',
        image: person4,
    },
    {
        name: 'Бэкэнд-разработчик',
        image: person5,
    },
    {
        name: 'Бэкэнд-разработчик',
        image: person6,
    },
    {
        name: 'Фронтенд-разработчик',
        image: person7,
    },
]

export let about = [
    {
        title: 'О компании',
        text: 'ООО «Нейропринт» разрабатывает уникальные решения, направленные на оптимизацию процесса \n' +
            'разработки текстильных композиций и выкройки одежды. Разрабатываемая система обладает высокой \n' +
            'степенью гибкости, позволяя настраивать его индивидуально для каждого текстильного предприятия. \n' +
            'Что в свою очередь обеспечивает сокращение времени создания изображений и способствует более \n' +
            'адаптивной реакции на требования рынка.',
        image: logodo
    },
    {
        title: 'Реквизиты',

        leftInfo1: 'Полное наименование на русском языке:',
        leftInfo2: 'Полное наименование на английском языке:',
        leftInfo3: 'ИНН',
        leftInfo4: 'ОГРН',
        leftInfo5: 'КПП',

        rightInfo1: 'ООО "Нейропринт"',
        rightInfo2: 'Neuroprint',
        rightInfo3: '3700011282',
        rightInfo4: '1233700009290',
        rightInfo5: '370001001'
    }
];

export let contact = [
    {
        title: 'Контакты',
        text1: '155040, г. г. Тейково, ул. Короткова, д. 64\n' +
            'Почтовый адрес: 155040, г. Тейково, ул. Короткова, д. 64',
        text2: 'Тел.89012898204\n' +
            'Email: h2so4corotcovo@gmail.com',
        mapInfo: 'Copyright © 2023 ООО "Нейропринт"',
    }
];