document.addEventListener("DOMContentLoaded",()=>{function t(t,e){let a;return a=e>100?t.length:Math.round(t.length/100*e),a}document.querySelector(".footer__btns").addEventListener("click",()=>{}),document.querySelector("#plugLeft").addEventListener("click",()=>{}),document.querySelector("#portraits").addEventListener("click",()=>{}),document.querySelector("#priority").addEventListener("click",()=>{}),document.querySelector("#all_branches").addEventListener("click",()=>{}),document.querySelector("#plan").addEventListener("click",()=>{}),document.querySelector("#staff").addEventListener("click",()=>{}),document.querySelector("#finance").addEventListener("click",()=>{}),document.querySelector("#science").addEventListener("click",t=>{let e=t.target;e.hasAttribute("data-btn")&&(!function(t){const e=t.getAttribute("data-btn"),a=document.querySelectorAll(".science__list-item");let n="";switch(e){case"wos":n="#FB9B2B";break;case"wosQ1Q2":n="#FFDD85";break;case"scopus":n="#217AFF";break;case"scopusQ1Q2":n="#44BCFF"}for(let t of a)t.classList.remove("science__list-item_active"),t.getAttribute("data-btn")==e&&t.classList.add("science__list-item_active");m(g,e,n)}(e),clearTimeout(f))}),document.querySelector("#international").addEventListener("click",()=>{}),document.querySelector("#vaccination").addEventListener("click",()=>{}),document.querySelector("#vaccination").addEventListener("click",()=>{}),document.querySelector("#covid_click").addEventListener("click",()=>{});const e=(t,e)=>document.querySelector("."+t).innerHTML=e,a=(t,e)=>document.querySelectorAll("."+t).forEach(t=>t.innerHTML=e);function n(t){let e,a=t.toString();if(-1!==a.indexOf(".")){a=t.toString().split(".");const n=a[0],s=a[1];e=n.length<=3?n:n.replace(/(\d)(?=(\d{3})+$)/g,"$1 "),e+="."+s}else e=a.length<=3?a:a.replace(/(\d)(?=(\d{3})+$)/g,"$1 ");return e}!function(t,e=6300){const a=Array.from(document.querySelectorAll(".absolute-progrss-bar path"));let s=function(t,e){let a;a=e>100?t.length:Math.round(t.length/100*e);return a}(a,t);setTimeout(()=>{!function(t,e,a){for(let n=0;n<e;n++)t[n].style.fill=a}(a,s,"#FB9B2B")},e),document.querySelector(".performance-diagram-absolute-value").textContent=n(t)+"%"}(77);const s={students:4844,rate:5,teachers:1279,scientists:347,score:4.2,contracts:111,progress:39.62,publications:1078,cash:3.45,budget:4.08};!function(t){for(let e in t)document.querySelector(".circle-block__value_"+e).textContent=t[e]}(s);const r={date:"2021-10-02",total:6e8,budgetResources:2e8,otherResources:2e8,wageFund:2e8,landTax:1e9,propertyTax:"100000000"};wageFundDiagramData=Object.values(r).slice(2,4),сostsDiagramData=Object.values(r).slice(4,7).reverse();const i=t=>t.map(t=>parseInt(t));class c{constructor(t,e,a,n,s=!1){this.parentSelector=document.querySelector("."+n),this.segmentColors=a,this.isDecorated=s,this.title=t,this.data=e,this.fill="#112054",this.diff(),this.offset(),this.sector(),this.insDiagramSectors(),this.diagrammSegmentConfig()}get diagramValues(){const t=this.data.reduce((t,e)=>t+e);let e=this.data.map(e=>Math.round(e/t*100)),a=Math.max(...e);this.isDecorated&&(e=e.map(t=>0===t?0:t<5?5:t));const n=e.reduce((t,e)=>t+e)-100;return e.map(t=>t===a?t-n:t)}get internalEclipseColor(){return this.segmentColors[this.segmentColors.length-1]}diff(t){return 100-t}offset(t){let e=0,a=0;return this.diagramValues.map((e,n,s)=>{if(n==t&&0!==n){for(let t=0;t<n;t++)a+=s[t];a=100-a}}),e=25+a,e}diagrammSegmentConfig(t=15.91549430918954){return`class="donut-segment" cx="21" cy="21" r="${t}"`}sector(t,e){const a=0==e?10:e==this.diagramValues.length-1?5:7;return`<circle  ${this.diagrammSegmentConfig()} fill="${this.fill}" stroke="${this.segmentColors[e]}" stroke-width="${a}" stroke-dasharray="${t} ${this.diff(t)}" stroke-dashoffset="${this.offset(e)}"></circle>`}insDiagramSectors(){return this.diagramValues.map((t,e)=>this.sector(t,e)).join("")}render(){const t=document.createElement("div");t.classList.add("diagram"),t.innerHTML=`\n    \n                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">\n                    ${this.insDiagramSectors()}\n                    <circle ${this.diagrammSegmentConfig(12)} fill="${this.fill}" stroke="${this.internalEclipseColor}" stroke-width="0.3"></circle>\n                </svg>\n    \n                <div class="finance__diagram-text">${this.title}</div>\n            `,this.parentSelector.append(t)}}var o;new c("Фонд оплаты труда",i(wageFundDiagramData),["#2BD6FB","#217AFF"],"finance__diagram_wage-fund").render(),new c("Затраты",i(сostsDiagramData),["#FFC01D","#FB9B2B","#FD6A6A"],"finance__diagram_сosts",!0).render(),e("finance__total-value",n((o=r).total)),a("finance__diagram-value_budget-resources",n(o.budgetResources)),a("finance__diagram-value_other-resources",n(o.otherResources)),a("finance__diagram-value_wage-fund",n(o.wageFund)),a("finance__diagram-value_land-tax",n(o.landTax)),a("finance__diagram-value_property-tax",n(o.propertyTax)),document.querySelectorAll(".finance__diagram-value").forEach(t=>function(t){let e=t.textContent.length,a="right";(t.classList.contains("finance__diagram-value_wage-fund")||t.classList.contains("finance__diagram-value_other-resources"))&&(a="left"),1===e&&(t.style[a]="1.6vw")}(t));const l={date:"2021-01-31",foreignStudents:1224,nonresidentStudents:6556,partners:"XX"};!function(t){e("international__value_foreign-students",n(t.foreignStudents)),e("international__value_nonresident-students",n(t.nonresidentStudents)),e("international__value_partners",t.partners)}(l);const u={date:"2021-10-02",total:3345,vaccinated:2457,unvaccinated:887,recovered:1050,unsuitable:232,sick:108};!function(t){const e=e=>Math.ceil(e/[t.vaccinated,t.unvaccinated,t.recovered,t.sick,t.unsuitable].reduce((t,e)=>t+e)*100),a=(t,a)=>`\n                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <svg class="vaccination__graphiс-data" width="${e(t+1)}" x="0" y="0" >\n                    <rect class="vaccination__graphiс-row" fill=${a} x="0" y="0" transform="translate(-5)"/>\n                    <text class="vaccination__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">\n                        ${t}\n                    </text>\n                </svg>\n            </svg>`;!function(t){const e=document.createElement("div");e.classList.add("vaccination__graphiс"),e.innerHTML=`\n                ${a(t.vaccinated,"#217AFF")}\n                ${a(t.unvaccinated,"#6C38FF")}\n                ${a(t.recovered,"#A7EB17")}\n                ${a(t.unsuitable,"#FB9B2B")}\n                ${a(t.sick,"#FD6A6A")}\n           \n            `,document.querySelector(".vaccination__diagram-wrap").append(e)}(t),document.querySelector(".vaccination__diagram-value").textContent=t.total}(u);const d="2021-10-02",h={scopus:{scopusTotal:694,q1q2Total:113,scopusInSixMonths:[{month:"Май",value:151},{month:"Июнь",value:112},{month:"Июль",value:70},{month:"Август",value:94},{month:"Сентябрь",value:59},{month:"Октябрь",value:41}],q1q2InSixMonths:[{month:"Май",value:25},{month:"Июнь",value:59},{month:"Июль",value:28},{month:"Август",value:45},{month:"Сентябрь",value:33},{month:"Октябрь",value:13}]},wos:{wosTotal:407,q1q2Total:113,wosInSixMonths:[{month:"Май",value:55},{month:"Июнь",value:32},{month:"Июль",value:61},{month:"Август",value:68},{month:"Сентябрь",value:44},{month:"Октябрь",value:44}],q1q2InSixMonths:[{month:"Май",value:18},{month:"Июнь",value:7},{month:"Июль",value:6},{month:"Август",value:8},{month:"Сентябрь",value:6},{month:"Октябрь",value:17}]}};function m(t,e,a="#FB9B2B"){const n=Array.from(document.querySelectorAll(".wos rect")),s=Math.max(...t[e]);n.map((n,r)=>{let i=t[e][r]/s*100;n.setAttribute("fill",a),n.setAttribute("height",i+"%"),n.setAttribute("y",100-i+"%")}),document.querySelector(".science__diagram-value").textContent=s}!function(a){const s=(a.currentReceipts/a.currentPlan*100).toFixed(2),r=Array.from(document.querySelectorAll(".science__plan-progressbar-item"));!function(t,e,a){for(let n=0;n<e;n++)t[n].setAttribute("fill-opacity",a)}(r,t(r,s),1),e("science__plan-ratio",s+"%"),e("science__plan-value",n(a.currentPlan)),e("science__legend-value_current-receipts",n(a.currentReceipts)),e("science__legend-value_expected-receipts",n(a.expectedReceipts))}({currentPlan:50000.6,currentReceipts:199583.4,expectedReceipts:233203.6,progress:80.62});const g=function(t){const e=t=>t.map(t=>t.value),a={};return a.wos=e(t.wos.wosInSixMonths),a.wosQ1Q2=e(t.wos.q1q2InSixMonths),a.scopus=e(t.scopus.scopusInSixMonths),a.scopusQ1Q2=e(t.scopus.q1q2InSixMonths),a}(h);m(g,"wos");let f,_=0,p=["wos","wosQ1Q2","scopus","scopusQ1Q2"],v=["#FB9B2B","#FFDD85","#217AFF","#44BCFF"];!function t(){f=setTimeout(()=>{_<=3?(document.querySelectorAll(".science__list-item").forEach(t=>{t.classList.remove("science__list-item_active")}),document.querySelectorAll(".science__list-item")[_].classList.add("science__list-item_active"),m(g,p[_],v[_]),_++):_=0,t()},3e3)}();const y="2021-12-01",b={hours:950537,ratio:6.7},S={occupation:{fullTime:30164,distance:5634,extramural:7061},payment:{public:9831,nonBudget:33928},groups:{bachelors:1214535,specialists:2421360,magisters:6422663}};!function(a){const n=Array.from(document.querySelectorAll(".students__employment-diagram path")).reverse();!function(t,e,a){for(let n=0;n<e;n++)t[n].style.fill=a}(n,t(n,a),"#FB9B2B"),e("students__employment-value",a+"%")}(91),function(a){const n=Array.from(document.querySelectorAll(".students__teaching-load-progressbar span"));!function(t,e,a){for(let n=0;n<e;n++)t[n].style.backgroundColor=a}(n,t(n,a.ratio),"#1A5FC7"),e("spanstudents__teaching-load-value",a.hours),e("students__teaching-load-ratio",a.ratio+"%")}(b),function(t){const a=Array.from(document.querySelectorAll(".students__graphic svg"));function s(...t){return t.reduce((t,e)=>t+e)}const r=(t,e)=>Math.ceil(t/e*100),i=s(t.occupation.fullTime,t.occupation.distance,t.occupation.extramural),c=s(t.payment.public,t.payment.nonBudget);a[0].setAttribute("width",r(t.occupation.fullTime,i)),a[1].setAttribute("width",r(t.occupation.distance,i)),a[2].setAttribute("width",r(t.occupation.extramural,i)),a[3].setAttribute("width",r(t.payment.public,c)),a[4].setAttribute("width",r(t.payment.nonBudget,c)),e("students__graphic-value_fullTime",n(t.occupation.fullTime)),e("students__graphic-value_distance",n(t.occupation.distance)),e("students__graphic-value_extramural",n(t.occupation.extramural)),e("students__graphic-value_public",n(t.payment.public)),e("students__graphic-value_nonBudget",n(t.payment.nonBudget))}(S),document.querySelector(".calendar-finance").setAttribute("data-date",r.date),document.querySelector(".calendar-science").setAttribute("data-date",d),document.querySelector(".calendar-international").setAttribute("data-date",l.date),document.querySelector(".calendar-vaccination").setAttribute("data-date",u.date),document.querySelector(".calendar-students").setAttribute("data-date",y),function(){class t extends HTMLElement{constructor(t,e,...a){self=super(),this.constructor.setMixins(a);const n=this.constructor.setTemplate(t,e);this.$=this.constructor.setShadowDOM(n)}static setMixins(t){Object.assign(this.prototype,...t)}static setTemplate(t,e){const a=document.createElement("template");return a.innerHTML=t+`<style>${e}</style>`,a}static setShadowDOM(t){const e=self.attachShadow({mode:"open"});return e.appendChild(t.content.cloneNode(!0)),e}}window.HTMLElementExtended=t;class e extends t{constructor(){super('\n          <div class="calendar_science">\n            <div class="calendar-unit">\n              <div class="value"></div>\n              <div class="calendar__month-progress-bar">\n                <svg class="calendar__month-progress-bar__science" width="100%" height="100%" viewBox="0 0 100 12" fill="none"\n                  xmlns="http://www.w3.org/2000/svg">\n                  <path d="M4.5 0H0.5L11.5 12H15.5L4.5 0Z" fill="#40394D" />\n                  <path d="M10.5 0H6.5L17.5 12H21.5L10.5 0Z" fill="#40394D" />\n                  <path d="M16.5 0H12.5L23.5 12H27.5L16.5 0Z" fill="#40394D" />\n                  <path d="M22.5 0H18.5L29.5 12H33.5L22.5 0Z" fill="#40394D" />\n                  <path d="M28.5 0H24.5L35.5 12H39.5L28.5 0Z" fill="#40394D" />\n                  <path d="M34.5 0H30.5L41.5 12H45.5L34.5 0Z" fill="#40394D" />\n                  <path d="M40.5 0H36.5L47.5 12H51.5L40.5 0Z" fill="#40394D" />\n                  <path d="M46.5 0H42.5L53.5 12H57.5L46.5 0Z" fill="#40394D" />\n                  <path d="M52.5 0H48.5L59.5 12H63.5L52.5 0Z" fill="#40394D" />\n                  <path d="M58.5 0H54.5L65.5 12H69.5L58.5 0Z" fill="#40394D" />\n                  <path d="M64.5 0H60.5L71.5 12H75.5L64.5 0Z" fill="#40394D" />\n                  <path d="M70.5 0H66.5L77.5 12H81.5L70.5 0Z" fill="#40394D" />\n                  <path d="M76.5 0H72.5L83.5 12H87.5L76.5 0Z" fill="#40394D" />\n                  <path d="M82.5 0H78.5L89.5 12H93.5L82.5 0Z" fill="#40394D" />\n                  <path d="M88.5 0H84.5L95.5 12H99.5L88.5 0Z" fill="#40394D" />\n                </svg>\n              </div>\n            </div>\n          </div>\n        ',"\n          .calendar-unit {display: block;block;margin-top: 0.5vw;}\n          .right {text-align: right;}\n          .right svg {transform: scaleX(-1);}\n          .value {\n            font-family: 'Oswald', sans-serif;\n            /* text-align: left; */\n            font-weight: 400;\n            color: #FB9B2B;\n            font-size: 0.6vw;\n            line-height: 0.6vw;\n          }\n        "),this.render()}set currentDate(t){this.date=new Date(t)}get data(){return this.parentNode.getAttribute("data-date")}get bar(){return this.$.querySelector("svg").children}get dir(){return"left"===this.getAttribute("dir")?"left":"right"}get diff(){return this.dayOfYear(this.date)/this.daysInYear(this.date)}get value(){return{left:this.date.toLocaleString("ru-Ru").split(",")[0],right:`год ${Math.floor(100*this.diff)}%`}[this.dir]}setProgressBar(t,e,a){e<1&&(e=1);for(let n=0;n<e;n++)t[n].style.fill=a}dayOfYear(t){const e=t.getFullYear();return Math.floor((t-new Date(e,0,0))/1e3/60/60/24)}daysInYear(t){const e=t.getFullYear();return e%4==0&&e%100>0||e%400==0?366:365}lastDay(t){const e=t.getFullYear(),a=t.getFullYear();return new Date(e,a+1,0).getDate()}calc(t,e){const{length:a}=e;return{left:Math.floor(a*(t.getDate()/this.lastDay(t))),right:Math.floor(a*this.diff)}}async render(){this.currentDate=this.data;const t=this.calc(this.date,this.bar)[this.dir];this.setProgressBar(this.bar,t,"#FB9B2B"),this.$.firstElementChild.classList.toggle(this.dir),this.$.querySelector(".value").textContent=this.value}}customElements.get("basic-calendar")||customElements.define("basic-calendar",e),customElements.get("single-calendar")||customElements.define("single-calendar",class extends e{constructor(){super()}calc(t,e){const{length:a}=e,n=Math.floor(a*(t.getDate()/this.lastDay(t)));Math.floor(a*this.diff);return{left:n}}async render(){this.currentDate=this.data;const t=this.calc(this.date,this.bar)[this.dir];this.setProgressBar(this.bar,t,"#FB9B2B"),this.$.firstElementChild.classList.toggle(this.dir),this.$.querySelector(".value").textContent=this.value,this.$.querySelector(".value").style="float: right",this.$.querySelector(".left svg").style="transform: scaleX(-1)"}})}(),function(){let t,e=[];function a(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}function n(t){var r=s[a(0,s.length-1)];e[t].location={lat:r[0],lng:r[1]},e[t].animate("scale",.5,{duration:320,complete:function(){this.animate("scale",.2,{duration:320,complete:function(){setTimeout((function(){n(t)}),a(100,400))}})}})}t=new Earth("myearth",{location:{lat:20,lng:20},light:"none",mapImage:"../assets/img/main/hologram-map.svg",transparent:!0,autoRotate:!0,autoRotateSpeed:5,autoRotateDelay:100,autoRotateStart:1e3}),t.addEventListener("ready",(function(){this.startAutoRotate();var t={color:"#009CFF",opacity:.15,hairline:!0,offset:-.5};for(var a in s)t.locations=[{lat:s[a][0],lng:s[a][1]},{lat:s[a][2],lng:s[a][3]}],this.addLine(t);for(a=0;a<8;a++)e[a]=this.addSprite({image:"../assets/img/main/hologram-shine.svg",scale:1,offset:-.5,opacity:1}),n(a)}));var s=[[59.651901245117,17.918600082397,41.8002778,12.2388889],[59.651901245117,17.918600082397,51.4706,-.461941],[13.681099891662598,100.74700164794922,-6.1255698204,106.65599823],[13.681099891662598,100.74700164794922,28.566499710083008,77.10310363769531],[30.12190055847168,31.40559959411621,-1.31923997402,36.9277992249],[30.12190055847168,31.40559959411621,25.2527999878,55.3643989563],[30.12190055847168,31.40559959411621,41.8002778,12.2388889],[28.566499710083008,77.10310363769531,7.180759906768799,79.88410186767578],[28.566499710083008,77.10310363769531,40.080101013183594,116.58499908447266],[28.566499710083008,77.10310363769531,25.2527999878,55.3643989563],[-33.9648017883,18.6016998291,-1.31923997402,36.9277992249],[-1.31923997402,36.9277992249,25.2527999878,55.3643989563],[41.8002778,12.2388889,51.4706,-.461941],[41.8002778,12.2388889,40.471926,-3.56264],[19.4363,-99.072098,25.79319953918457,-80.29060363769531],[19.4363,-99.072098,33.94250107,-118.4079971],[19.4363,-99.072098,-12.0219,-77.114304],[-12.0219,-77.114304,-33.393001556396484,-70.78579711914062],[-12.0219,-77.114304,-34.8222,-58.5358],[-12.0219,-77.114304,-22.910499572799996,-43.1631011963],[-34.8222,-58.5358,-33.393001556396484,-70.78579711914062],[-34.8222,-58.5358,-22.910499572799996,-43.1631011963],[22.3089008331,113.915000916,13.681099891662598,100.74700164794922],[22.3089008331,113.915000916,40.080101013183594,116.58499908447266],[22.3089008331,113.915000916,31.143400192260742,121.80500030517578],[35.552299,139.779999,40.080101013183594,116.58499908447266],[35.552299,139.779999,31.143400192260742,121.80500030517578],[33.94250107,-118.4079971,40.63980103,-73.77890015],[33.94250107,-118.4079971,25.79319953918457,-80.29060363769531],[33.94250107,-118.4079971,49.193901062,-123.183998108],[40.63980103,-73.77890015,25.79319953918457,-80.29060363769531],[40.63980103,-73.77890015,51.4706,-.461941],[51.4706,-.461941,40.471926,-3.56264],[40.080101013183594,116.58499908447266,31.143400192260742,121.80500030517578],[-33.94609832763672,151.177001953125,-41.3272018433,174.804992676],[-33.94609832763672,151.177001953125,-6.1255698204,106.65599823],[55.5914993286,37.2615013123,59.651901245117,17.918600082397],[55.5914993286,37.2615013123,41.8002778,12.2388889],[55.5914993286,37.2615013123,40.080101013183594,116.58499908447266],[55.5914993286,37.2615013123,25.2527999878,55.3643989563]]}();const L=document.querySelector(".circle-block__first-clicked-aria"),w=document.querySelector(".circle-block__third-clicked-aria"),q=document.querySelector(".circle-block__fifth-clicked-aria"),x=document.querySelector(".circle-first__icon"),D=document.querySelector(".staff-bg"),M=document.querySelector(".plan-bg");function k(t,e,a){t.addEventListener("mouseover",()=>{e.classList.add(a)}),t.addEventListener("mouseout",()=>{e.classList.remove(a)})}function A(t,a){let n="";switch(t.split("-")[1]){case"01":n="январь";break;case"02":n="февраль";break;case"03":n="март";break;case"04":n="апрель";break;case"05":n="май";break;case"06":n="июнь";break;case"07":n="июль";break;case"08":n="август";break;case"09":n="сентябрь";break;case"10":n="октябрь";break;case"11":n="ноябрь";break;case"12":n="декабрь";break;default:n=""}e(a,n)}k(w,D,"max-opacity"),k(L,x,"scale"),k(q,M,"white-stroke"),function(t){const e=document.querySelector(".vaccination__diagram-descr span"),a=(()=>{let e=t.toString().split("");return+e[e.length-1]})();let n="челове";n+=2===a||3===a||4===a?"ка":"к",e.textContent=n}(u.total),e("students__diagram-info__value_bachelors",n(S.groups.bachelors)),e("students__diagram-info__value_specialists",n(S.groups.specialists)),e("students__diagram-info__value_magisters",n(S.groups.magisters)),A(y,"students__diagram-month-text"),A(d,"science__diagram-month-text");e("footer__btns-val",n(1001)),e("finance__main-data__value_budget",s.budget),e("finance__main-data__value_cash",s.cash),e("science__main-data__value_publications",s.publications),e("science__main-data__value_progress",s.progress),e("science__main-data__value_contracts",s.contracts),e("international__main-data__value_rate",s.rate)});