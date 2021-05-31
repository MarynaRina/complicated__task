"use strict";

let lang = prompt('Выберите язык');

if (lang === 'ru') {
    console.log(`Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье`);
} else if (lang === 'en') {
    console.log(`Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday`);
} else {
    console.log('Язык не найден');
}

switch (lang) {
  case 'ru':
    alert( 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье' );
    break;
  case 'en':
    alert( 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' );
    break;
}

let ru = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];
let en = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
]

let namePerson = prompt('Введите имя');
console.log((namePerson === 'Максим') ? 'Преподаватель' : (namePerson ==='Артём') ? 'Директор' : 'Студент');
            