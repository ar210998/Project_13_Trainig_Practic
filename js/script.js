window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    /* Скрывает все табы кроме 0го. */
    function hTC(ea) {
       for (let i = ea; i < tabContent.length; i++) {
           tabContent[i].classList.remove('show');
           tabContent[i].classList.add('hide');
       } 
    }
    hTC(1);

    /* показывает табы */
    function sTC(ae) {
        if(tabContent[ae].classList.contains('hide')) {
            tabContent[ae].classList.remove('hide');
            tabContent[ae].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for(let iterator = 0; iterator < tab.length; iterator++) {
                console.log(target == tab[iterator]);
                if (target == tab[iterator]) {
                    hTC(0);
                    sTC(iterator);
                    break;
                }
            }
        }
    }); 

    /* таймер */
    let deadline = '2020-10-14T12:40:00';
    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((time/1000) % 60),
        minutes = Math.floor((time/1000/60)%60),
        hours = Math.floor((time/(1000*60*60)));

        return {
            'total': time,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    /* делаем таймер живым */
    function setClock(aidi, endtime) {
        let timer = document.querySelector(`#${aidi}`),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let titi = getTimeRemaining(endtime);
            /* 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04:06:50) */
            if (titi.hours <10) {
                hours.textContent = '0' + titi.hours;
            } else {
                hours.textContent = titi.hours;
            }
            if (titi.minutes < 10) {
                minutes.textContent = '0' + titi.minutes;
            } else {
                minutes.textContent = titi.minutes;
            }
            
            if (titi.seconds < 10) {
                seconds.textContent = '0' + titi.seconds;
            } else {
                seconds.textContent = titi.seconds;
            }

            if (titi.total <= 0) {
                clearInterval(timerInterval);
                /* Если дата уже прошла, то выводится: 00:00:00 */
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
});