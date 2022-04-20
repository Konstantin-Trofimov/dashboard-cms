document.addEventListener('DOMContentLoaded', () => {

    //============== переход на второстепенные страницы ==========
    
    document.querySelector('.footer__btns').addEventListener('click', () => {

    });

    document.querySelector('#plugLeft').addEventListener('click', () => {
       
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
            clearTimeout(tr)
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

    document.querySelector('#covid_click').addEventListener('click', () => {
        // открыть страницу table
    })

   
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

    const insertToPageAll = (className, data) => document.querySelectorAll(`.${className}`).forEach(i => i.innerHTML = data);


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
    
    function performanceDiagram(absoluteValue, animationTime = 6300) {

        const absoluteProgrssbar = Array.from(document.querySelectorAll('.absolute-progrss-bar path'));

        let absoluteLength = progressLength(absoluteProgrssbar, absoluteValue);
       
        setTimeout(() => {
            setProgressBar(absoluteProgrssbar, absoluteLength, '#FB9B2B');
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

        document.querySelector('.performance-diagram-absolute-value').textContent = numDataOutput(absoluteValue) + '%';
    }

   

    performanceDiagram(performanceData.absolute);

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
        date: '2021-10-02',
        total: 600000000,
        budgetResources: 200000000,
        otherResources: 200000000,
        wageFund: 200000000,
        landTax: 1000000000,
        propertyTax: '100000000'
    }


 

    wageFundDiagramData = Object.values(financeData).slice(2, 4);
    сostsDiagramData = Object.values(financeData).slice(4, 7).reverse();

    const getInt = (array)  => array.map( i => parseInt(i))
    
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
                array = array.map(i => {
                    if (i === 0) {
                        return 0
                    } 
                    else if (i < 5) {
                        return 5
                    }
                    else {
                        return i
                    }
                });
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
    
    new Diagram('Фонд оплаты труда', getInt(wageFundDiagramData), ['#2BD6FB', '#217AFF'], 'finance__diagram_wage-fund', ).render()
    new Diagram('Затраты', getInt(сostsDiagramData), ['#FFC01D',  '#FB9B2B', '#FD6A6A'], 'finance__diagram_сosts', true).render()

    function financeDataOutput(data) {
        insertToPage('finance__total-value', numDataOutput(data.total));
        insertToPageAll('finance__diagram-value_budget-resources', numDataOutput(data.budgetResources));
        insertToPageAll('finance__diagram-value_other-resources', numDataOutput(data.otherResources));
        insertToPageAll('finance__diagram-value_wage-fund', numDataOutput(data.wageFund));
        insertToPageAll('finance__diagram-value_land-tax', numDataOutput(data.landTax));
        insertToPageAll('finance__diagram-value_property-tax', numDataOutput(data.propertyTax));
    }

    financeDataOutput(financeData);

    function setSpace(elem) {
        let strLength = elem.textContent.length;

        let position = 'right'

        if (elem.classList.contains('finance__diagram-value_wage-fund') || elem.classList.contains('finance__diagram-value_other-resources')) {
            position = 'left'
        } 

        if (strLength === 1) {
            elem.style[position] = '1.6vw'
        }
    }

    document.querySelectorAll('.finance__diagram-value').forEach(i => setSpace(i))



    //=========== международная деятельность =============


    const internationalData = {
        date: '2021-01-31',
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
        date: '2021-10-02',
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
        date: '2021-10-02',
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

    let publicationsDiagramCounter = 0

    let publicationsDiagramItems = ['wos', 'wosQ1Q2', 'scopus', 'scopusQ1Q2'] 
    let publicationsDiagramColors = ['#FB9B2B', '#FFDD85', '#217AFF', '#44BCFF']

    let tr

    function publicationsDiagramAnimation() {
        tr = setTimeout(()=> {
            if (publicationsDiagramCounter <= 3) {
                document.querySelectorAll('.science__list-item').forEach(i => {
                    i.classList.remove('science__list-item_active')
                })
                document.querySelectorAll('.science__list-item')[publicationsDiagramCounter].classList.add('science__list-item_active')
                publicationsDataOutput(publicationsData, publicationsDiagramItems[publicationsDiagramCounter], publicationsDiagramColors[publicationsDiagramCounter]);
                publicationsDiagramCounter++
            } 
            else {
                
                publicationsDiagramCounter = 0
            }
            
            publicationsDiagramAnimation()
        }, 3000)  
    }
    
    publicationsDiagramAnimation()

// ============================== студенты ===========================================


    const staffData = {
        date: '2021-12-01',
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

    function calendar () {

        const template = `
          <div class="calendar_science">
            <div class="calendar-unit">
              <div class="value"></div>
              <div class="calendar__month-progress-bar">
                <svg class="calendar__month-progress-bar__science" width="100%" height="100%" viewBox="0 0 100 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 0H0.5L11.5 12H15.5L4.5 0Z" fill="#40394D" />
                  <path d="M10.5 0H6.5L17.5 12H21.5L10.5 0Z" fill="#40394D" />
                  <path d="M16.5 0H12.5L23.5 12H27.5L16.5 0Z" fill="#40394D" />
                  <path d="M22.5 0H18.5L29.5 12H33.5L22.5 0Z" fill="#40394D" />
                  <path d="M28.5 0H24.5L35.5 12H39.5L28.5 0Z" fill="#40394D" />
                  <path d="M34.5 0H30.5L41.5 12H45.5L34.5 0Z" fill="#40394D" />
                  <path d="M40.5 0H36.5L47.5 12H51.5L40.5 0Z" fill="#40394D" />
                  <path d="M46.5 0H42.5L53.5 12H57.5L46.5 0Z" fill="#40394D" />
                  <path d="M52.5 0H48.5L59.5 12H63.5L52.5 0Z" fill="#40394D" />
                  <path d="M58.5 0H54.5L65.5 12H69.5L58.5 0Z" fill="#40394D" />
                  <path d="M64.5 0H60.5L71.5 12H75.5L64.5 0Z" fill="#40394D" />
                  <path d="M70.5 0H66.5L77.5 12H81.5L70.5 0Z" fill="#40394D" />
                  <path d="M76.5 0H72.5L83.5 12H87.5L76.5 0Z" fill="#40394D" />
                  <path d="M82.5 0H78.5L89.5 12H93.5L82.5 0Z" fill="#40394D" />
                  <path d="M88.5 0H84.5L95.5 12H99.5L88.5 0Z" fill="#40394D" />
                </svg>
              </div>
            </div>
          </div>
        `
      
        const style = `
          .calendar-unit {display: block;block;margin-top: 0.5vw;}
          .right {text-align: right;}
          .right svg {transform: scaleX(-1);}
          .value {
            font-family: 'Oswald', sans-serif;
            /* text-align: left; */
            font-weight: 400;
            color: #FB9B2B;
            font-size: 0.6vw;
            line-height: 0.6vw;
          }
        `
      
        class HTMLElementExtended extends HTMLElement {
          constructor(html, style, ...mixins) {
            self = super();
            this.constructor.setMixins(mixins);
            const template = this.constructor.setTemplate(html, style);
            this.$ = this.constructor.setShadowDOM(template);
          }
      
          static setMixins (mixins) {
            Object.assign(this.prototype, ...mixins);
          }
      
          static setTemplate (html, style) {
            const template = document.createElement('template');
            template.innerHTML = html + `<style>${style}</style>`;
            
            return template;
          }
          
          static setShadowDOM (template) {
            const shadowRoot = self.attachShadow({ mode: 'open' });;
            shadowRoot.appendChild(template.content.cloneNode(true));;
            return shadowRoot;;
          }
        }
      
        window.HTMLElementExtended = HTMLElementExtended
      
        class Calendar extends HTMLElementExtended {
          constructor() {
            super(template, style);
            this.render();
          }
      
          set currentDate (str) {
            this.date = new Date(str);
          }
            
          get data () { return this.parentNode.getAttribute('data-date'); }
          get bar () { return this.$.querySelector('svg').children; }
          get dir () { return this.getAttribute('dir') === 'left' ? 'left' : 'right'; }
          get diff () { return this.dayOfYear(this.date) / this.daysInYear(this.date); }
      
          get value () {
            return {
              'left' : this.date.toLocaleString('ru-Ru').split(',')[0],
              'right': `год ${ Math.floor(this.diff * 100)}%`
            }[this.dir];
          }
      
          setProgressBar(bar, active, fill) {
            active < 1 ? active = 1 : active;
      
            for (let i = 0; i < active; i++) {
              bar[i].style.fill = fill;
            }
          }
      
          dayOfYear (date) {
            const year = date.getFullYear();
            return Math.floor((date - new Date(year, 0, 0)) / 1000 / 60 / 60 / 24);
          }
      
          daysInYear (date) {
            const year = date.getFullYear();
            return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? 366 : 365;
          }
      
          lastDay (date) {
            const year = date.getFullYear();
            const month = date.getFullYear();
            return new Date(year, month + 1, 0).getDate();
          }
      
          calc (date, bar) {
            const { length } = bar;
            const left = Math.floor(length * (date.getDate() / this.lastDay(date)));
            const right = Math.floor(length * this.diff);
            return {
              left,
              right
            };
          }
      
          async render () {
            this.currentDate = this.data;
            
            const active = this.calc(this.date, this.bar)[this.dir];
            this.setProgressBar(this.bar, active, '#FB9B2B');
            this.$.firstElementChild.classList.toggle(this.dir);
            this.$.querySelector('.value').textContent = this.value;
          }
        }

        class CalendarSingle extends Calendar {
            constructor () {
                super()
            }

            calc (date, bar) {
                const { length } = bar;
                const left = Math.floor(length * (date.getDate() / this.lastDay(date)));
                const right = Math.floor(length * this.diff);
                return {
                  left
                };
            }

            async render () {
                this.currentDate = this.data;
                
                const active = this.calc(this.date, this.bar)[this.dir];
                this.setProgressBar(this.bar, active, '#FB9B2B');
                this.$.firstElementChild.classList.toggle(this.dir);
                this.$.querySelector('.value').textContent = this.value;
                this.$.querySelector('.value').style = 'float: right';
                this.$.querySelector('.left svg').style = 'transform: scaleX(-1)';
            }
        }
      
        customElements.get('basic-calendar') || customElements.define('basic-calendar', Calendar);
        customElements.get('single-calendar') || customElements.define('single-calendar', CalendarSingle);
    }
      
    document.querySelector('.calendar-finance').setAttribute('data-date', financeData.date);
    document.querySelector('.calendar-science').setAttribute('data-date', scienceData.date);
    document.querySelector('.calendar-international').setAttribute('data-date', internationalData.date);
    document.querySelector('.calendar-vaccination').setAttribute('data-date', vaccinationData.date);
    document.querySelector('.calendar-students').setAttribute('data-date', staffData.date);
    
    calendar();
	

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
        const array = date.split('-');
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



    // =================== индустриальные партнеры ================================

    const partnersData = {
        count: 1001
    }

    insertToPage('footer__btns-val', numDataOutput(partnersData.count));


    // =================== блоки данных в мобильой версии ================================

    // const generalData = {
    //     students:  4844,
    //     rate: 5,
    //     teachers: 1279,
    //     scientists: 347,
    //     score: 4.2,
    //     contracts: 111,
    //     progress: 39.62,
    //     publications: 1078,
    //     cash: 3.45,
    //     budget: 4.08 
    // }

    insertToPage('finance__main-data__value_budget', generalData.budget)
    insertToPage('finance__main-data__value_cash', generalData.cash)

    insertToPage('science__main-data__value_publications', generalData.publications)
    insertToPage('science__main-data__value_progress', generalData.progress)
    insertToPage('science__main-data__value_contracts', generalData.contracts)

    insertToPage('international__main-data__value_rate', generalData.rate)


})


