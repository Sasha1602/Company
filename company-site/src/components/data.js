import neiro from '../assets/neiro.svg';
import logo from '../assets/logo.svg'
import group1 from '../assets/logo4.svg'
import group2 from '../assets/logo3.svg'
import laptop from '../assets/laptop.png';
import checkCircle from '../assets/box-check-circle.svg';

import sup1 from '../assets/sup1.png'
import sup2 from '../assets/sup2.png'
import sup3 from '../assets/sup3.png'
import sup4 from '../assets/sup4.png'
import sup5 from '../assets/sup5.png'

export const navElement = [
    {
        element: 'Главная',
        link: '#home'
    },
    {
        element: 'Услуги',
        link: '#services'
    },
    {
        element: 'О компании',
        link: '#company'
    },
    {
        element: 'Контакты',
        link: '#contacts'
    },
    {
        image: neiro
    }
];

export const header = [
    {
        logo: logo,
        title: 'ООО «Нейропринт»',
        text: 'это стремительно развивающаяся IT-компания, специализирующаяся \n' +
            'на проведении исследований в области передовых технологий, \n' +
            'таких как искусственный интеллект и нейронные сети, \n' +
            'а также осуществляющая разработки в сфере веб-технологий.',
    },
    {
        leftText: 'Генерация эскизов одежды',
        rightText: 'Генерация текстильных композиций',
    },
];
export const info = [
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
export const about = [
    {
        title: 'О компании',
        text: 'ООО «Нейропринт» разрабатывает уникальные решения, направленные на оптимизацию процесса \n' +
            'разработки текстильных композиций и выкройки одежды. Разрабатываемая система обладает высокой \n' +
            'степенью гибкости, позволяя настраивать его индивидуально для каждого текстильного предприятия. \n' +
            'Что в свою очередь обеспечивает сокращение времени создания изображений и способствует более \n' +
            'адаптивной реакции на требования рынка.',
        image: group1,
        imageText: group2
    }
];

export const supports = [
    {
        image: sup1,
        link: 'https://fasie.ru/'
    },
    {
        image: sup2,
        link: 'https://www.isuct.ru/'
    },
    {
        image: sup3,
        link: 'https://vk.com/moybiznes37'
    },
    {
        image: sup4,
        link: 'https://univertechpred.ru/'
    },
    {
        image: sup5,
        link: 'https://vk.com/digit37'
    },
    {
        title: 'Проекты разрабатываются при участии',
    }
]
export const contact = [
    {
        title: 'Контакты',

        leftText1: '155040, г. Тейково, ул. Короткова, д. 64',
        leftText2: 'Почтовый адрес: 155040, г. Тейково, ул. Короткова, д. 64',

        rightText1: 'Тел: 89012898204',
        rightText2: 'Email: h2so4corotcovo@gmail.com',

        mapInfo: 'Copyright © 2024 ООО "Нейропринт"',
    }
]

export const footer = [
    {
        leftInfo: 'Полное наименование на русском языке:',
        rightInfo: 'ООО "Нейропринт"',
    },
    {
        leftInfo: 'Полное наименование на английском языке:',
        rightInfo: 'LLC "Neuroprint"',
    },
    {
        leftInfo: 'ИНН:',
        rightInfo: '3700011282',
    },
    {
        leftInfo: 'ОГРН',
        rightInfo: '1233700009290',
    },
    {
        leftInfo: 'КПП',
        rightInfo: '370001001'
    }
]