document.addEventListener('DOMContentLoaded', () => {


    // =============== Exemple Server Data ======================

    const studentsData = {
            date: '01.10.2021',
            employment: 91,
            load: {
                hours: 950537.84,
                ratio: 6.7
            },
            score: 4.2,
            categories: {
                occupation: {
                    fullTime: 31064,
                    distance: 5634,
                    extramural: 7061
                },
                payment: {
                    public: 9831,
                    nonBudget: 33928
                },
            },
            inDetail: [
                {
                    title: 'Высшее образование',
                    total: 18558,
                    categories: {
                        occupation: {
                            fullTime: 14361,
                            distance: 4170,
                            extramural: 27
                        },
                        payment: {
                            public: 4495,
                            nonBudget: 14063
                        },
                        groups: {
                            bachelors: 14535,
                            specialists: 1360,
                            magisters: 2663
                        }
                    },
                },
                {
                    title: 'Филиалы ВО',
                    total: 13383,
                    categories: {
                        occupation: {
                            fullTime: 5301,
                            distance: 1429,
                            extramural: 6653
                        },
                        payment: {
                            public: 1277,
                            nonBudget: 12106
                        },
                        groups: {
                            bachelors: 9910,
                            specialists: 2163,
                            magisters: 1310
                        }
                    },
                },
                {
                    title: 'Среднее профессиональное образование',
                    total: 4811,
                    categories: {
                        occupation: {
                            fullTime: 4647,
                            distance: 0,
                            extramural: 164
                        },
                        payment: {
                            public: 2107,
                            nonBudget:  2704
                        },
                    },
                },
                {
                    title: 'Лицей',
                    total: 412,
                    categories: {
                        occupation: {
                            fullTime: 377,
                            distance: 35,
                            extramural: 0
                        },
                        payment: {
                            public: 412,
                            nonBudget: 0
                        },
                    },
                },
                {
                    title: 'Аспирантура, докторантура',
                    total: 434,
                    categories: {
                        occupation: {
                            fullTime: 396,
                            distance: 0,
                            extramural: 38
                        },
                        payment: {
                            public: 283,
                            nonBudget: 151
                        },
                    },
                },
                {
                    title: 'Филиалы среднее профессиональное образование',
                    total: 4720,
                    categories: {
                        occupation: {
                            fullTime: 4565,
                            distance: 0,
                            extramural: 155
                        },
                        payment: {
                            public: 1256,
                            nonBudget: 3464
                        },
                    },
                },
                {
                    title: 'Филиалы СОШ',
                    total: 1408,
                    categories: {
                        occupation: {
                            fullTime: 1408,
                            distance: '',
                            extramural: ''
                        },
                        payment: {
                            public: '',
                            nonBudget: 1408
                        },
                    },
                    
                },
                {
                    title: 'Филиалы аспирантура',
                    total: 33,
                    categories: {
                        occupation: {
                            fullTime: 9,
                            distance: 0,
                            extramural: 24
                        },
                        payment: {
                            public: 1,
                            nonBudget: 32
                        },
                    },
                }
            ]
    
        
    }


    // ================  служебные функции ====================


    const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;

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

    function numDataOutput(num) {
        const str = num.toString().split('.');
        const intPart = str[0];
        const decimalPart = str[1];
       
        let out;

        if (intPart.length <= 3) {
            out = intPart
        }
        else {
            out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        }

        return out += '.' + decimalPart;
    } 

    function intNumDataOutput(num) {
        const str = num.toString();
    
        let out;

        if (str.length <= 3) {
            out = str;
        }
        else {
            out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        }

        return out;
    } 

    


   


    function students(data) {

        // ================ вертикальные диаграммы ====================
    
        const colsHigherEducation = Array.from(document.querySelectorAll('.students__diagram-column_higher-education'));
        const colsBranches = Array.from(document.querySelectorAll('.students__diagram-column_branches'));


        colsHigherEducation.forEach(i => i.style.height = '100%')

        function diagramDataOutput(diagram, data, category) {
            const groups = [];
            let sum = 0;

            for (let key in data) {
                document.querySelector(`.students__diagram-${category}-body-value_${key}`).textContent = intNumDataOutput(data[key]);
                groups.push(data[key]);
            }

            sum = groups.reduce((a, b) => a + b);

            console.log(groups)

            diagram.map((i, index) => {
                let ratio  = Math.ceil((groups[index] / sum) * 100) + '%';

                console.log(ratio)
                i.style.height = ratio;
            })

            
        }

        diagramDataOutput(colsHigherEducation, data.inDetail[0].categories.groups, 'higher-education')
        diagramDataOutput(colsBranches, data.inDetail[1].categories.groups, 'branches')

        



         // ================ графики данных  ====================

        const graphiсContainers = Array.from(document.querySelectorAll('.students__graphic-container'));

        class studentsInfoGraphic {
            constructor( obj, parentSelector) {
                this.obj               = obj;
                this.fullTime          = this.obj.categories.occupation.fullTime;
                this.distance          = this.obj.categories.occupation.distance;
                this.extramural        = this.obj.categories.occupation.extramural;
                this.public            = this.obj.categories.payment.public;
                this.nonBudget         = this.obj.categories.payment.nonBudget;
                this.color             = '#217AFF';
                this.className         = 'students__graphic-wrap';
                this.parent            = parentSelector;
                this.categoryRatio();
                this.setGraphiс();
                
            }
    
            // получение суммы данных для расчета соотнашения показателей графика.

            get occupationSumData() {
                const result = [this.obj.categories.occupation.fullTime, this.obj.categories.occupation.distance, this.obj.categories.occupation.extramural];
                const sum = result.reduce((a, b) => a + b);
    
                return sum;
            }

            get  paymentSumData() {
                const result = [this.obj.categories.payment.public, this.obj.categories.payment.nonBudget];
                const sum = result.reduce((a, b) => a + b);
    
                return sum;
            }
            
            // ф-ия для вывода данных в процентном отношении.
    
            categoryRatio(category, sum) {
                return Math.ceil((category / sum) * 100);
            }
    
            // ф-ия для генерации графика данных.
    
            setGraphiс(categoryName, value, sum, color) {

                return `
                <div class="students__graphic-item">
                    <div class="students__graphic-info">
                        <div class="students__graphic-descr">${categoryName}</div>
                    </div>
                    
                    <svg class="students__graphic-line" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg class="students__graphic-line-data" width="${this.categoryRatio(value, sum)}%" x="0" y="0" >
                            <rect class="students__graphic-line-row" width="100%" fill="${color}" x="3" y="0.55"/>
                            <rect  class="students__graphic-line-right-rect" stroke="${color}"; x="100%" y="0"  fill="white"/>
                            <text class="students__graphic-line-value" x="100%" y="-2"  text-anchor="middle" dy="0.3em" transform="translate(${this.categoryRatio(value, sum) <= 15 ? '10' : '-8' })">
                                ${value ? intNumDataOutput(value) : 0}
							</text>>
                        </svg>
                    </svg>
                </div>
                `;
            }
    
            // рендер ф-ия.
    
            render() {
                const element = document.createElement('div');
    
                element.classList.add(this.className);
    
                element.innerHTML = `
                    <div class="students__graphic-header">
                        <div class="students__title">${this.obj.title}</div>
                        <div class="students__graphic-total">${intNumDataOutput(this.obj.total)}</div>
                    </div>
                    <div class="students__graphic-body">
                        ${this.fullTime   || this.fullTime   === 0 ? this.setGraphiс('Очное',         this.fullTime,   this.occupationSumData, this.color) : ''}
                        ${this.distance   || this.distance   === 0 ? this.setGraphiс('Очно-заочное',  this.distance,   this.occupationSumData, this.color) : ''}
                        ${this.extramural || this.extramural === 0 ? this.setGraphiс('Заочное',       this.extramural, this.occupationSumData, this.color) : ''}
                        ${this.public     || this.public     === 0 ? this.setGraphiс('Бюджет',        this.public,     this.paymentSumData,    this.color) : ''}
                        ${this.nonBudget  || this.nonBudget  === 0 ? this.setGraphiс('Внебюджет',     this.nonBudget,  this.paymentSumData,    this.color) : ''}
                    </div>
                `;
    
                this.parent.append(element);
            }
        }

        data.inDetail.forEach((i, index) => {
            new studentsInfoGraphic(i, graphiсContainers[index]).render();
        })   

        insertToPage('students__data-block-date-wrap p span', data.date);



        // ================  трудоустройство выпускников ====================


        const employmentProgressbar = Array.from(document.querySelectorAll('.students__employment-progressbar-data path')).reverse();

        const employmentProgressbarLength = progressLength(employmentProgressbar, data.employment);

        setProgressBar(employmentProgressbar, employmentProgressbarLength, '#FB9B2B');

        insertToPage('students__employment-progressbar-ratio', data.employment + '%');


        // ================  педагогическая нагрузка ====================


        const teachingLoadProgressbar = Array.from(document.querySelectorAll('.students__teaching-load-progressbar path')).reverse();

        const teachingLoadProgressbarLength = progressLength(teachingLoadProgressbar, data.load.ratio);

        setProgressBar(teachingLoadProgressbar, teachingLoadProgressbarLength, '#217AFF');


        insertToPage('students__teaching-load-value_fact', data.load.ratio + '%');
        insertToPage('students__teaching-load-descr_fact span', data.date);
        insertToPage('students__teaching-load-value_plan', numDataOutput(data.load.hours));


        // ================  педагогическая нагрузка ====================


        insertToPage('students__score-value', numDataOutput(data.score));
    }

    students(studentsData)

    

});