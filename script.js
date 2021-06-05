'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.getElementById('days'); 
const todayDay = new Date();

const days = () => {

    week.forEach((item, i) => {
        let createDiv = document.createElement('div');

        if (i === +todayDay.getDay()-1) { 
            console.log(todayDay.getDay());
            createDiv.classList.add('today'); 
            createDiv.textContent = week[i]; 
        }
        if (item === 'Суббота' || item === 'Воскресенье') {
            createDiv.classList.add('italic'); 
            createDiv.textContent = week[i]; 
        } else {
            createDiv.textContent = week[i]; 
        }
        day.appendChild(createDiv); 
    });

};

days(); 