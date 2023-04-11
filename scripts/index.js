const inputs =document.querySelectorAll('[type="text"]');
const outputs = document.querySelectorAll('.outputs>p');

const msg = document.querySelectorAll('form>div>p')
msg.forEach(e=>e.style.display="none")
let i=0;
while(i<outputs.length){
    outputs[i].firstChild.style.color="var(--Purple)"
    i++
}
outputs[0].firstChild

const currentDate = new Date(); 
currentDate.setMonth(4);
const btn = document.querySelector('.btn');

function ageCalc(){
    const birthYear = Number(inputs[2].value);
    const currentYear = Number(currentDate.getFullYear())
    let diffrenceYears = birthYear>currentYear?birthYear-currentYear:currentYear-birthYear;

    const birthMonth= Number(inputs[1].value);
    const currentMonth = Number(currentDate.getMonth())
    let diffrenceMonth = birthMonth>currentMonth?birthMonth-currentMonth:currentMonth-birthMonth;

    const birthBay= Number(inputs[0].value);
    const currentDay = Number(currentDate.getDate())
    let diffrenceDays = birthBay>currentDay?birthBay-currentDay:currentDay-birthBay;

    const ageDays = (diffrenceYears * 365) + (diffrenceMonth * 31) + diffrenceDays;
    const remainDays = ageDays%365;

    let age_years= Math.floor(ageDays/365);
    let age_Months= Math.floor(remainDays/31);
    const age_days =remainDays%31;

    if(birthMonth!==currentMonth){
        age_years= Math.floor(ageDays/365)-1;
    }else{
        age_years= Math.floor(ageDays/365);
    }
    if(birthBay<currentDay){
        age_Months= Math.floor(remainDays/31)+1;
    }else{
        age_Months= Math.floor(remainDays/31);
    }

    outputs[0].firstChild.textContent=age_years
    outputs[1].firstChild.textContent=age_Months
    outputs[2].firstChild.textContent=age_days

    // console.log(birthYear)
    // console.log(birthMonth)
    // console.log(birthBay)
    // console.log(diffrenceYears)
    // console.log(diffrenceMonth)
    // console.log(diffrenceDays)
    // console.log(ageDays)
    // console.log(age_years)
    // console.log(age_Months)
     // console.log(age_days)

}

btn.addEventListener('click', ageCalc)
inputs.forEach(e=>e.addEventListener('input', ()=>{
    let validDay= Number(inputs[0].value)>31?false:true;
    if(validDay===false){
        msg[0].style.display='block';        
    }else{
        msg[0].style.display='none'
    }

    let validMonth= Number(inputs[1].value)>12?false:true;
    if(validMonth===false){
        msg[1].style.display='block';
    }else{
        msg[1].style.display='none'    
    }

    let validYear= Number(inputs[2].value)>currentDate.getFullYear()?false:true;
    if(validYear===false){
        msg[2].style.display='block';
    }else{
        msg[2].style.display='none'    
    }



    let i = 0;
    while(i<inputs.length){
        if(inputs[i].value.length===0 || (validYear===false||validMonth===false||validDay===false)){
            btn.removeEventListener("click", ageCalc);
            break
        }else{
            btn.addEventListener("click", ageCalc) 
        }
        i++
    }
}))
