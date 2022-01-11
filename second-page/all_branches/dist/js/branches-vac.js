document.addEventListener("DOMContentLoaded",()=>{const a=[{totalStaffAllBranches:1257,totalVaccinated:913,totalUnvaccinated:185,totalrecovered:54,totalUnsuitable:100,totalSick:5},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:666},{branchName:"Брянск",totalStaff:84,vaccinated:167,unvaccinated:12,recovered:0,unsuitable:90,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:99,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:3,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:67,unvaccinated:12,recovered:0,unsuitable:111111113,sick:0},{branchName:"Брянск",totalStaff:84,vaccinated:167,unvaccinated:2212,recovered:0,unsuitable:3,sick:0}];class t{constructor(a,t,e,c,n,i,s,r){this.branchName=a,this.totalStaff=t,this.vaccinated=e,this.unvaccinated=c,this.recovered=n,this.sick=s,this.unsuitable=i,this.vaccinatedColor="#217AFF",this.unvaccinatedColor="#6C38FF",this.recoveredColor="#A7EB17",this.sickColor="#FD6A6A",this.unsuitableColor="#FB9B2B",this.className="branches-vac__list-item",this.parent=document.querySelector(r),this.categoryRatio(),this.setGraphiс()}get sumData(){return[this.vaccinated,this.unvaccinated,this.recovered,this.sick,this.unsuitable].reduce((a,t)=>a+t)}categoryRatio(a){return Math.ceil(a/this.sumData*100)}"setGraphiс"(a,t){return`\n                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <svg class="branches-vac__graphiс-data" width="${this.categoryRatio(a)+1}" x="0" y="0" >\n                        <rect class="branches-vac__graphiс-row" fill=${t} x="0" y="0" transform="translate(-10)"/>\n                        <text class="branches-vac__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">\n                            ${this.categoryRatio(a)}%\n                        </text>>\n                    </svg>\n                </svg>\n            `}render(){const a=document.createElement("div");a.classList.add(this.className),a.innerHTML=`\n            <div class="branches-vac__list-info">\n                <div class="branches-vac__list-title">${this.branchName}</div>\n                <div class="branches-vac__list-staff">\n                    <div class="branches-vac__list-value">${this.totalStaff}</div>\n                    <div class="branches-vac__list-descr">человека <br> всего</div>\n                </div>\n            </div>\n            <div class="branches-vac__graphiс">\n                ${this.setGraphiс(this.vaccinated,this.vaccinatedColor)}\n                ${this.setGraphiс(this.unvaccinated,this.unvaccinatedColor)}\n                ${this.setGraphiс(this.recovered,this.recoveredColor)}\n                ${this.setGraphiс(this.sick,this.sickColor)}\n                ${this.setGraphiс(this.unsuitable,this.unsuitableColor)}\n            </div>\n            `,this.parent.append(a)}}const e=a.filter((a,t)=>0!==t),c=(a,t)=>document.querySelector("."+a).textContent=t;var n;e.forEach(({branchName:a,totalStaff:e,vaccinated:c,unvaccinated:n,recovered:i,unsuitable:s,sick:r})=>{new t(a,e,c,n,i,s,r,".branches-vac__list").render()}),n=a[0],c("branches-vac__diagramm-value",n.totalStaffAllBranches),c("branches-vac__legend-data-value_sick",n.totalSick),c("branches-vac__legend-data-value_vaccinated",n.totalVaccinated),c("branches-vac__legend-data-value_unvaccinated",n.totalUnvaccinated),c("branches-vac__legend-data-value_recovered",n.totalrecovered),c("branches-vac__legend-data-value_unsuitable",n.totalUnsuitable)});