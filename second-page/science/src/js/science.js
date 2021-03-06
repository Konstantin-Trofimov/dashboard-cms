document.addEventListener('DOMContentLoaded', () => {

    const scienceServerData = {
        date: '21.10.2022',
        currentPlan: 503760.6,
        expectedReceipts: {
            date: '31.12.2022',
            sum: 236166.5
        },
        currentReceipts: 40220.5,
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

    function science(data) {
       

        // ==================== вывод данных в блок science__info =================

        
        insertToPage('science__info-title__date', data.date);
        insertToPage('science__info-title__year', data.date.split('.')[2]);
        insertToPage('science__info-block-value_current-receipt', numDataOutput(data.currentReceipts));
        insertToPage('science__info-block-value_expected-receipt', numDataOutput(data.expectedReceipts.sum));
        insertToPage('science__info-block-descr_expected-receipt span', data.expectedReceipts.date);

        insertToPage('science__info-block-value_scoups', numDataOutput(data.publications.scopus.scopusTotal));
        insertToPage('science__info-block-value_scoups_q1-q2', numDataOutput(data.publications.scopus.q1q2Total));
        insertToPage('science__info-block-value_wos', numDataOutput(data.publications.wos.wosTotal));
        insertToPage('science__info-block-value_wos_q1-q2', numDataOutput(data.publications.wos.q1q2Total));


        // ====================== прогрессбар =======================

        const sciencePlanProgressbar = Array.from(document.querySelectorAll('.science__data-plan__progressbar path'));
        const planProgress = ((data.currentReceipts / data.currentPlan) * 100).toFixed(2);

        const sciencePlanProgressbarLength = progressLength(sciencePlanProgressbar, planProgress);

        setProgressBar(sciencePlanProgressbar,  sciencePlanProgressbarLength, '#217Aff');

        insertToPage('science__data-plan__info-ratio_fact', planProgress + '%');
        insertToPage('science__data-plan__info-value_fact', numDataOutput(data.currentReceipts));
        insertToPage('science__data-plan__info-value_planned', numDataOutput(data.currentPlan));


        // ====================== вертикальные диаграммы =======================


        // инициализация селекторов и данных scopus.

        const scopusInSixMonths = data.publications.scopus.scopusInSixMonths;
        const scopusInSixMonthsQ1Q2 = data.publications.scopus.q1q2InSixMonths;

        const diagramScoups = Array.from(document.querySelectorAll('.science__data-diagram__item-scopus'));
        const diagramScoupsQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-scopus-q1-q2'));

        const diagramScoupsValues = Array.from(document.querySelectorAll('.science__data-diagram__item-value-scopus'));
        const diagramScoupsValuesQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-value-scopus-q1-q2'));

        const diagramScoupsMonths = Array.from(document.querySelectorAll('.science__data-diagram__months-scopus span'));


        // инициализация селекторов и данных wos.

        const wosInSixMonths = data.publications.wos.wosInSixMonths ;
        const wosInSixMonthsQ1Q2 = data.publications.wos.q1q2InSixMonths;

        const diagramWos = Array.from(document.querySelectorAll('.science__data-diagram__item-wos'));
        const diagramWosQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-wos-q1-q2'));

        const diagramWosValues = Array.from(document.querySelectorAll('.science__data-diagram__item-value-wos'));
        const diagramWosValuesQ1Q2 = Array.from(document.querySelectorAll('.science__data-diagram__item-value-wos-q1-q2'));

        const diagramWosMonths = Array.from(document.querySelectorAll('.science__data-diagram__months-wos span'));


       // ф-ия для рендера диаграмм.
        
        function setDiagram(originData, q1q2Data, originValues, q1q2Values, originCols, q1q2Cols, months, colors) {

            // ф-ия для инициализаци массива значений исходного объекта.

            const getArray = data => data.map(i => i.value);

            // получение массивов значений 

            const origin = getArray(originData);
            const q1q2 = getArray(q1q2Data);

            // получение объединенного массива значений.

            const result = [...origin, ...q1q2];

            // получение наибольшего значения из объединенного массива.

            const max = Math.max(...result);

            // ф-ия для вывода данных.
            
            function dataOutput(data, values, cols, max, color) {
                data.map((i, index) => {
                    values[index].textContent = i.value;
                    
                    let value = (i.value / max) * 100;
                    
                    cols[index].setAttribute('height', `${value}%`);
                    cols[index].setAttribute('y', `${100 - value}%`);
                    cols[index].querySelector('rect').setAttribute('fill', color);
                })
            }
            
            originData.map((i, index) => months[index].textContent = i.month);

            dataOutput(originData, originValues, originCols, max, colors[0]);
            dataOutput(q1q2Data, q1q2Values, q1q2Cols, max, colors[1]);
            
        }

        setDiagram(scopusInSixMonths, scopusInSixMonthsQ1Q2, diagramScoupsValues, diagramScoupsValuesQ1Q2, diagramScoups, diagramScoupsQ1Q2, diagramScoupsMonths, ['#217AFF', '#44BCFF']);
        setDiagram(wosInSixMonths, wosInSixMonthsQ1Q2, diagramWosValues, diagramWosValuesQ1Q2, diagramWos, diagramWosQ1Q2, diagramWosMonths, ['#FB9B2B', '#FFDD85']);
    }

    science(scienceServerData);
});