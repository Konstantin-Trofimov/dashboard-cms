document.addEventListener('DOMContentLoaded', () => {

    //============== переход на второстепенные страницы ==========

    document.querySelector('#plugLeft').addEventListener('click', () => {
        
    });

    document.querySelector('#plugRight').addEventListener('click', () => {
        
    });

    document.querySelector('#portraits').addEventListener('click', () => {
        
    });

    document.querySelector('#priority').addEventListener('click', () => {
        
    });

    document.querySelector('#all_branches').addEventListener('click', () => {
        
    });

    document.querySelector('#plan').addEventListener('click', () => {
        
    });

    document.querySelector('#staff').addEventListener('click', () => {
        
    });

    document.querySelector('#finance').addEventListener('click', () => {
        
    });

    document.querySelector('#science').addEventListener('click', (evt) => {
        let target = evt.target
       
        if (target.hasAttribute('data-btn')) {
            // выполнить ф-ию changeScienceDiagramData
            // ф-ия changeScienceDiagramData описана в ниже в блоке science 
            changeScienceDiagramData(target)
        } 
        else {
            // открыть страницу science
        }
    });

    document.querySelector('#international').addEventListener('click', () => {
        
    });

    document.querySelector('#vaccination').addEventListener('click', () => {
        
    });

    document.querySelector('#vaccination').addEventListener('click', () => {
        
    });

 

   
    //=================== служебные функции =====================

    function progressLength(progressBar, data) {
        let currentValue;

        if (data > 100) {
            currentValue = progressBar.length;
        } else {
            currentValue = Math.round((progressBar.length / 100) * data);
        }

        return currentValue; 
    }

    
    function setProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].style.fill = val;
        }
    }  

    
    const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;


    function numDataOutput(num) {
        let str = num.toString();
        let out;

        if (str.indexOf('.') !== -1) {
            str = num.toString().split('.');

            const intPart = str[0];
            const decimalPart = str[1];

            if (intPart.length <= 3) {
                out = intPart
            }
            else {
                out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
    
            out += '.' + decimalPart;
        }
        else {
            if (str.length <= 3) {
                out = str;
            }
            else {
                out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
        }    

        return out;
    } 




    //=================== центральная диаграмма =====================

    const performanceData = {
        absolute: 77,
        quality: 55
    }

    function performanceDiagram(absoluteValue, qualityValue, animationTime = 3200) {

        const absoluteProgrssbar = Array.from(document.querySelectorAll('.absolute-progrss-bar'));
        const qualityProgrssbar = Array.from(document.querySelectorAll('.quality-progrss-bar')).reverse();

        let absoluteLength = progressLength(absoluteProgrssbar, absoluteValue);
        let qualityLength = progressLength(qualityProgrssbar, qualityValue);

        setTimeout(() => {
            setProgressBar(absoluteProgrssbar, absoluteLength, '#FB9B2B');
            setProgressBar(qualityProgrssbar, qualityLength, '#217AFF');
        }, animationTime)
        
        function progressLength(progressBar, data) {
            let currentValue;

            if (data > 100) {
                currentValue = progressBar.length;
            } else {
                currentValue = Math.round((progressBar.length / 100) * data);
            }

            return currentValue; 
        }

        function setProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].style.fill = val;
            }
        }  

        document.querySelector('.performance-diagram-quality-value').textContent = qualityValue + '%';
        document.querySelector('.performance-diagram-absolute-value').textContent = absoluteValue  + '%';

    }

    performanceDiagram(performanceData.absolute, performanceData.quality);



    //=================== центральный блок данных =====================

    const generalData = {
        students:  4844,
        rate: 5,
        teachers: 1279,
        scientists: 347,
        score: 4.2,
        contracts: 111,
        progress: 39.62,
        publications: 1078,
        cash: 3.45,
        budget: 4.08 
    }
 
    function  generalDataOutput(data) {
        for (let key in data) {
            document.querySelector(`.circle-block__value_${key}`).textContent = data[key];
        }
    }

    generalDataOutput(generalData);



    //=================== финансы =====================

    const financeData = {
        date: '15.01.2021',
        total: 600000000,
        budgetResources: 1092045473,
        otherResources: 1572394226,
        wageFund: 2664439699,
        landTax: 65185520,
        propertyTax: 75229727
    }


 

    wageFundDiagramData = Object.values(financeData).slice(2, 4);
    сostsDiagramData = Object.values(financeData).slice(4, 7).reverse();
    
    
    class Diagram  {
        constructor (title, data, colors, parentSelector, isDecorated = false) {
            this.parentSelector = document.querySelector(`.${ parentSelector }`),
            this.segmentColors  = colors,
            this.isDecorated    = isDecorated,
            this.title          = title,
            this.data           = data,
            this.fill           = '#112054',
            this.diff(),
            this.offset(),
            this.sector(),
            this.insDiagramSectors(),
            this.diagrammSegmentConfig()
        }
    
        get diagramValues () { 
            const sumValues = this.data.reduce((a, b) => a + b);
    
            let array = this.data.map(i => Math.round( i / sumValues * 100));
            let max = Math.max(...array);
           
            if (this.isDecorated) {
                array = array.map(i => i < 5 ? i + 10 : i)
            }
    
            const sumRatio = array.reduce((a, b) => a + b);
            const diff = sumRatio - 100;
    
            return array.map(i => i === max ? i - diff : i);
        }
    
        get internalEclipseColor () { return this.segmentColors[this.segmentColors.length - 1] }
    
        diff (val) { return 100 - val }
    
        offset (index) { 
            const start = 25;
            let location = 0;
            let sum = 0;
          
            this.diagramValues.map((_, i, array) => {
                if (i == index && i !== 0) {
                    for (let j = 0; j < i; j++) {
                        sum += array[j];
                    }
                    sum = 100 - sum;
                }
            })    
            location = start + sum;
           
            return location;  
        }
    
        diagrammSegmentConfig (r = 15.91549430918954) { return `class="donut-segment" cx="21" cy="21" r="${r}"` }
    
        sector (item, index) { 
            const strokeWidth = index == 0 ? 10 : index == this.diagramValues.length - 1 ? 5 : 7; 
            return `<circle  ${this.diagrammSegmentConfig()} fill="${this.fill}" stroke="${this.segmentColors[index]}" stroke-width="${strokeWidth}" stroke-dasharray="${item} ${this.diff(item)}" stroke-dashoffset="${this.offset(index)}"></circle>`; 
        }
    
        insDiagramSectors() { return this.diagramValues.map((i, index) => this.sector(i, index)).join('') }
      
    
        render () { 
            const diagram = document.createElement('div');
            diagram.classList.add('diagram');
            diagram.innerHTML = `
    
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                    ${this.insDiagramSectors()}
                    <circle ${this.diagrammSegmentConfig(12)} fill="${this.fill}" stroke="${this.internalEclipseColor}" stroke-width="0.3"></circle>
                </svg>
    
                <div class="finance__diagram-text">${this.title}</div>
            `;
            
            this.parentSelector.append(diagram);
            
            
        }
    
    }
    
    new Diagram('Фонд оплаты труда', wageFundDiagramData, ['#2BD6FB', '#217AFF'], 'finance__diagram_wage-fund', ).render()
    new Diagram('Затраты', сostsDiagramData, ['#FFC01D',  '#FB9B2B', '#FD6A6A'], 'finance__diagram_сosts', true).render()

    function financeDataOutput(data) {
        insertToPage('finance__total-value', numDataOutput(data.total));
        
        insertToPage('finance__diagram-value_budget-resources', numDataOutput(data.budgetResources));
        insertToPage('finance__diagram-value_other-resources', numDataOutput(data.otherResources));
        insertToPage('finance__diagram-value_wage-fund', numDataOutput(data.wageFund));
        insertToPage('finance__diagram-value_land-tax', numDataOutput(data.landTax));
        insertToPage('finance__diagram-value_property-tax', numDataOutput(data.propertyTax));
    }

    financeDataOutput(financeData);




    //=========== международная деятельность =============


    const internationalData = {
        date: '07.10.2021',
        foreignStudents: 1224,
        nonresidentStudents: 6556,
        partners: 'XX',
    }


    function internationalDataOutput(data) {
        insertToPage('international__value_foreign-students', numDataOutput(data.foreignStudents));
        insertToPage('international__value_nonresident-students', numDataOutput(data.nonresidentStudents));
        insertToPage('international__value_partners', data.partners);
    }

    internationalDataOutput(internationalData);



    //=================== вакцинация =====================

    const vaccinationData = {
        date: '01.10.2021',
        total: 3345,
        vaccinated: 2457,
        unvaccinated: 887,
        recovered: 1050,
        unsuitable: 232,
        sick: 108
    }

    function vaccinationDataOutput(data) {

        function sumData() {
            const result = [data.vaccinated, data.unvaccinated, data.recovered, data.sick, data.unsuitable];
            const sum = result.reduce((a, b) => a + b)

            return sum;
        } 

        const categoryRatio = category => Math.ceil((category / sumData()) * 100);

        const setLine = (value, color) => {
            return  `
                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg class="vaccination__graphiс-data" width="${categoryRatio(value + 1)}" x="0" y="0" >
                    <rect class="vaccination__graphiс-row" fill=${color} x="0" y="0" transform="translate(-5)"/>
                    <text class="vaccination__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">
                        ${value}
                    </text>
                </svg>
            </svg>`
        }
                
        function output (data) {
            const element = document.createElement('div');

            element.classList.add('vaccination__graphiс');

            element.innerHTML = `

                ${setLine(data.vaccinated,'#217AFF')}
                ${setLine(data.unvaccinated, '#6C38FF')}
                ${setLine(data.recovered, '#A7EB17')}
                ${setLine(data.unsuitable, '#FB9B2B' )}
                ${setLine(data.sick, '#FD6A6A')}
           
            `;

            document.querySelector('.vaccination__diagram-wrap').append(element);
        }

        output(data);
        document.querySelector('.vaccination__diagram-value').textContent = data.total;
    }

    vaccinationDataOutput(vaccinationData);



    //=================== наука =====================

    const scienceData = {
        date: '21.11.2021',
        plan: {
            currentPlan: 50000.6,
            currentReceipts: 199583.4,
            expectedReceipts: 233203.6,
            progress: 80.62 
        },
        publications: {
            scopus: {
                scopusTotal: 694,
                q1q2Total: 113,
                scopusInSixMonths: [
                    {
                        month: 'Май',
                        value: 151
                    },
                    {
                        month: 'Июнь',
                        value: 112
                    },
                    {
                        month: 'Июль',
                        value: 70
                    },
                    {
                        month: 'Август',
                        value: 94
                    },
                    {
                        month: 'Сентябрь',
                        value: 59
                    },
                    {
                        month: 'Октябрь',
                        value: 41
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 25
                    },
                    {
                        month: 'Июнь',
                        value: 59
                    },
                    {
                        month: 'Июль',
                        value: 28
                    },
                    {
                        month: 'Август',
                        value: 45
                    },
                    {
                        month: 'Сентябрь',
                        value: 33
                    },
                    {
                        month: 'Октябрь',
                        value: 13
                    },
                ],
            },
            wos: {
                wosTotal: 407,
                q1q2Total: 113,
                wosInSixMonths: [
                    {
                        month: 'Май',
                        value: 55
                    },
                    {
                        month: 'Июнь',
                        value: 32
                    },
                    {
                        month: 'Июль',
                        value: 61
                    },
                    {
                        month: 'Август',
                        value: 68
                    },
                    {
                        month: 'Сентябрь',
                        value: 44
                    },
                    {
                        month: 'Октябрь',
                        value: 44
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 18
                    },
                    {
                        month: 'Июнь',
                        value: 7
                    },
                    {
                        month: 'Июль',
                        value: 6
                    },
                    {
                        month: 'Август',
                        value: 8
                    },
                    {
                        month: 'Сентябрь',
                        value: 6
                    },
                    {
                        month: 'Октябрь',
                        value: 17
                    },
                ]
            }
            
        }
        
    }

    function scienceProgressbarDataOutput(data) {
        const progress = ((data.currentReceipts / data.currentPlan) * 100).toFixed(2);

        const scienceProgressbar = Array.from(document.querySelectorAll('.science__plan-progressbar-item'));
        const scienceProgressbarLength = progressLength(scienceProgressbar, progress);
        
        function setProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].setAttribute('fill-opacity', val)
            }
        } 

        setProgressBar(scienceProgressbar, scienceProgressbarLength, 1)

        insertToPage('science__plan-ratio', progress + '%');
        insertToPage('science__plan-value', numDataOutput(data.currentPlan) );
        insertToPage('science__legend-value_current-receipts', numDataOutput(data.currentReceipts));
        insertToPage('science__legend-value_expected-receipts', numDataOutput(data.expectedReceipts));
    }

    scienceProgressbarDataOutput(scienceData.plan)

        
        

    function publicationsDataOutput(data, category, color = '#FB9B2B') {
        const diagram = Array.from(document.querySelectorAll(`.wos rect`));

        const max = Math.max(...data[category]);

        diagram.map((i, index) => {
            let value = (data[category][index] / max) * 100;

            i.setAttribute('fill', color)
            i.setAttribute('height', `${value}%`);
            i.setAttribute('y', `${100 - value}%`);
        });

        document.querySelector('.science__diagram-value').textContent = max;
    }

    function getPublicationsData(data) {
        const getArray = data => data.map(i => i.value);

        const publications = {};

        publications.wos = getArray(data.wos.wosInSixMonths);
        publications.wosQ1Q2 = getArray(data.wos.q1q2InSixMonths);
        publications.scopus = getArray(data.scopus.scopusInSixMonths);
        publications.scopusQ1Q2 = getArray(data.scopus.q1q2InSixMonths);

        return publications;
    }

    const publicationsData = getPublicationsData(scienceData.publications)

    function changeScienceDiagramData(element) {
        const category = element.getAttribute('data-btn');

        const listItems = document.querySelectorAll('.science__list-item');

        let color = ''

        switch(category) {
            case 'wos':
                color = '#FB9B2B'
                break;
            case 'wosQ1Q2':
                color = '#FFDD85'
                break;
            case 'scopus':
                color = '#217AFF'
                break;
            case 'scopusQ1Q2':
                color = '#44BCFF'
                break;    
    
        }

        for (let i of listItems) {
            i.classList.remove('science__list-item_active')
            if (i.getAttribute('data-btn') == category) {
               i.classList.add('science__list-item_active')
            }
        }

        publicationsDataOutput(publicationsData, category, color);
    }

    
    publicationsDataOutput(publicationsData, 'wos');
    


