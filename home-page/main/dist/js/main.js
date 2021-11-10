document.addEventListener("DOMContentLoaded",()=>{function e(e,t){let n;return n=t>100?e.length:Math.round(e.length/100*t),n}document.querySelector("#plugLeft").addEventListener("click",()=>{}),document.querySelector("#plugRight").addEventListener("click",()=>{}),document.querySelector("#portraits").addEventListener("click",()=>{}),document.querySelector("#priority").addEventListener("click",()=>{}),document.querySelector("#all_branches").addEventListener("click",()=>{}),document.querySelector("#plan").addEventListener("click",()=>{}),document.querySelector("#staff").addEventListener("click",()=>{}),document.querySelector("#finance").addEventListener("click",()=>{}),document.querySelector("#science").addEventListener("click",e=>{let t=e.target;t.hasAttribute("data-btn")&&function(e){const t=e.getAttribute("data-btn"),n=document.querySelectorAll(".science__list-item");let a="";switch(t){case"wos":a="#FB9B2B";break;case"wosQ1Q2":a="#FFDD85";break;case"scopus":a="#217AFF";break;case"scopusQ1Q2":a="#44BCFF"}for(let e of n)e.classList.remove("science__list-item_active"),e.getAttribute("data-btn")==t&&e.classList.add("science__list-item_active");l(u,t,a)}(t)}),document.querySelector("#international").addEventListener("click",()=>{}),document.querySelector("#vaccination").addEventListener("click",()=>{}),document.querySelector("#vaccination").addEventListener("click",()=>{});const t=(e,t)=>document.querySelector("."+e).innerHTML=t;function n(e){let t,n=e.toString();if(-1!==n.indexOf(".")){n=e.toString().split(".");const a=n[0],r=n[1];t=a.length<=3?a:a.replace(/(\d)(?=(\d{3})+$)/g,"$1 "),t+="."+r}else t=n.length<=3?n:n.replace(/(\d)(?=(\d{3})+$)/g,"$1 ");return t}!function(e,t,n=3200){const a=Array.from(document.querySelectorAll(".absolute-progrss-bar")),r=Array.from(document.querySelectorAll(".quality-progrss-bar")).reverse();let o=s(a,e),c=s(r,t);function s(e,t){let n;return n=t>100?e.length:Math.round(e.length/100*t),n}function i(e,t,n){for(let a=0;a<t;a++)e[a].style.fill=n}setTimeout(()=>{i(a,o,"#FB9B2B"),i(r,c,"#217AFF")},n),document.querySelector(".performance-diagram-quality-value").textContent=t+"%",document.querySelector(".performance-diagram-absolute-value").textContent=e+"%"}(77,55);!function(e){for(let t in e)document.querySelector(".circle-block__value_"+t).textContent=e[t]}({students:4844,rate:5,teachers:1279,scientists:347,score:4.2,contracts:111,progress:39.62,publications:1078,cash:3.45,budget:4.08});const a={date:"15.01.2021",total:6e8,budgetResources:1092045473,otherResources:1572394226,wageFund:2664439699,landTax:65185520,propertyTax:45229727};var r;t("finance__total-value",n((r=a).total)),t("finance__diagram-value_budget-resources",n(r.budgetResources)),t("finance__diagram-value_other-resources",n(r.otherResources)),t("finance__diagram-value_wage-fund",n(r.wageFund)),t("finance__diagram-value_land-tax",n(r.landTax)),t("finance__diagram-value_property-tax",n(r.propertyTax));const o={date:"07.10.2021",foreignStudents:1224,nonresidentStudents:6556,partners:"XX"};!function(e){t("international__value_foreign-students",n(e.foreignStudents)),t("international__value_nonresident-students",n(e.nonresidentStudents)),t("international__value_partners",e.partners)}(o);const c={date:"01.10.2021",total:3345,vaccinated:2457,unvaccinated:887,recovered:1050,unsuitable:232,sick:108};!function(e){const t=t=>Math.ceil(t/[e.vaccinated,e.unvaccinated,e.recovered,e.sick,e.unsuitable].reduce((e,t)=>e+t)*100),n=(e,n)=>`\n                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <svg class="vaccination__graphiс-data" width="${t(e+1)}" x="0" y="0" >\n                    <rect class="vaccination__graphiс-row" fill=${n} x="0" y="0" transform="translate(-5)"/>\n                    <text class="vaccination__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">\n                        ${e}\n                    </text>\n                </svg>\n            </svg>`;!function(e){const t=document.createElement("div");t.classList.add("vaccination__graphiс"),t.innerHTML=`\n\n                ${n(e.vaccinated,"#217AFF")}\n                ${n(e.unvaccinated,"#6C38FF")}\n                ${n(e.recovered,"#A7EB17")}\n                ${n(e.unsuitable,"#FB9B2B")}\n                ${n(e.sick,"#FD6A6A")}\n           \n            `,document.querySelector(".vaccination__diagram-wrap").append(t)}(e),document.querySelector(".vaccination__diagram-value").textContent=e.total}(c);const s="21.11.2021",i={scopus:{scopusTotal:694,q1q2Total:113,scopusInSixMonths:[{month:"Май",value:151},{month:"Июнь",value:112},{month:"Июль",value:70},{month:"Август",value:94},{month:"Сентябрь",value:59},{month:"Октябрь",value:41}],q1q2InSixMonths:[{month:"Май",value:25},{month:"Июнь",value:59},{month:"Июль",value:28},{month:"Август",value:45},{month:"Сентябрь",value:33},{month:"Октябрь",value:13}]},wos:{wosTotal:407,q1q2Total:113,wosInSixMonths:[{month:"Май",value:55},{month:"Июнь",value:32},{month:"Июль",value:61},{month:"Август",value:68},{month:"Сентябрь",value:44},{month:"Октябрь",value:44}],q1q2InSixMonths:[{month:"Май",value:18},{month:"Июнь",value:7},{month:"Июль",value:6},{month:"Август",value:8},{month:"Сентябрь",value:6},{month:"Октябрь",value:17}]}};function l(e,t,n="#FB9B2B"){const a=Array.from(document.querySelectorAll(".wos rect")),r=Math.max(...e[t]);a.map((a,o)=>{let c=e[t][o]/r*100;a.setAttribute("fill",n),a.setAttribute("height",c+"%"),a.setAttribute("y",100-c+"%")}),document.querySelector(".science__diagram-value").textContent=r}!function(a){const r=(a.currentReceipts/a.currentPlan*100).toFixed(2),o=Array.from(document.querySelectorAll(".science__plan-progressbar-item"));!function(e,t,n){for(let a=0;a<t;a++)e[a].setAttribute("fill-opacity",n)}(o,e(o,r),1),t("science__plan-ratio",r+"%"),t("science__plan-value",n(a.currentPlan)),t("science__legend-value_current-receipts",n(a.currentReceipts)),t("science__legend-value_expected-receipts",n(a.expectedReceipts))}({currentPlan:50000.6,currentReceipts:199583.4,expectedReceipts:233203.6,progress:80.62});const u=function(e){const t=e=>e.map(e=>e.value),n={};return n.wos=t(e.wos.wosInSixMonths),n.wosQ1Q2=t(e.wos.q1q2InSixMonths),n.scopus=t(e.scopus.scopusInSixMonths),n.scopusQ1Q2=t(e.scopus.q1q2InSixMonths),n}(i);l(u,"wos");const d="2.10.2021",m={hours:950537,ratio:6.7},_={occupation:{fullTime:31064,distance:5634,extramural:7061},payment:{public:9831,nonBudget:33928},groups:{bachelors:14535,specialists:1360,magisters:2663}};function p(e,n,...a){const r=e.toString().split("."),o=new Date,c=+r[1],s=(new Date).getFullYear(),i=Array.from(document.querySelectorAll(`.${a[0]} path`));let l=[];const u=e=>e<10?"0"+e:e,d=()=>{const e=new Date(o.getFullYear(),0,0),t=new Date-e,n=Math.floor(t/864e5);return Math.floor(n/365*100)};function m(e,t,n){for(let a=0;a<t;a++)e[a].setAttribute("fill-opacity",n)}if(n){l=Array.from(document.querySelectorAll(`.${a[1]} path`)),m(l,15,1),t(a[1]+"-value",d()+"% год"),function(){const e=Math.round(.15*(100-d()));m(l,e,.2)}()}m(i,15,.2),function(){const e=15/new Date(s,c,0).getDate(),t=Math.round(+r[0]*e);m(i,t,1)}(),t(a[0]+"-value",`${u(+r[0])}.${u(c)}.${s}`)}!function(n){const a=Array.from(document.querySelectorAll(".students__employment-diagram path")).reverse();!function(e,t,n){for(let a=0;a<t;a++)e[a].style.fill=n}(a,e(a,n),"#FB9B2B"),t("students__employment-value",n+"%")}(91),function(n){const a=Array.from(document.querySelectorAll(".students__teaching-load-progressbar span"));!function(e,t,n){for(let a=0;a<t;a++)e[a].style.backgroundColor=n}(a,e(a,n.ratio),"#1A5FC7"),t("spanstudents__teaching-load-value",n.hours),t("students__teaching-load-ratio",n.ratio+"%")}(m),function(e){const t=Array.from(document.querySelectorAll(".students__graphic svg"));function n(...e){return e.reduce((e,t)=>e+t)}const a=(e,t)=>Math.ceil(e/t*100),r=n(e.occupation.fullTime,e.occupation.distance,e.occupation.extramural),o=n(e.payment.public,e.payment.nonBudget);t[0].setAttribute("width",a(e.occupation.fullTime,r)),t[1].setAttribute("width",a(e.occupation.distance,r)),t[2].setAttribute("width",a(e.occupation.extramural,r)),t[3].setAttribute("width",a(e.payment.public,o)),t[4].setAttribute("width",a(e.payment.nonBudget,o))}(_),p(a.date,!0,"calendar__month-progress-bar__finance","calendar__year-progress-bar__finance"),p(s,!0,"calendar__month-progress-bar__science","calendar__year-progress-bar__science"),p(c.date,!0,"calendar__month-progress-bar__vaccination","calendar__year-progress-bar__vaccination"),p(o.date,!0,"calendar__month-progress-bar__international","calendar__year-progress-bar__international"),p(d,!1,"calendar__month-progress-bar__students"),function(){let e,t=[];function n(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function a(e){var o=r[n(0,r.length-1)];t[e].location={lat:o[0],lng:o[1]},t[e].animate("scale",.5,{duration:320,complete:function(){this.animate("scale",.2,{duration:320,complete:function(){setTimeout((function(){a(e)}),n(100,400))}})}})}e=new Earth("myearth",{location:{lat:20,lng:20},light:"none",mapImage:"../assets/img/main/hologram-map.svg",transparent:!0,autoRotate:!0,autoRotateSpeed:5,autoRotateDelay:100,autoRotateStart:1e3}),e.addEventListener("ready",(function(){this.startAutoRotate();var e={color:"#009CFF",opacity:.15,hairline:!0,offset:-.5};for(var n in r)e.locations=[{lat:r[n][0],lng:r[n][1]},{lat:r[n][2],lng:r[n][3]}],this.addLine(e);for(n=0;n<8;n++)t[n]=this.addSprite({image:"../assets/img/main/hologram-shine.svg",scale:1,offset:-.5,opacity:1}),a(n)}));var r=[[59.651901245117,17.918600082397,41.8002778,12.2388889],[59.651901245117,17.918600082397,51.4706,-.461941],[13.681099891662598,100.74700164794922,-6.1255698204,106.65599823],[13.681099891662598,100.74700164794922,28.566499710083008,77.10310363769531],[30.12190055847168,31.40559959411621,-1.31923997402,36.9277992249],[30.12190055847168,31.40559959411621,25.2527999878,55.3643989563],[30.12190055847168,31.40559959411621,41.8002778,12.2388889],[28.566499710083008,77.10310363769531,7.180759906768799,79.88410186767578],[28.566499710083008,77.10310363769531,40.080101013183594,116.58499908447266],[28.566499710083008,77.10310363769531,25.2527999878,55.3643989563],[-33.9648017883,18.6016998291,-1.31923997402,36.9277992249],[-1.31923997402,36.9277992249,25.2527999878,55.3643989563],[41.8002778,12.2388889,51.4706,-.461941],[41.8002778,12.2388889,40.471926,-3.56264],[19.4363,-99.072098,25.79319953918457,-80.29060363769531],[19.4363,-99.072098,33.94250107,-118.4079971],[19.4363,-99.072098,-12.0219,-77.114304],[-12.0219,-77.114304,-33.393001556396484,-70.78579711914062],[-12.0219,-77.114304,-34.8222,-58.5358],[-12.0219,-77.114304,-22.910499572799996,-43.1631011963],[-34.8222,-58.5358,-33.393001556396484,-70.78579711914062],[-34.8222,-58.5358,-22.910499572799996,-43.1631011963],[22.3089008331,113.915000916,13.681099891662598,100.74700164794922],[22.3089008331,113.915000916,40.080101013183594,116.58499908447266],[22.3089008331,113.915000916,31.143400192260742,121.80500030517578],[35.552299,139.779999,40.080101013183594,116.58499908447266],[35.552299,139.779999,31.143400192260742,121.80500030517578],[33.94250107,-118.4079971,40.63980103,-73.77890015],[33.94250107,-118.4079971,25.79319953918457,-80.29060363769531],[33.94250107,-118.4079971,49.193901062,-123.183998108],[40.63980103,-73.77890015,25.79319953918457,-80.29060363769531],[40.63980103,-73.77890015,51.4706,-.461941],[51.4706,-.461941,40.471926,-3.56264],[40.080101013183594,116.58499908447266,31.143400192260742,121.80500030517578],[-33.94609832763672,151.177001953125,-41.3272018433,174.804992676],[-33.94609832763672,151.177001953125,-6.1255698204,106.65599823],[55.5914993286,37.2615013123,59.651901245117,17.918600082397],[55.5914993286,37.2615013123,41.8002778,12.2388889],[55.5914993286,37.2615013123,40.080101013183594,116.58499908447266],[55.5914993286,37.2615013123,25.2527999878,55.3643989563]]}();const h=document.querySelector(".circle-block__first-clicked-aria"),v=document.querySelector(".circle-block__third-clicked-aria"),g=document.querySelector(".circle-block__fifth-clicked-aria"),f=document.querySelector(".circle-first__icon"),y=document.querySelector(".staff-bg"),b=document.querySelector(".plan-bg");function S(e,t,n){e.addEventListener("mouseover",()=>{t.classList.add(n)}),e.addEventListener("mouseout",()=>{t.classList.remove(n)})}function q(e,n){let a="";switch(e.split(".")[1]){case"01":a="январь";break;case"02":a="февраль";break;case"03":a="март";break;case"04":a="апрель";break;case"05":a="май";break;case"06":a="июнь";break;case"07":a="июль";break;case"08":a="август";break;case"09":a="сентябрь";break;case"10":a="октябрь";break;case"11":a="ноябрь";break;case"12":a="декабрь";break;default:a=""}t(n,a)}S(v,y,"max-opacity"),S(h,f,"scale"),S(g,b,"white-stroke"),function(e){const t=document.querySelector(".vaccination__diagram-descr span"),n=(()=>{let t=e.toString().split("");return+t[t.length-1]})();let a="челове";a+=2===n||3===n||4===n?"ка":"к",t.textContent=a}(c.total),t("students__diagram-info__value_bachelors",n(_.groups.bachelors)),t("students__diagram-info__value_specialists",n(_.groups.specialists)),t("students__diagram-info__value_magisters",n(_.groups.magisters)),q(d,"students__diagram-month-text"),q(s,"science__diagram-month-text")});