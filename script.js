"use strict";

let lang = prompt('Выберите язык');

// A
if (lang === 'ru') {
    console.log(`Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье`);
} else if (lang === 'en') {
    console.log(`Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday`);
} else {
    console.log('Язык не найден');
}

// B
switch (lang) {
  case 'ru':
    alert( 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье' );
    break;
  case 'en':
    alert( 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' );
    break;
}

// C
const allLang = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(allLang[lang]);

let namePerson = prompt('Введите имя');
console.log((namePerson === 'Максим') ? 'Преподаватель' : (namePerson ==='Артём') ? 'Директор' : 'Студент');
            