// ============================== студенты ===========================================


    const staffData = {
        date: '2.10.2021',
        employment: 91,
        load: {
            hours: 950537,
            ratio: 6.7
        },
        categories: {
            occupation: {
                fullTime: 30164,
                distance: 5634,
                extramural: 7061
            },
            payment: {
                public: 9831,
                nonBudget: 33928
            },
            groups: {
                bachelors: 1214535,
                specialists: 2421360,
                magisters: 6422663
            }
            
        }

    }

    function studentsEmploymentDataOutput(data) {

        const studentsEmploymentProgressbar = Array.from(document.querySelectorAll('.students__employment-diagram path')).reverse();

        const studentsEmploymentProgressLength = progressLength(studentsEmploymentProgressbar, data);

        setProgressBar(studentsEmploymentProgressbar, studentsEmploymentProgressLength, '#FB9B2B');

        insertToPage('students__employment-value', data + '%')
    }

    studentsEmploymentDataOutput(staffData.employment)


    function teachingLoadDataOutput(data) {
        const teachingLoadProgressbar = Array.from(document.querySelectorAll('.students__teaching-load-progressbar span'));

        const teachingLoadProgressLength = progressLength(teachingLoadProgressbar, data.ratio);

        function setProgressBarteachingLoad (progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].style.backgroundColor = val;
            }
        }  

        setProgressBarteachingLoad(teachingLoadProgressbar, teachingLoadProgressLength, '#1A5FC7');
        insertToPage('spanstudents__teaching-load-value', data.hours);
        insertToPage('students__teaching-load-ratio', data.ratio + '%');
    }

    teachingLoadDataOutput(staffData.load);



    function studentsCategoryDataOutput(data) {
        const graphics = Array.from(document.querySelectorAll('.students__graphic svg'));


        function sumData(...data) {
            const result = data;
            const sum = result.reduce((a, b) => a + b);

            return sum;
        } 

        const categoryRatio = (category, sum) => Math.ceil((category / sum) * 100);

        const occupationSum = sumData(data.occupation.fullTime, data.occupation.distance, data.occupation.extramural);
        const paymentSum = sumData(data.payment.public, data.payment.nonBudget);

        graphics[0].setAttribute('width', categoryRatio(data.occupation.fullTime, occupationSum));
        graphics[1].setAttribute('width', categoryRatio(data.occupation.distance, occupationSum));
        graphics[2].setAttribute('width', categoryRatio(data.occupation.extramural, occupationSum));
        graphics[3].setAttribute('width', categoryRatio(data.payment.public, paymentSum));
        graphics[4].setAttribute('width', categoryRatio(data.payment.nonBudget, paymentSum));

        insertToPage('students__graphic-value_fullTime', numDataOutput(data.occupation.fullTime));
        insertToPage('students__graphic-value_distance', numDataOutput(data.occupation.distance));
        insertToPage('students__graphic-value_extramural', numDataOutput(data.occupation.extramural));
        insertToPage('students__graphic-value_public', numDataOutput(data.payment.public));
        insertToPage('students__graphic-value_nonBudget', numDataOutput(data.payment.nonBudget));
    }

    studentsCategoryDataOutput(staffData.categories)



    // ======================= календарь ===============================


    function calendar(dateOfUpdate, isDouble, ...selectors) {
        const array = dateOfUpdate.toString().split('.');
        
        const date = new Date();
        const currentMonth = +array[1];
        const year = new Date().getFullYear();
        const minOpacity = 0.2;
        const maxOpacity = 1;
        const monthProgressBar = Array.from(document.querySelectorAll(`.${selectors[0]} path`));
        let yearProgressBar = [];


        const addZeroBeforeValue = val => val < 10 ? '0' + val : val;

        const month = () => addZeroBeforeValue(currentMonth);
        
        const day = () => addZeroBeforeValue(+array[0]);
        
        const yearRatio = () => {
            const dayFirst = new Date(date.getFullYear(), 0, 0);
            const diff = new Date() - dayFirst;
            const day = 1000 * 60 * 60 * 24;
            const dayNum = Math.floor(diff / day);
            const ratio =  Math.floor((dayNum / 365) * 100); 
            
            return ratio;
        } 

        function setCalendarProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].setAttribute('fill-opacity', val);
            }
        }

        function setMonthProgressBar() {
            const dayLast = new Date(year, currentMonth, 0).getDate();
            const ratio = 15 / dayLast;
            const progressLength =  Math.round(+array[0] * ratio); 
            
            setCalendarProgressBar(monthProgressBar, progressLength, maxOpacity);
        }

        if (isDouble) {
            yearProgressBar = Array.from(document.querySelectorAll(`.${selectors[1]} path`));

            function setYearProgressBar() {
                const progressLength = Math.round((100 - yearRatio()) * 0.15);
        
                setCalendarProgressBar(yearProgressBar, progressLength, minOpacity);
            }

            setCalendarProgressBar(yearProgressBar, 15, maxOpacity);
            insertToPage(`${selectors[1]}-value`, `${yearRatio()}% год`);
            setYearProgressBar();
        }

        setCalendarProgressBar(monthProgressBar, 15, minOpacity);
        setMonthProgressBar();
        insertToPage(`${selectors[0]}-value`, `${day()}.${month()}.${year}`);
    }

    calendar(financeData.date , true, 'calendar__month-progress-bar__finance', 'calendar__year-progress-bar__finance');
    calendar(scienceData.date, true,'calendar__month-progress-bar__science', 'calendar__year-progress-bar__science');
    calendar( vaccinationData.date , true,'calendar__month-progress-bar__vaccination', 'calendar__year-progress-bar__vaccination');
    calendar( internationalData.date , true,'calendar__month-progress-bar__international', 'calendar__year-progress-bar__international');
    calendar(staffData.date , false, 'calendar__month-progress-bar__students');

	

    //================== глобус =========================

    function globus() {
        let myearth;
        let sprites = [];

        myearth = new Earth("myearth", {
        location: {
            lat: 20,
            lng: 20,
        },
        light: "none",
            mapImage: "../assets/img/main/hologram-map.svg",
            transparent: true,
            autoRotate: true,
            autoRotateSpeed: 5,
            autoRotateDelay: 100,
            autoRotateStart: 1000,
        });

        myearth.addEventListener("ready", function () {
        this.startAutoRotate();

        // connections

        var line = {
            color: "#009CFF",
            opacity: 0.15,
            hairline: true,
            offset: -0.5,
        };

        for (var i in connections) {
            line.locations = [
            {
                lat: connections[i][0],
                lng: connections[i][1],
            },
            {
                lat: connections[i][2],
                lng: connections[i][3],
            },
            ];
            this.addLine(line);
        }

        // add 8 shine sprites

        for (var i = 0; i < 8; i++) {
            sprites[i] = this.addSprite({
            image: "../assets/img/main/hologram-shine.svg",
            scale: 1,
            offset: -0.5,
            opacity: 1,
            });
            pulse(i);
        }
        });

        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
        }

        function pulse(index) {
        var random_location =
            connections[getRandomInt(0, connections.length - 1)];
        sprites[index].location = {
            lat: random_location[0],
            lng: random_location[1],
        };

        sprites[index].animate("scale", 0.5, {
            duration: 320,
            complete: function () {
            this.animate("scale", 0.2, {
                duration: 320,
                complete: function () {
                setTimeout(function () {
                    pulse(index);
                }, getRandomInt(100, 400));
                },
            });
            },
        });
        }

        var connections = [
        [59.651901245117, 17.918600082397, 41.8002778, 12.2388889],
        [59.651901245117, 17.918600082397, 51.4706, -0.461941],

        [13.681099891662598, 100.74700164794922, -6.1255698204, 106.65599823],
        [
            13.681099891662598, 100.74700164794922, 28.566499710083008,
            77.10310363769531,
        ],

        [30.12190055847168, 31.40559959411621, -1.31923997402, 36.9277992249],
        [30.12190055847168, 31.40559959411621, 25.2527999878, 55.3643989563],
        [30.12190055847168, 31.40559959411621, 41.8002778, 12.2388889],

        [
            28.566499710083008, 77.10310363769531, 7.180759906768799,
            79.88410186767578,
        ],
        [
            28.566499710083008, 77.10310363769531, 40.080101013183594,
            116.58499908447266,
        ],
        [28.566499710083008, 77.10310363769531, 25.2527999878, 55.3643989563],

        [-33.9648017883, 18.6016998291, -1.31923997402, 36.9277992249],

        [-1.31923997402, 36.9277992249, 25.2527999878, 55.3643989563],

        [41.8002778, 12.2388889, 51.4706, -0.461941],
        [41.8002778, 12.2388889, 40.471926, -3.56264],

        [19.4363, -99.072098, 25.79319953918457, -80.29060363769531],
        [19.4363, -99.072098, 33.94250107, -118.4079971],
        [19.4363, -99.072098, -12.0219, -77.114304],

        [-12.0219, -77.114304, -33.393001556396484, -70.78579711914062],
        [-12.0219, -77.114304, -34.8222, -58.5358],
        [-12.0219, -77.114304, -22.910499572799996, -43.1631011963],

        [-34.8222, -58.5358, -33.393001556396484, -70.78579711914062],
        [-34.8222, -58.5358, -22.910499572799996, -43.1631011963],

        [22.3089008331, 113.915000916, 13.681099891662598, 100.74700164794922],
        [22.3089008331, 113.915000916, 40.080101013183594, 116.58499908447266],
        [22.3089008331, 113.915000916, 31.143400192260742, 121.80500030517578],

        [35.552299, 139.779999, 40.080101013183594, 116.58499908447266],
        [35.552299, 139.779999, 31.143400192260742, 121.80500030517578],

        [33.94250107, -118.4079971, 40.63980103, -73.77890015],
        [33.94250107, -118.4079971, 25.79319953918457, -80.29060363769531],
        [33.94250107, -118.4079971, 49.193901062, -123.183998108],

        [40.63980103, -73.77890015, 25.79319953918457, -80.29060363769531],
        [40.63980103, -73.77890015, 51.4706, -0.461941],

        [51.4706, -0.461941, 40.471926, -3.56264],

        [
            40.080101013183594, 116.58499908447266, 31.143400192260742,
            121.80500030517578,
        ],

        [-33.94609832763672, 151.177001953125, -41.3272018433, 174.804992676],
        [-33.94609832763672, 151.177001953125, -6.1255698204, 106.65599823],

        [55.5914993286, 37.2615013123, 59.651901245117, 17.918600082397],
        [55.5914993286, 37.2615013123, 41.8002778, 12.2388889],
        [55.5914993286, 37.2615013123, 40.080101013183594, 116.58499908447266],
        [55.5914993286, 37.2615013123, 25.2527999878, 55.3643989563],
        ];
    }

    globus();

    //====================== анимация кнопок центрального блока ===================

    
    const allBranchesBtn = document.querySelector('.circle-block__first-clicked-aria');
    const staffBtn = document.querySelector('.circle-block__third-clicked-aria');
    const planBtn = document.querySelector('.circle-block__fifth-clicked-aria');

    const allBranchesBg = document.querySelector('.circle-first__icon');
    const staffBg = document.querySelector('.staff-bg');
    const planBg = document.querySelector('.plan-bg');


    function animateButtonHover(clickedElement, bgElement, className) {
        clickedElement.addEventListener('mouseover', () => {
            bgElement.classList.add(className);
        });
    
        clickedElement.addEventListener('mouseout', () => {
            bgElement.classList.remove(className);
        });
    }

    animateButtonHover(staffBtn, staffBg, 'max-opacity');
    animateButtonHover(allBranchesBtn, allBranchesBg, 'scale');
    animateButtonHover(planBtn, planBg, 'white-stroke');


    // ========  изменение окончании слова "человек(ка)", блок вакцинация =========

    function setVaccinationtDescription(data) {
        const description = document.querySelector('.vaccination__diagram-descr span');

        const getlastNum = () => {
            let array = data.toString().split('');

            return +array[array.length - 1]
        } 

        const lastNum = getlastNum()

        let str = 'челове';

        if (lastNum === 2 || lastNum === 3 || lastNum === 4) {
            str += 'ка'
        } 
        else {
            str += 'к'
        }

        description.textContent = str;
    }

    setVaccinationtDescription(vaccinationData.total)



    //  ========= данные для легенды центральной диаграммы в блоке студенты ========

    insertToPage('students__diagram-info__value_bachelors', numDataOutput(staffData.categories.groups.bachelors));
    insertToPage('students__diagram-info__value_specialists', numDataOutput(staffData.categories.groups.specialists));
    insertToPage('students__diagram-info__value_magisters', numDataOutput(staffData.categories.groups.magisters));



    // =================== отображение месяца ================================

    function setMonth(date, selector) {
        const array = date.split('.');
        const month = array[1]
        let str = ''

        switch (month) {
            case '01':
              str = 'январь'
              break;
            case '02':
              str = 'февраль'
              break;
            case '03':
              str = 'март'
              break;
            case '04':
              str = 'апрель'
              break;
            case '05':
              str = 'май'
              break;
            case '06':
              str = 'июнь'
              break;
            case '07':
              str = 'июль'
              break;
            case '08':
              str = 'август'
              break;
            case '09':
              str = 'сентябрь'
              break;
            case '10':
              str = 'октябрь'
              break;
            case '11':
              str = 'ноябрь'
              break;
            case '12':
              str = 'декабрь'
              break;
            default :   
              str = '';
              break;
        }

        insertToPage(selector, str)
    }

    setMonth(staffData.date, 'students__diagram-month-text');  
    setMonth(scienceData.date, 'science__diagram-month-text');  

})


