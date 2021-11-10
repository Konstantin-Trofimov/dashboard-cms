document.addEventListener('DOMContentLoaded', () => {

    const internationalServerData = [
        {
            unions: 12,
            inDetail: [
                {
                    name: 'Коммерческие организации',
                    value: 5
                },
                {
                    name: 'Некоммерческие организации',
                    value: 6
                },
                {
                    name: 'Научные организации',
                    value: 1
                }
            ]
        },
        {
            learnforeignLanguages: 2035,
            accreditedProgrammes: 44,
            rate: 5
        },
        {
            resources: {
                citizens: 1117.9,
                organisations: 2241.6
            },
            inDetail: [
                {
                    name: 'По образовательным программам',
                    value: 109336.3
                },
                {
                    name: 'Научные исследования и разработки',
                    value: 290.3
                },
                {
                    name: 'Плата за пользование общежитием',
                    value: 4354.9
                }
            ]
        },
        {
            students: 3915,
            inDetail: [
                {
                    name: 'Республика Узбекистан',
                    value: 1074
                },
                {
                    name: 'Монголия',
                    value: 768
                },
                {
                    name: 'Республика Беларусь',
                    value: 506
                },
                {
                    name: 'Республика Казахстан',
                    value: 236
                },
                {
                    name: 'Республика Таджикистан',
                    value: 223
                },
                {
                    name: 'Киргизская Республика',
                    value: 147
                },
                {
                    name: 'Вьетнам',
                    value: 97
                },
                {
                    name: 'Китай',
                    value: 84
                },
                {
                    name: 'Франция',
                    value: 79
                },
                {
                    name: 'Украина',
                    value: 75
                },
                {
                    name: 'Республика Молдова',
                    value: 67
                },
                {
                    name: 'другие страны',
                    value: 559
                },
            ]
        },
        {
            foreignlLanguages: [
                {
                    name: 'Английский',
                    value: 2178
                },
                {
                    name: 'Испанский',
                    value: 890
                },
                {
                    name: 'Итальянский',
                    value: 53
                },
                {
                    name: 'Китайский',
                    value: 239
                },
                {
                    name: 'Немецкий',
                    value: 915
                },
                {
                    name: 'Французский',
                    value: 517
                },
                {
                    name: 'Японский',
                    value: 14
                }
            ]
        },
        {
            additionalProgrammes: [
                {
                    name: 'дополнительные общеразвивающие программы для детей',
                    value: 776
                },
                {
                    name: 'дополнительные общеразвивающие программы для взрослых',
                    value: 4766
                },
                {
                    name: 'Программы повышения квалификации',
                    value: 14081
                },
                {
                    name: 'Программы профессиональной переподготовки',
                    value: 1307
                }
               
            ]
        }



    ]


    // ====================== служебные функции ===============================

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


    //====================== Класс для генирации графиков =========================

    
    function international(data) {
        
        class internationalInfoGraphic {
            constructor(data, parentSelector, colors, color) {
                this.data = data;
                this.parentSelector = parentSelector;
                this.className = 'international__unions-legend';
                this.parent  = document.querySelector(`.${this.parentSelector}`);
                this.colors = colors;
                this.color = color;
                this.setGraphiс();
                this.categoryRatio();
                this.setGraphiсOrange();
            
            }

            get sumData() {
                const result = [];
                for (let i = 0; i < this.data.length; i++) {
                    result.push(this.data[i].value);
                }
                const sum = result.reduce((a, b) => a + b);
                
                return sum;
            }

            categoryRatio(category) {
                return Math.ceil((category / this.sumData) * 100);
            }

            setGraphiс(name, value, color="#217AFF") { 
                

                return `
                <div class="international__graphic-item">
                    <div class="international__graphic-info">
                        <div class="international__graphic-descr">${name}</div>
                    </div>
                    
                    <svg class="international__graphic-line" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg class="international__graphic-line-data" width="${this.categoryRatio(value) + 5}%" x="0" y="0" >
                            <rect class="international__graphic-line-row" width="100%" fill="${color}" x="1.8" y="0.45"/>
                            <rect  class="international__graphic-line-right-rect" stroke="${color}"; x="100%" y="0"  fill="white"/>
                            <text class="international__graphic-line-value" x="100%" y="${this.categoryRatio(value) <= 5 ? '2' : '-3.5' }"  text-anchor="middle" dy="0.3em" transform="translate(${this.categoryRatio(value) <= 10 ? '15' : '-12' })">
                            ${numDataOutput(+value) }
                            </text>
                        </svg>
                    </svg>
                </div>
                `;
            }

            setGraphiсOrange(name, value, color) { 

                return `
                <div class="international__graphic-item">
                    <div class="international__graphic-info">
                        <div class="international__graphic-descr">${name}</div>
                    </div>
                    
                    <svg class="international__graphic-line" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <svg class="international__graphic-line-data" width="${this.categoryRatio(value) + 5}%" x="0" y="0" >
                            <rect class="international__graphic-line-row" width="100%" fill="${color}" x="0" y="0.45"/>
                            <text class="international__graphic-line-value" x="100%" y="2"  text-anchor="middle" dy="0.3em" transform="translate(10)">
                                ${numDataOutput(+value)}
                            </text>
                        </svg>
                    </svg>
                </div>
                `;
            }

            render() {

                const element = document.createElement('div');
    
                element.classList.add(this.className);
                let result = []

                if (this.color === 'orange') {
                    result = this.data.map(i => this.setGraphiсOrange(i.name, i.value, '#FB9B2B'));
                } 
                else if (this.color === 'blue') {
                    result = this.data.map(i => this.setGraphiс(i.name, i.value));
                } 
                else {
                    result = this.data.map((i, index) => this.setGraphiс(i.name, i.value, this.colors[index]));
                }

                element.innerHTML = result.join(' ');

                this.parent.append(element);
            }
        }



        //====================== Участие в международных объединениях =========================



        new internationalInfoGraphic(data[0].inDetail, 'international__graphics-boby-unions', ['#EF8E8E', '#4CD382', '#6C38FF'], 'colored').render();
        insertToPage('international__unions-diagram-value', data[0].unions);



        //====================== вывод данных в блок international__info =========================



        insertToPage('international__info-value_foreign-language', data[1].learnforeignLanguages);
        insertToPage('international__info-value_accreditation', data[1].accreditedProgrammes);
        insertToPage('international__info-value_rate', data[1].rate);



        //====================== вывод данных в блок international__data =========================



        new internationalInfoGraphic(data[2].inDetail, 'international__data-body_resources', null, 'blue').render();
        new internationalInfoGraphic(data[3].inDetail, 'international__data-body_students', null, 'blue').render();
        new internationalInfoGraphic(data[4].foreignlLanguages, 'international__data-body_foreign-languages', null, 'blue').render();
        new internationalInfoGraphic(data[5].additionalProgrammes, 'international__data-body_additional-programmes', null, 'orange').render();



        // ================ вертикальные диаграммы ====================
    


        const colsResources = Array.from(document.querySelectorAll('.international__diagram-column_resources'));
        
        function diagramDataOutput(diagram, data) {
            const groups = [];
            let sum = 0;

            for (let key in data) {
                document.querySelector(`.international__diagram-body-value_${key}`).textContent = numDataOutput(data[key]);
                groups.push(data[key]);
            }
 
            sum = groups.reduce((a, b) => a + b);
 
 
            diagram.map((i, index) => {
                let ratio  = Math.ceil((groups[index] / sum) * 100);
                if (ratio < 5) {
                    ratio = 10
                }
                i.style.height = ratio + '%';
            })
        }
 
        diagramDataOutput(colsResources, data[2].resources);
    }

    
    international(internationalServerData);
});