document.addEventListener('DOMContentLoaded', () => {


    // Server data exemple. 

    const serverData = [ 
        {   
            totalPlan: 197551.92,
            totalFact: 39.22

        },
        {
            name: 'Нераспределенный между структурными подразделениями объем договоров (контрактов, соглашений) на выполнение НИР (реализацию гранта, оказание научных, научно-технических и консалтинговых услуг)',
            plan: 34344.40,
            fact: 70697.45
        },
        {
            name: 'Базовая кафедра «Экономические и правовые экспертизы» Союза судебных экспертов «Экспертный совет»',
            plan: 750,
            fact: 177.51
        },
        {
            name: 'Научная лаборатория «Облачные технологии и аналитика больших данных»',
            plan: 2600000,
            fact: 16.54
        },
        {
            name: 'Кафедра статистики',
            plan: 4751.19,
            fact: 129.51
        },
        {
            name: 'Базовая кафедра Международных финансов, права и экономики развития малого бизнеса Йоркского Института Развития Предпринимательства (Канада)',
            plan: 115.72,
            fact: .63
        },
        {
            name: 'НИИ инновационного развития промышленности',
            plan: 1500,
            fact: 100.33
        },
        {
            name: 'Управление организации НИР',
            plan: 3491.57,
            fact: 97.31
        },
        {
            name: 'Кафедра маркетинга (в т.ч. научно-исследовательская лаборатория «Маркетинговые исследования транспортного комплекса»)',
            plan: 7602.87,
            fact: 50.56
        },
        {
            name: 'Базовая кафедра «Управление проектами и программами Capital Group»',
            plan: 3150,
            fact: 87.56
        },
        {
            name: 'Научный центр экономики труда',
            plan: 1150,
            fact: 76.92
        },
        {
            name: 'Высшая школа тарифного регулирования',
            plan: 2307.7,
            fact: 61.74
        },
        {
            name: 'Дирекция Научно-образовательного центра «Антикризисное, антимонопольное и тарифное регулирование»',
            plan: 1846.15,
            fact: 1.74
        },
        {
            name: 'Научная лаборатория «Цифровые технологии тарифного регулирования»',
            plan: 1846.15,
            fact: 61.74
        },
        {
            name: 'Кафедра прикладной информатики и информационной безопасности',
            plan: 3799,
            fact: 61.2
        },
        {
            name: 'Кафедра теории менеджмента и бизнес-технологий',
            plan: 2146.19,
            fact: 49.05
        },
        {
            name: 'НИИ «Стратегические информационные технологии»',
            plan: 3300,
            fact: 49.05
        },
        {
            name: 'Кафедра финансов и цен',
            plan: 3254.69,
            fact: 45.72
        },
        {
            name: 'Дирекция Образовательно-научного центра «Менеджмент»',
            plan: 2444.75,
            fact: 43.61
        },
        {
            name: 'Базовая кафедра торговой политики',
            plan: 2210,
            fact: 42.05
        },
        {
            name: 'Кафедра предпринимательства и логистики',
            plan: 1719.07,
            fact: 41.4
        },
        {
            name: 'Научная лаборатория «Региональная политика и региональные инвестиционные процессы»',
            plan: 2000,
            fact: 113.44
        },
        {
            name: 'НИИ «Инновационная экономика»',
            plan: 941.85,
            fact: 28
        },
        {
            name: 'Кафедра экономической теории',
            plan: 1250,
            fact: 27.59
        },
        {
            name: 'Кафедра политической экономии и истории экономической науки',
            plan: 1250,
            fact: 27.24
        },
        {
            name: 'Базовая кафедра Благотворительного фонда поддержки образовательных программ «Капитаны», «Инновационный менеджмент и социальное предпринимательство»',
            plan: 100,
            fact: 112.17
        },
        {
            name: 'Базовая кафедра международного права, финансов и экономики Китая',
            plan: 170,
            fact: 24.48
        },
        {
            name: 'Кафедра гражданско-правовых дисциплин',
            plan: 1700,
            fact: 23.62
        },
        {
            name: 'Базовая кафедра Торгово-промышленной палаты РФ «Развитие человеческого капитала»',
            plan: 985,
            fact: 21.74
        },
        {
            name: 'Учебно-научная лаборатория искусственного интеллекта, нейротехнологий и бизнес-аналитики',
            plan: 418.65,
            fact: 21.54,
        },
        {
            name: 'Кафедра математических методов в экономике',
            plan: 1121.26,
            fact: 21.10,
        },
        {
            name: 'Кафедра национальной и региональной экономики',
            plan: 724,
            fact: 16.74,
        },
        {
            name: 'Дирекция Института математики, информационных систем и цифровой экономики',
            plan: 1558.83,
            fact: 15.59,
        },
        {
            name: 'Базовая кафедра финансовой и экономической безопасности',
            plan: 100,
            fact: 13.38,
        },
        {
            name: 'Кафедра психологии',
            plan: 200,
            fact: 13.07,
        },
        {
            name: 'Кафедра государственного и муниципального управления',
            plan: 410,
            fact: 10.71,
        },
        {
            name: 'Кафедра товароведения и товарной экспертизы',
            plan: 789.38,
            fact: 10,
        },
        {
            name: 'Дирекция Образовательно-научного центра «Торговля»',
            plan: 245.13,
            fact: 8.19,
        },
        {
            name: 'Факультет Менеджмента',
            plan: 750,
            fact: 7.5,
        },
        {
            name: 'Факультет Дистанционного обучения',
            plan: 750,
            fact: 7.5
        },
        {
            name: 'Кафедра индустрии гостеприимства, туризма и спорта',
            plan: 540,
            fact: 6.47
        },
        {
            name: 'Кафедра истории и философии',
            plan: 130,
            fact: 6.31
        },
        {
            name: 'Кафедра ресторанного бизнеса',
            plan: 250,
            fact: 4.87
        },
        {
            name: 'Факультет «Международная школа бизнеса и мировой экономики»',
            plan: 400,
            fact: 4
        },
        {
            name: 'Базовая кафедра химии инновационных материалов и технологий (в т.ч. Научная лаборатория «Перспективные композиционные материалы и технологии»)',
            plan: 579.45,
            fact: 3.62
        },
        {
            name: 'Кафедра рекламы, связей с общественностью и дизайна',
            plan: 300,
            fact: 3.46
        },
        {
            name: 'Кафедра высшей математики',
            plan: 300,
            fact: 3.31
        },
        {
            name: 'Кафедра государственно-правовых и уголовно-правовых дисциплин',
            plan: 220,
            fact: 3.12
        },
        {
            name: 'Дирекция Образовательно-научного центра «Финансы»',
            plan: 120,
            fact: 3.12
        },
        {
            name: 'Кафедра бухгалтерского учёта и налогообложения',
            plan: 120,
            fact: 2.21
        },
        {
            name: 'Кафедра международного бизнеса и таможенного дела',
            plan: 90,
            fact: 1.85
        },
        {
            name: 'Кафедра иностранных языков №1',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра иностранных языков №2',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра иностранных языков №3',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра русского языка и культуры речи',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра физического воспитания',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Образовательно-научного центра «Экономика»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра Экономического анализа и корпоративного управления производством и экспортом высокотехнологичной продукции Государственной корпорации «Ростех» (в т.ч. Лаборатория Центра открытых инноваций ГК «Ростех»)',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра бюджета и казначейства',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра финансового контроля, анализа и аудита Главного контрольного управления города Москвы',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра финансового менеджмента',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра «Финансовые рынки»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра мировой экономики (в т.ч. лаборатория «Динамики мировой экономики»)',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ качества, безопасности и технологий специализированных пищевых продуктов',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра Федеральной антимонопольной службы России',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра организационно-управленческих инноваций',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра компании 1С',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра цифровых технологий в государственном управлении ФГБУ НИИ «Восход»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра цифровой экономики института развития информационного общества',
            plan: 0,
            fact: 0
        },
        {
            name: 'Базовая кафедра экономики и права Роспатента',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Бизнеса «Капитаны»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Кафедра политологии и социологии',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет дополнительного профессионального образования',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Гостинично-ресторанной, туристической и спортивной индустрии',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Маркетинга',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Финансовый',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики и права',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики торговли и товароведения',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Институт современных экономических исследований»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория стратегических разработок и комплексных исследований в футбольной и спортивной индустрии',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Исследования денежно-кредитной системы и анализа финансовых рынков»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Социально-демографической статистики»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Новая экономика и бизнес»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ продовольственной безопасности',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Количественные методы исследования регионального развития»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Семантического анализа и интеграции»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Системного программирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Прикладного моделирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Моделирование социально-экономических систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Анализ правоприменительной практики в экономике Российской Федерации»',
            plan: 0,
            fact: 0
        },  
        {
            name: 'Научная лаборатория «Перспективных систем хранения и обработки сверхбольших массивов данных»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Ситуационный центр социально-экономического развития регионов РФ',
            plan: 0,
            fact: 0
        },
        {
            name: 'Центр статистики и науки о данных',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Центра гуманитарной подготовки',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Гетерогенных компьютерных систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НШ «Теория и технологии менеджмента»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Инжиниринговый центр (Центр коллективного пользования)',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Научно-исследовательского объединения',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики и права',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики торговли и товароведения',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Институт современных экономических исследований»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория стратегических разработок и комплексных исследований в футбольной и спортивной индустрии',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Исследования денежно-кредитной системы и анализа финансовых рынков»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Социально-демографической статистики»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Новая экономика и бизнес»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ продовольственной безопасности',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Количественные методы исследования регионального развития»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Семантического анализа и интеграции»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Системного программирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Прикладного моделирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Моделирование социально-экономических систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Анализ правоприменительной практики в экономике Российской Федерации»',
            plan: 0,
            fact: 0
        },  
        {
            name: 'Научная лаборатория «Перспективных систем хранения и обработки сверхбольших массивов данных»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Ситуационный центр социально-экономического развития регионов РФ',
            plan: 0,
            fact: 0
        },
        {
            name: 'Центр статистики и науки о данных',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Центра гуманитарной подготовки',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Гетерогенных компьютерных систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НШ «Теория и технологии менеджмента»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Инжиниринговый центр (Центр коллективного пользования)',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Научно-исследовательского объединения',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ продовольственной безопасности',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Количественные методы исследования регионального развития»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Семантического анализа и интеграции»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Системного программирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Прикладного моделирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Моделирование социально-экономических систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Анализ правоприменительной практики в экономике Российской Федерации»',
            plan: 0,
            fact: 0
        },  
        {
            name: 'Научная лаборатория «Перспективных систем хранения и обработки сверхбольших массивов данных»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Ситуационный центр социально-экономического развития регионов РФ',
            plan: 0,
            fact: 0
        },
        {
            name: 'Центр статистики и науки о данных',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Центра гуманитарной подготовки',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Гетерогенных компьютерных систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НШ «Теория и технологии менеджмента»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Инжиниринговый центр (Центр коллективного пользования)',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Научно-исследовательского объединения',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики и права',
            plan: 0,
            fact: 0
        },
        {
            name: 'Факультет Экономики торговли и товароведения',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Институт современных экономических исследований»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория стратегических разработок и комплексных исследований в футбольной и спортивной индустрии',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Исследования денежно-кредитной системы и анализа финансовых рынков»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Социально-демографической статистики»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ «Новая экономика и бизнес»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НИИ продовольственной безопасности',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Количественные методы исследования регионального развития»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Семантического анализа и интеграции»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Системного программирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Прикладного моделирования»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Моделирование социально-экономических систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Анализ правоприменительной практики в экономике Российской Федерации»',
            plan: 0,
            fact: 0
        },  
        {
            name: 'Научная лаборатория «Перспективных систем хранения и обработки сверхбольших массивов данных»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Ситуационный центр социально-экономического развития регионов РФ',
            plan: 0,
            fact: 0
        },
        {
            name: 'Центр статистики и науки о данных',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Центра гуманитарной подготовки',
            plan: 0,
            fact: 0
        },
        {
            name: 'Научная лаборатория «Гетерогенных компьютерных систем»',
            plan: 0,
            fact: 0
        },
        {
            name: 'НШ «Теория и технологии менеджмента»',
            plan: 0,
            fact: 0
        },
        {
            name: 'Инжиниринговый центр (Центр коллективного пользования)',
            plan: 0,
            fact: 0
        },
        {
            name: 'Дирекция Научно-исследовательского объединения',
            plan: 0,
            fact: 0
        },
        
    ];


    



    function plan(data) {
        
        // ======== инициализация данных =======

        let currentPage = 1;
        let flag = true;
        let pagination = [];
        const itemsInPage = 15;
        const sortData = data.slice(2, data.length + 1).sort((a, b) => b.fact - a.fact);
        sortData.unshift(data[1])
        const pages = Math.ceil(sortData.length / itemsInPage);
        const sliceData = (arr, position, limit) => arr.slice(position, limit);

         // ======== создание страниц =======

        function createPages(modifier) {
            const tabContent = document.createElement('div');
            tabContent.classList.add('plan__tabcontent', `plan__tabcontent_p${modifier}`);

            document.querySelector('.plan__tabcontainer').append(tabContent);
        }

        for (let i = 1; i <= pages; i++) {
            createPages(i);
        }

        const tabsContent = document.querySelectorAll('.plan__tabcontent');

        // ======== отображение текущей страницы =======

        function showCurrentPage(page = 0) {
            tabsContent.forEach(i => i.classList.add('hide'));
            tabsContent[page].classList.remove('hide');
        }

        showCurrentPage();

        function setPagination() {
            const btn = num => {
                return `
                    <div class="plan__tabitem plan__tabitem-btn ${num === 1 ? 'plan__tabitem_active' : null}" data-page=${num}>
                        <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z"/>	
                        </svg>
                        <div class="plan__tabitem-value">${num}</div>	
                    </div>
                `
            }

            for (let i = 1; i <= pages; i++) {
                pagination.push(btn(i));
            }
        }

        setPagination();

        function innerPaginationToPage() {
            let result = [];
            
            if (currentPage < pages - 1) {
                result = pagination.slice(currentPage - 1, currentPage - 1 + 3);
            } 
            else if (currentPage < pages) { 
                result = pagination.slice(currentPage - 2, currentPage - 1 + 2);

            } else if (currentPage == pages) {
                result = pagination.slice(currentPage - 3, currentPage - 1 + 1);
            }

            document.querySelector('.plan__tabheader-btns').innerHTML =  `
                ${result.join('')}
            `;
        }

        innerPaginationToPage();

        document.querySelector('.plan__tabitem-next').addEventListener('click', () => {
            flag = true;
            if (currentPage >= pagination.length) return false;
            currentPage++;
            if (currentPage < pagination.length - 1 || flag)  innerPaginationToPage(); 

            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.classList.remove('plan__tabitem_active');
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('plan__tabitem_active');
                }
            })
            
            showCurrentPage(currentPage - 1);
            setBtn();

        })


        document.querySelector('.plan__tabitem-prev').addEventListener('click', () => {
            flag = true
            if (currentPage <= 1) return false;
            currentPage--;
            if (currentPage < pagination.length - 1) innerPaginationToPage();
            
            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
                i.classList.remove('plan__tabitem_active');
                if (i.getAttribute('data-page') == currentPage) {
                    i.classList.add('plan__tabitem_active');
                }
            })
            
            showCurrentPage(currentPage - 1);
            setBtn();

        })

        function setBtn() {
            document.querySelectorAll('.plan__tabitem-btn').forEach(i => {
            
                i.addEventListener('click', (e) => {
                    document.querySelectorAll('.plan__tabitem-btn').forEach(item => {
                        item.classList.remove('plan__tabitem_active');
                    });
                    
                    i.classList.add('plan__tabitem_active');
                    let pageNum = i.getAttribute('data-page');
                    currentPage = pageNum;
                    flag = false;
                    showCurrentPage(currentPage - 1);
                })
            })
        }

        document.querySelector('.plan__tabheader').addEventListener('selectstart', () => {
            return false;
        })

        setBtn();


        function setPage(pageNumber) {

            const defaultPageRightElement = `
                <div class="plan__tabcontent-element">
                    <div class="plan__tabcontent-block plan__tabcontent-block_total">
                        <svg class="plan__tabcontent-block-bg" viewBox="0 0 1190 294" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 12.1828V286.978V287.323L36.2467 293H232.774L250.931 290.075H295.79L308.607 292.312H388.714L413.279 288.183H940.912L965.477 292.312H1156.96L1189 286.978V10.6345L1149.48 4.26883H530.768L510.475 1H106.74L86.4465 4.26883H50.1317L1 12.1828Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"/>
                        </svg>
                        <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_total">			
                            <div class="plan__tabcontent-block__item">
                                <div class="plan__tabcontent-block__info">
                                    <div class="plan__tabcontent-block__descr_total">итого:</div>
                                    <div class="plan__tabcontent-block__value plan__tabcontent-block__value_total"></div>
                                </div>

                                <svg class="plan__tabcontent-block__progressbar" viewBox="0 0 1054 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.05" x="-2" width="100%" height="100%" fill="white"/>
                                    <rect class="plan__tabcontent-block__progressbar-total" y="1" width="100%" height="100%" fill="url(#p1-l-total)"/>
                                    <path d="M15.3077 1H20.1543L-24.2247 60H-29.0713L15.3077 1Z" fill="#112054"/>
                                    <path d="M1042.03 60L1086.41 1H1081.56L1037.18 60H1042.03Z" fill="#112054"/>
                                    <path d="M1022.64 60L1067.02 1H1062.18L1017.8 60H1022.64Z" fill="#112054"/>
                                    <path d="M1003.26 60L1047.64 1H1042.79L998.411 60H1003.26Z" fill="#112054"/>
                                    <path d="M983.872 60L1028.25 1H1023.4L979.025 60H983.872Z" fill="#112054"/>
                                    <path d="M964.484 60L1008.86 1H1004.02L959.638 60H964.484Z" fill="#112054"/>
                                    <path d="M945.098 60L989.477 1H984.63L940.251 60H945.098Z" fill="#112054"/>
                                    <path d="M925.712 60L970.091 1H965.245L920.866 60H925.712Z" fill="#112054"/>
                                    <path d="M906.326 60L950.705 1H945.858L901.479 60H906.326Z" fill="#112054"/>
                                    <path d="M886.939 60L931.318 1H926.472L882.093 60H886.939Z" fill="#112054"/>
                                    <path d="M867.552 60L911.931 1H907.085L862.706 60H867.552Z" fill="#112054"/>
                                    <path d="M848.165 60L892.544 1H887.697L843.318 60H848.165Z" fill="#112054"/>
                                    <path d="M828.779 60L873.158 1H868.311L823.932 60H828.779Z" fill="#112054"/>
                                    <path d="M809.392 60L853.771 1H848.924L804.545 60H809.392Z" fill="#112054"/>
                                    <path d="M790.006 60L834.385 1H829.539L785.16 60H790.006Z" fill="#112054"/>
                                    <path d="M770.619 60L814.998 1H810.151L765.772 60H770.619Z" fill="#112054"/>
                                    <path d="M751.233 60L795.612 1H790.766L746.387 60H751.233Z" fill="#112054"/>
                                    <path d="M731.848 60L776.227 1H771.38L727.001 60H731.848Z" fill="#112054"/>
                                    <path d="M712.461 60L756.84 1H751.994L707.615 60H712.461Z" fill="#112054"/>
                                    <path d="M693.075 60L737.454 1H732.607L688.228 60H693.075Z" fill="#112054"/>
                                    <path d="M673.687 60L718.066 1H713.22L668.841 60H673.687Z" fill="#112054"/>
                                    <path d="M654.302 60L698.681 1H693.834L649.455 60H654.302Z" fill="#112054"/>
                                    <path d="M634.915 60L679.294 1H674.447L630.068 60H634.915Z" fill="#112054"/>
                                    <path d="M615.528 60L659.907 1H655.06L610.681 60H615.528Z" fill="#112054"/>
                                    <path d="M596.141 60L640.52 1H635.673L591.294 60H596.141Z" fill="#112054"/>
                                    <path d="M576.754 60L621.133 1H616.287L571.908 60H576.754Z" fill="#112054"/>
                                    <path d="M557.369 60L601.748 1H596.901L552.522 60H557.369Z" fill="#112054"/>
                                    <path d="M537.983 60L582.362 1H577.515L533.136 60H537.983Z" fill="#112054"/>
                                    <path d="M518.597 60L562.976 1H558.129L513.75 60H518.597Z" fill="#112054"/>
                                    <path d="M499.209 60L543.588 1H538.742L494.363 60H499.209Z" fill="#112054"/>
                                    <path d="M479.823 60L524.202 1H519.356L474.977 60H479.823Z" fill="#112054"/>
                                    <path d="M460.437 60L504.816 1H499.969L455.59 60H460.437Z" fill="#112054"/>
                                    <path d="M441.051 60L485.43 1H480.583L436.204 60H441.051Z" fill="#112054"/>
                                    <path d="M421.663 60L466.042 1H461.195L416.816 60H421.663Z" fill="#112054"/>
                                    <path d="M402.276 60L446.655 1H441.809L397.43 60H402.276Z" fill="#112054"/>
                                    <path d="M382.891 60L427.27 1H422.423L378.044 60H382.891Z" fill="#112054"/>
                                    <path d="M363.504 60L407.883 1H403.037L358.658 60H363.504Z" fill="#112054"/>
                                    <path d="M344.118 60L388.497 1H383.651L339.271 60H344.118Z" fill="#112054"/>
                                    <path d="M324.732 60L369.111 1H364.264L319.885 60H324.732Z" fill="#112054"/>
                                    <path d="M305.345 60L349.724 1H344.877L300.498 60H305.345Z" fill="#112054"/>
                                    <path d="M285.958 60L330.337 1H325.491L281.112 60H285.958Z" fill="#112054"/>
                                    <path d="M266.572 60L310.951 1H306.105L261.726 60H266.572Z" fill="#112054"/>
                                    <path d="M247.185 60L291.565 1H286.718L242.339 60H247.185Z" fill="#112054"/>
                                    <path d="M227.799 60L272.178 1H267.332L222.953 60H227.799Z" fill="#112054"/>
                                    <path d="M208.412 60L252.791 1H247.944L203.565 60H208.412Z" fill="#112054"/>
                                    <path d="M189.026 60L233.405 1H228.559L184.18 60H189.026Z" fill="#112054"/>
                                    <path d="M169.64 60L214.019 1H209.172L164.793 60H169.64Z" fill="#112054"/>
                                    <path d="M150.252 60L194.631 1H189.785L145.406 60H150.252Z" fill="#112054"/>
                                    <path d="M130.867 60L175.246 1H170.399L126.02 60H130.867Z" fill="#112054"/>
                                    <path d="M111.48 60L155.859 1H151.012L106.633 60H111.48Z" fill="#112054"/>
                                    <path d="M92.0942 60L136.473 1H131.627L87.2476 60H92.0942Z" fill="#112054"/>
                                    <path d="M72.7079 60L117.087 1H112.24L67.8613 60H72.7079Z" fill="#112054"/>
                                    <path d="M53.3202 60L97.6993 1H92.8527L48.4736 60H53.3202Z" fill="#112054"/>
                                    <path d="M33.9345 60L78.3135 1H73.4669L29.0879 60H33.9345Z" fill="#112054"/>
                                    <path d="M14.5493 60L58.9283 1H54.0817L9.70264 60H14.5493Z" fill="#112054"/>
                                    <path d="M-4.83796 60L39.5411 1H34.6945L-9.68457 60H-4.83796Z" fill="#112054"/>
                                    <svg>
                                        <defs>
                                            <linearGradient id="p1-l-total" x1="1054" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FCB54F"/>
                                            <stop offset="1" stop-color="#FB9B2C"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </svg>		
                                
                                <div class="plan__tabcontent-block__info plan__tabcontent-block__info_bottom">
                                    <svg class="plan__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.1" x="4.07481" y="21.4018" width="17.3267" height="17.3267" transform="rotate(-90 4.07481 21.4018)" stroke="white" stroke-width="8.14962"/>
                                        <rect opacity="0.1" x="516.938" y="15.4238" width="14.3771" height="14.3771" transform="rotate(-45 516.938 15.4238)" stroke="white" stroke-width="6.76226"/>
                                        <rect opacity="0.1" x="785.288" y="29.4766" width="8.22526" height="8.22526" transform="rotate(-45 785.288 29.4766)" stroke="white" stroke-width="3.86875"/>
                                        <rect opacity="0.1" x="259.308" y="27.4766" width="6.78323" height="6.78323" transform="rotate(-45 259.308 27.4766)" stroke="white" stroke-width="3.1905"/>
                                    </svg>

                                    <div class="plan__tabcontent-block__current-plan">
                                        <span class="plan__tabcontent-block__current-plan-value plan__tabcontent-block__current-plan-value_total"></span>
                                        <span class="plan__tabcontent-block__current-plan-descr">тыс.руб.</span>
                                    </div>
                                </div>
                            </div>
                        </div>			
                    </div>

                    <div class="plan__tabcontent-block plan__tabcontent-block_p1-r">
                        <svg class="plan__tabcontent-block-bg" viewBox="0 0 1190 1323" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 51.5909V1294.76V1296.32L36.2467 1322H232.774L250.931 1308.77H295.79L308.607 1318.89H388.714L413.279 1300.21H940.912L965.477 1318.89H1156.96L1189 1294.76V44.586L1149.48 15.7881H530.768L510.475 1H106.74L86.4465 15.7881H50.1317L1 51.5909Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"/>
                        </svg>
                        <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p1-r"></div>
                    </div>
                </div>	 
                `
                
                const regularPageRightElement = pageNumber => {
                    return `
                        <div class="plan__tabcontent-element">
                            <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-r">
                                <svg class="plan__tabcontent-block-bg" viewBox="0 0 1190 1888" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 70.3183V1849.67V1851.81L36.2467 1887H232.774L250.931 1868.87H295.79L308.607 1882.73H388.714L413.279 1857.14H940.912L965.477 1882.73H1156.96L1189 1849.67V60.7204L1149.48 21.2623H530.768L510.475 1H106.74L86.4465 21.2623H50.1317L1 70.3183Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"/>
                                </svg>
                                <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-r"></div>
                            </div>	
                        </div>
                    `
                }

                return  `
                    <div class="plan__tabcontent-wrap">
                        <div class="plan__tabcontent-element">
                            <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-l">
                                <svg class="plan__tabcontent-block-bg" viewBox="0 0 1190 1888" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 70.3183V1849.67V1851.81L36.2467 1887H232.774L250.931 1868.87H295.79L308.607 1882.73H388.714L413.279 1857.14H940.912L965.477 1882.73H1156.96L1189 1849.67V60.7204L1149.48 21.2623H530.768L510.475 1H106.74L86.4465 21.2623H50.1317L1 70.3183Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"/>
                                </svg>
                                <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-l"></div>
                            </div>			
                        </div>

                        <div class="plan__tabcontent-element">
                            <div class="plan__tabcontent-block plan__tabcontent-block_p${pageNumber}-m">
                                <svg class="plan__tabcontent-block-bg" viewBox="0 0 1190 1888" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 70.3183V1849.67V1851.81L36.2467 1887H232.774L250.931 1868.87H295.79L308.607 1882.73H388.714L413.279 1857.14H940.912L965.477 1882.73H1156.96L1189 1849.67V60.7204L1149.48 21.2623H530.768L510.475 1H106.74L86.4465 21.2623H50.1317L1 70.3183Z" fill="#112054" fill-opacity="0.68" stroke="#217AFF" stroke-opacity="0.4" stroke-width="2"/>
                                </svg>	
                                <div class="plan__tabcontent-block__wrap plan__tabcontent-block__wrap_p${pageNumber}-m"></div>
                            </div>		
                        </div>

                    ${pageNumber === 1 ? defaultPageRightElement : regularPageRightElement(pageNumber)}
                </div>
            `
        }

        for (let i = 0; i < pages; i++) {
            tabsContent[i].innerHTML = setPage(i + 1);
        }

        class planData {
            constructor(array, modifier) {
                this.array          = array,
                this.className      = 'plan__tabcontent-block__wrap',
                this.modifier       = modifier,
                this.parent         = document.querySelector(`.plan__tabcontent-block_${this.modifier}`),
                this.count          = this.array.length,
                this.divider();
                this.progressbarr();
                
            }

            get length() {
                let str = '';

                for (let i = 0; i < this.array.length; i++) {
                    str += this.array[i].name;
                }

                return str.length
            }

            // декоративный разделитель.

            divider() {
                return `
                    <svg class="plan__tabcontent-block__divider" viewBox="0 0 800 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" x="4.07481" y="21.4018" width="17.3267" height="17.3267" transform="rotate(-90 4.07481 21.4018)" stroke="white" stroke-width="8.14962"/>
                        <rect opacity="0.1" x="516.938" y="15.4238" width="14.3771" height="14.3771" transform="rotate(-45 516.938 15.4238)" stroke="white" stroke-width="6.76226"/>
                        <rect opacity="0.1" x="785.288" y="29.4766" width="8.22526" height="8.22526" transform="rotate(-45 785.288 29.4766)" stroke="white" stroke-width="3.86875"/>
                        <rect opacity="0.1" x="259.308" y="27.4766" width="6.78323" height="6.78323" transform="rotate(-45 259.308 27.4766)" stroke="white" stroke-width="3.1905"/>
                    </svg>
                `;
            }

            // прогрессбар.

            progressbarr(ratio, id) {
                return `
                    <svg class="plan__tabcontent-block__progressbar" viewBox="0 0 1054 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.05" x="-2" width="100%" height="100%" fill="white"/>
                        <rect y="1" width="${ratio}%" height="100%" fill="url(#${id})"/>
                        <path d="M15.3077 1H20.1543L-24.2247 60H-29.0713L15.3077 1Z" fill="#112054"/>
                        <path d="M1042.03 60L1086.41 1H1081.56L1037.18 60H1042.03Z" fill="#112054"/>
                        <path d="M1022.64 60L1067.02 1H1062.18L1017.8 60H1022.64Z" fill="#112054"/>
                        <path d="M1003.26 60L1047.64 1H1042.79L998.411 60H1003.26Z" fill="#112054"/>
                        <path d="M983.872 60L1028.25 1H1023.4L979.025 60H983.872Z" fill="#112054"/>
                        <path d="M964.484 60L1008.86 1H1004.02L959.638 60H964.484Z" fill="#112054"/>
                        <path d="M945.098 60L989.477 1H984.63L940.251 60H945.098Z" fill="#112054"/>
                        <path d="M925.712 60L970.091 1H965.245L920.866 60H925.712Z" fill="#112054"/>
                        <path d="M906.326 60L950.705 1H945.858L901.479 60H906.326Z" fill="#112054"/>
                        <path d="M886.939 60L931.318 1H926.472L882.093 60H886.939Z" fill="#112054"/>
                        <path d="M867.552 60L911.931 1H907.085L862.706 60H867.552Z" fill="#112054"/>
                        <path d="M848.165 60L892.544 1H887.697L843.318 60H848.165Z" fill="#112054"/>
                        <path d="M828.779 60L873.158 1H868.311L823.932 60H828.779Z" fill="#112054"/>
                        <path d="M809.392 60L853.771 1H848.924L804.545 60H809.392Z" fill="#112054"/>
                        <path d="M790.006 60L834.385 1H829.539L785.16 60H790.006Z" fill="#112054"/>
                        <path d="M770.619 60L814.998 1H810.151L765.772 60H770.619Z" fill="#112054"/>
                        <path d="M751.233 60L795.612 1H790.766L746.387 60H751.233Z" fill="#112054"/>
                        <path d="M731.848 60L776.227 1H771.38L727.001 60H731.848Z" fill="#112054"/>
                        <path d="M712.461 60L756.84 1H751.994L707.615 60H712.461Z" fill="#112054"/>
                        <path d="M693.075 60L737.454 1H732.607L688.228 60H693.075Z" fill="#112054"/>
                        <path d="M673.687 60L718.066 1H713.22L668.841 60H673.687Z" fill="#112054"/>
                        <path d="M654.302 60L698.681 1H693.834L649.455 60H654.302Z" fill="#112054"/>
                        <path d="M634.915 60L679.294 1H674.447L630.068 60H634.915Z" fill="#112054"/>
                        <path d="M615.528 60L659.907 1H655.06L610.681 60H615.528Z" fill="#112054"/>
                        <path d="M596.141 60L640.52 1H635.673L591.294 60H596.141Z" fill="#112054"/>
                        <path d="M576.754 60L621.133 1H616.287L571.908 60H576.754Z" fill="#112054"/>
                        <path d="M557.369 60L601.748 1H596.901L552.522 60H557.369Z" fill="#112054"/>
                        <path d="M537.983 60L582.362 1H577.515L533.136 60H537.983Z" fill="#112054"/>
                        <path d="M518.597 60L562.976 1H558.129L513.75 60H518.597Z" fill="#112054"/>
                        <path d="M499.209 60L543.588 1H538.742L494.363 60H499.209Z" fill="#112054"/>
                        <path d="M479.823 60L524.202 1H519.356L474.977 60H479.823Z" fill="#112054"/>
                        <path d="M460.437 60L504.816 1H499.969L455.59 60H460.437Z" fill="#112054"/>
                        <path d="M441.051 60L485.43 1H480.583L436.204 60H441.051Z" fill="#112054"/>
                        <path d="M421.663 60L466.042 1H461.195L416.816 60H421.663Z" fill="#112054"/>
                        <path d="M402.276 60L446.655 1H441.809L397.43 60H402.276Z" fill="#112054"/>
                        <path d="M382.891 60L427.27 1H422.423L378.044 60H382.891Z" fill="#112054"/>
                        <path d="M363.504 60L407.883 1H403.037L358.658 60H363.504Z" fill="#112054"/>
                        <path d="M344.118 60L388.497 1H383.651L339.271 60H344.118Z" fill="#112054"/>
                        <path d="M324.732 60L369.111 1H364.264L319.885 60H324.732Z" fill="#112054"/>
                        <path d="M305.345 60L349.724 1H344.877L300.498 60H305.345Z" fill="#112054"/>
                        <path d="M285.958 60L330.337 1H325.491L281.112 60H285.958Z" fill="#112054"/>
                        <path d="M266.572 60L310.951 1H306.105L261.726 60H266.572Z" fill="#112054"/>
                        <path d="M247.185 60L291.565 1H286.718L242.339 60H247.185Z" fill="#112054"/>
                        <path d="M227.799 60L272.178 1H267.332L222.953 60H227.799Z" fill="#112054"/>
                        <path d="M208.412 60L252.791 1H247.944L203.565 60H208.412Z" fill="#112054"/>
                        <path d="M189.026 60L233.405 1H228.559L184.18 60H189.026Z" fill="#112054"/>
                        <path d="M169.64 60L214.019 1H209.172L164.793 60H169.64Z" fill="#112054"/>
                        <path d="M150.252 60L194.631 1H189.785L145.406 60H150.252Z" fill="#112054"/>
                        <path d="M130.867 60L175.246 1H170.399L126.02 60H130.867Z" fill="#112054"/>
                        <path d="M111.48 60L155.859 1H151.012L106.633 60H111.48Z" fill="#112054"/>
                        <path d="M92.0942 60L136.473 1H131.627L87.2476 60H92.0942Z" fill="#112054"/>
                        <path d="M72.7079 60L117.087 1H112.24L67.8613 60H72.7079Z" fill="#112054"/>
                        <path d="M53.3202 60L97.6993 1H92.8527L48.4736 60H53.3202Z" fill="#112054"/>
                        <path d="M33.9345 60L78.3135 1H73.4669L29.0879 60H33.9345Z" fill="#112054"/>
                        <path d="M14.5493 60L58.9283 1H54.0817L9.70264 60H14.5493Z" fill="#112054"/>
                        <path d="M-4.83796 60L39.5411 1H34.6945L-9.68457 60H-4.83796Z" fill="#112054"/>
                        <svg>
                            <defs>
                                <linearGradient id="${id}" x1="1054" y1="1" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4CD380"/>
                                <stop offset="1" stop-color="#217AFF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </svg>
                `;
            }

            // создание отдельного элемента блока.

            createBlockItem(item, index) {            
                return `
                    <div class="plan__tabcontent-block__item"> 
                        <div class="plan__tabcontent-block__info">
                            <div class="plan__tabcontent-block__descr">${item.name}</div>
                            <div class="plan__tabcontent-block__value">${item.fact}%</div>
                        </div>

                        ${this.progressbarr(Math.ceil(item.fact), this.modifier + '-' + index)}
                        
                        <div class="plan__tabcontent-block__info plan__tabcontent-block__info_bottom">

                            ${this.divider()}

                            <div class="plan__tabcontent-block__current-plan">
                                <span class="plan__tabcontent-block__current-plan-value">${item.plan}</span>
                                <span class="plan__tabcontent-block__current-plan-descr">тыс.руб.</span>
                            </div>
                        </div>
                    </div>
                    
                `;
            }

            // рендер ф-ия.

            render() {
                const element = document.createElement('div');

                element.classList.add(this.className);

                let str = '';

                this.array.forEach((i, index) => str += this.createBlockItem(i, index));

                element.innerHTML = str; 

                this.parent.append(element);  
                if(this.count == 2)  {
                    element.classList.add('plan__tabcontent-block__wrap_include-two-items')
                }
            }
        }

        function innerData() {
            count = 0;

            for (let i = 1; i <= pages; i++) {
                if (i === 1) {
                    new planData(sliceData(sortData, count, count + 5), `p${i}-l`).render();
                    count = count + 5
                    new planData(sliceData(sortData, count, count + 5), `p${i}-m`).render();
                    count = count + 5
                    new planData(sliceData(sortData, count, count + 4), `p${i}-r`).render();
                    count = count + 4
                } else {
                    new planData(sliceData(sortData, count, count + 5), `p${i}-l`).render();
                    count = count + 5
                    new planData(sliceData(sortData, count, count + 5), `p${i}-m`).render();
                    count = count + 5
                    new planData(sliceData(sortData, count, count + 5), `p${i}-r`).render();
                    count = count + 5
                }
                
            }

            
        }

        innerData()

        function setTotal(data) {
            document.querySelector('.plan__tabcontent-block__value_total').textContent = data.totalFact + '%';
            document.querySelector('.plan__tabcontent-block__current-plan-value_total').textContent = data.totalPlan;
            document.querySelector('.plan__tabcontent-block__progressbar-total').style.width = Math.ceil(data.totalFact) + '%'
        }
            
        setTotal(data[0]);

    }

    plan(serverData);


    document.querySelector('#alarm_click').addEventListener('click', () => {
        //...
    })

});

