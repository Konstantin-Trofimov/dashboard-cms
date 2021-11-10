document.addEventListener("DOMContentLoaded",()=>{const t=(t,e)=>document.querySelector("."+t).innerHTML=e;function e(t,e){let a;return a=e>100?t.length:Math.round(t.length/100*e),a}function a(t,e,a){for(let i=0;i<e;i++)t[i].style.fill=a}function i(t){const e=t.toString().split("."),a=e[0],i=e[1];let s;return s=a.length<=3?a:a.replace(/(\d)(?=(\d{3})+$)/g,"$1 "),s+"."+i}function s(t){const e=t.toString();let a;return a=e.length<=3?e:e.replace(/(\d)(?=(\d{3})+$)/g,"$1 "),a}!function(n){const o=Array.from(document.querySelectorAll(".students__diagram-column_higher-education")),r=Array.from(document.querySelectorAll(".students__diagram-column_branches"));function c(t,e,a){const i=[];let n=0;for(let t in e)document.querySelector(`.students__diagram-${a}-body-value_${t}`).textContent=s(e[t]),i.push(e[t]);n=i.reduce((t,e)=>t+e),console.log(i),t.map((t,e)=>{let a=Math.ceil(i[e]/n*100)+"%";console.log(a),t.style.height=a})}o.forEach(t=>t.style.height="100%"),c(o,n.inDetail[0].categories.groups,"higher-education"),c(r,n.inDetail[1].categories.groups,"branches");const l=Array.from(document.querySelectorAll(".students__graphic-container"));class u{constructor(t,e){this.obj=t,this.fullTime=this.obj.categories.occupation.fullTime,this.distance=this.obj.categories.occupation.distance,this.extramural=this.obj.categories.occupation.extramural,this.public=this.obj.categories.payment.public,this.nonBudget=this.obj.categories.payment.nonBudget,this.color="#217AFF",this.className="students__graphic-wrap",this.parent=e,this.categoryRatio(),this.setGraphiс()}get occupationSumData(){return[this.obj.categories.occupation.fullTime,this.obj.categories.occupation.distance,this.obj.categories.occupation.extramural].reduce((t,e)=>t+e)}get paymentSumData(){return[this.obj.categories.payment.public,this.obj.categories.payment.nonBudget].reduce((t,e)=>t+e)}categoryRatio(t,e){return Math.ceil(t/e*100)}"setGraphiс"(t,e,a,i){return`\n                <div class="students__graphic-item">\n                    <div class="students__graphic-info">\n                        <div class="students__graphic-descr">${t}</div>\n                    </div>\n                    \n                    <svg class="students__graphic-line" width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <svg class="students__graphic-line-data" width="${this.categoryRatio(e,a)}%" x="0" y="0" >\n                            <rect class="students__graphic-line-row" width="100%" fill="${i}" x="3" y="0.55"/>\n                            <rect  class="students__graphic-line-right-rect" stroke="${i}"; x="100%" y="0"  fill="white"/>\n                            <text class="students__graphic-line-value" x="100%" y="-2"  text-anchor="middle" dy="0.3em" transform="translate(${this.categoryRatio(e,a)<=15?"10":"-8"})">\n                                ${e?s(e):0}\n\t\t\t\t\t\t\t</text>>\n                        </svg>\n                    </svg>\n                </div>\n                `}render(){const t=document.createElement("div");t.classList.add(this.className),t.innerHTML=`\n                    <div class="students__graphic-header">\n                        <div class="students__title">${this.obj.title}</div>\n                        <div class="students__graphic-total">${s(this.obj.total)}</div>\n                    </div>\n                    <div class="students__graphic-body">\n                        ${this.fullTime||0===this.fullTime?this.setGraphiс("Очное",this.fullTime,this.occupationSumData,this.color):""}\n                        ${this.distance||0===this.distance?this.setGraphiс("Очно-заочное",this.distance,this.occupationSumData,this.color):""}\n                        ${this.extramural||0===this.extramural?this.setGraphiс("Заочное",this.extramural,this.occupationSumData,this.color):""}\n                        ${this.public||0===this.public?this.setGraphiс("Бюджет",this.public,this.paymentSumData,this.color):""}\n                        ${this.nonBudget||0===this.nonBudget?this.setGraphiс("Внебюджет",this.nonBudget,this.paymentSumData,this.color):""}\n                    </div>\n                `,this.parent.append(t)}}n.inDetail.forEach((t,e)=>{new u(t,l[e]).render()}),t("students__data-block-date-wrap p span",n.date);const d=Array.from(document.querySelectorAll(".students__employment-progressbar-data path")).reverse();a(d,e(d,n.employment),"#FB9B2B"),t("students__employment-progressbar-ratio",n.employment+"%");const h=Array.from(document.querySelectorAll(".students__teaching-load-progressbar path")).reverse();a(h,e(h,n.load.ratio),"#217AFF"),t("students__teaching-load-value_fact",n.load.ratio+"%"),t("students__teaching-load-descr_fact span",n.date),t("students__teaching-load-value_plan",i(n.load.hours)),t("students__score-value",i(n.score))}({date:"01.10.2021",employment:91,load:{hours:950537.84,ratio:6.7},score:4.2,categories:{occupation:{fullTime:31064,distance:5634,extramural:7061},payment:{public:9831,nonBudget:33928}},inDetail:[{title:"Высшее образование",total:18558,categories:{occupation:{fullTime:14361,distance:4170,extramural:27},payment:{public:4495,nonBudget:14063},groups:{bachelors:14535,specialists:1360,magisters:2663}}},{title:"Филиалы ВО",total:13383,categories:{occupation:{fullTime:5301,distance:1429,extramural:6653},payment:{public:1277,nonBudget:12106},groups:{bachelors:9910,specialists:2163,magisters:1310}}},{title:"Среднее профессиональное образование",total:4811,categories:{occupation:{fullTime:4647,distance:0,extramural:164},payment:{public:2107,nonBudget:2704}}},{title:"Лицей",total:412,categories:{occupation:{fullTime:377,distance:35,extramural:0},payment:{public:412,nonBudget:0}}},{title:"Аспирантура, докторантура",total:434,categories:{occupation:{fullTime:396,distance:0,extramural:38},payment:{public:283,nonBudget:151}}},{title:"Филиалы среднее профессиональное образование",total:4720,categories:{occupation:{fullTime:4565,distance:0,extramural:155},payment:{public:1256,nonBudget:3464}}},{title:"Филиалы СОШ",total:1408,categories:{occupation:{fullTime:1408,distance:"",extramural:""},payment:{public:"",nonBudget:1408}}},{title:"Филиалы аспирантура",total:33,categories:{occupation:{fullTime:9,distance:0,extramural:24},payment:{public:1,nonBudget:32}}}]})});