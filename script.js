'use strict';

const showTime = () => {
    const week = ['Воскресенье, ', 'Понедельник, ', 'Вторник, ', 'Среда, ','Четверг, ', 'Пятница, ', 'Суббота, '],
          month = [' января ', ' февраля ', ' марта ',
        ' апреля ', ' мая ', ' июня ',
        ' июля ', ' августа ', ' сентября ',
        ' октября ', ' ноября ', ' декабря '],
         date = new Date();
    const addZero = elem => {
        if (String(elem).length === 1) { 
            return '0' + elem; 
        } else { 
            return String(elem); 
        }
    };
    const changeEnding = (num, timeElem = '') => {
        const timeVariant = (timeElem === 'hr' ? [' час ', ' часа ', ' часов '] :
            timeElem === 'min' ? [' минута ', ' минуты ', ' минут '] :
            [' секунда ', ' секунды ', ' секунд ']);
        const n = num % 10;
        return num > 4 && num < 20 ? num + timeVariant[2] : 
            n === 1 ? num + timeVariant[0] : 
            n > 1 && n < 5 ? num + timeVariant[1] :
            num + timeVariant[2];
    };

    const textTime = 'Сегодня ' + week[date.getDay()] + date.getDay() + month[date.getMonth()] + 
    date.getFullYear() + ' года, ' + changeEnding(date.getHours(), 'hr') + 
    changeEnding(date.getMinutes(), 'min') + changeEnding(date.getSeconds());
    const time = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + 
    addZero(date.getDay()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear();

    document.querySelector('.text-time').textContent = textTime;
    document.querySelector('.time').textContent = time;
    
    console.clear();
    console.log(textTime);
    console.log(time);
    
};

let elem = document.createElement('div');
elem.classList.add('text-time');
document.body.appendChild(elem);

elem = document.createElement('div');
elem.classList.add('time');
document.body.appendChild(elem);
console.dir(elem);

setInterval(showTime, 1000);
showTime();
document.body.style.margin = '400px 600px';
document.body.style.fontSize = '20px';
document.body.appendChild(elem).style.margin = '10px 200px';
