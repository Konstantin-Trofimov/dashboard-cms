document.addEventListener('DOMContentLoaded', () => {

    const serverData = [ // Server data exemple.
        {
            graduationPPS: 76.7,
            graduationPPSMain: 77.3,
            graduationNR: 56.2,
            graduationNRMain: 43.5
        }, 
        {
            date: '07.10.2021',
            totalStaff: 3293,
            teachingStaff: 1273,
            supervisors: 317,
            managementStaff: 629,
            supportStaff: 480,
            serviceStaff: 246,
            professionalEducationAndLyceum: 349
        }
    ];


    // ф-ия для копирования данных в служебные объекты.

    const getObj = (newObj, data, arrNum) => {
        if (data[arrNum]) {
            for (let i in  data[arrNum]) {
                newObj[i] = data[arrNum][i];
            }
        }
    }

    // вспомогательная ф-ия для вывода данных.

    const insertToPage = (className, data) => document.querySelector(`.${className}`).textContent = data;

    // ф-ця закрашивающая элементы.

    function setProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].style.fill = val;
        }
    } 

    // копирование данных в служебные объекты.

    function staf(data) {
        // Инициализация диаграмм. 

        const graduationPPSProgrssbar = Array.from(document.querySelectorAll('.staff__info-progressbar_pps'));
        const graduationPPSMainProgrssbar = Array.from(document.querySelectorAll('.staff__info-progressbar_pps-main'));
        const graduationNRProgrssbar = Array.from(document.querySelectorAll('.staff__info-progressbar_nr'));
        const graduationNRMainProgrssbar = Array.from(document.querySelectorAll('.staff__info-progressbar_nr-main'));

        // Инициализация служебных переменных. 

        let graduationPPSProgressLength, graduationPPSPMainrogressLength, graduationNRProgressLength, graduationNRMainProgressLength;

        // Инициализация служебных объектов. 

        let graduation = {};
        let staff = {};

        getObj(graduation, data, 0);
        getObj(staff, data, 1);
    

        // ************ Логика для блока staff__info. *************

        // ф-ця для получения кол-ва элементов необходимых к закраске.

        function progressLength(progressBar, data) {
            let currentValue;

            if (data > 100) {
                currentValue = progressBar.length;
            } else {
                currentValue = Math.round((progressBar.length / 100) * data);
            }

            return currentValue; 
        }

        

        // получаем кол-во элементов диаграммы, которое необходимо закрасить.
        
        graduationPPSProgressLength = progressLength(graduationPPSProgrssbar, graduation.graduationPPS);
        graduationPPSPMainrogressLength = progressLength(graduationPPSProgrssbar, graduation.graduationPPSMain);
        graduationNRProgressLength = progressLength(graduationPPSProgrssbar, graduation.graduationNR);
        graduationNRMainProgressLength = progressLength(graduationNRMainProgrssbar, graduation.graduationNRMain);

        // закрашиваем диаграммы.

        setProgressBar(graduationPPSProgrssbar, graduationPPSProgressLength, '#FB9B2B');
        setProgressBar(graduationPPSMainProgrssbar, graduationPPSPMainrogressLength, '#FB9B2B');
        setProgressBar(graduationNRProgrssbar, graduationNRProgressLength, '#217AFF');
        setProgressBar(graduationNRMainProgrssbar, graduationNRMainProgressLength, '#217AFF');

        // выводим данные на страницу.
        
        insertToPage('staff__info-value_pps', `${graduation.graduationPPS}%`);
        insertToPage('staff__info-value_pps-main', `${graduation.graduationPPSMain}%`);
        insertToPage('staff__info-value_nr', `${graduation.graduationNR}%`);
        insertToPage('staff__info-value_nr-main', `${graduation.graduationNRMain}%`);


        
        // ************ Логика для блока staff__data. *************

        // ф-ия для вывода данных в процентном отношении.

        function staffRatio(category) {
            return Math.ceil((category / staff.totalStaff) * 100);
        }

        // ф-ия для установки значения длинны(ширины) для графика.
        
        function setStaffGraphiс(className, category) {
            document.querySelector(`.${className}`).setAttribute('width', `${staffRatio(category) + 5}%`)
        }

        // выводим данные на страницу.

        insertToPage('staff__diagramm-value', staff.totalStaff);
        insertToPage('staff__data-value_teaching-staff', staff.teachingStaff);
        insertToPage('staff__data-value_supervisors', staff.supervisors);
        insertToPage('staff__data-value_management-staff', staff.managementStaff);
        insertToPage('staff__data-value_support-staff', staff.supportStaff);
        insertToPage('staff__data-value_service-staff', staff.serviceStaff);
        insertToPage('staff__data-value_professional-education-and-lyceum', staff.professionalEducationAndLyceum);

        // устанавливаем графики.
        
        setStaffGraphiс('staff__graphiс-data_teaching-staff', staff.teachingStaff);
        setStaffGraphiс('staff__graphiс-data_supervisors', staff.supervisors);
        setStaffGraphiс('staff__graphiс-data_management-staff', staff.managementStaff);
        setStaffGraphiс('staff__graphiс-data_support-staff', staff.supportStaff);
        setStaffGraphiс('staff__graphiс-data_service-staff', staff.serviceStaff);
        setStaffGraphiс('staff__graphiс-data_professional-education-and-lyceum', staff.professionalEducationAndLyceum);


        function setStaffDescription(data) {
            const description = document.querySelector('.staff__diagramm-descr');

            const getlastNum = () => {
                let array = data.toString().split('');

                return +array[array.length - 1]
            } 

            const lastNum = getlastNum()

            let str = 'сотрудни';
            if (lastNum === 1) {
                str += 'к';
            }
            else if  (lastNum === 2 || lastNum === 3 || lastNum === 4) {
                str += 'ка';
            } 
            else {
                str += 'ков';
            }
            
            description.textContent = str;
        }

        setStaffDescription(staff.totalStaff);

        insertToPage('staff__diagramm-date-value', staff.date);
    }

    staf(serverData);
});

