/*переменные*/
let API = document.querySelector('.todoApi'); 
let twenty = 0; 
let twentyfive = 0;  
let thirty = 0;
let thirtyfive = 0;
let forty = 0;
let fortyfive = 0;
let fifty = 0;
let girl = 0; 
let boy = 0;  

/*api*/
fetch('https://statistic-public.vercel.app/api/v1/company/employees')  
.then(response => response.json()) 
.then(api => {
  
/*определяем возраст*/   
for (let i = 0; i < 40; i++) {
let item = document.createElement('p'); 
let age = api[i].birthdate;
let gender = api[i].gender;
checkage = ((new Date().getTime() - new Date(age)) / (24 * 3600 * 365.25 * 1000)) | 0;
console.log(checkage);

/*считаем сколько в каждой группе людей*/
if (checkage <= 20) {
    twenty = twenty + 1;
} else if (checkage <= 25) {
    twentyfive = twentyfive + 1;
} else if (checkage <= 30) {
    thirty = thirty + 1;
} else if (checkage <= 35) {
    thirtyfive = thirtyfive + 1;
} else if (checkage <= 40) {
    forty = forty + 1;
} else if (checkage <= 45) {
    fortyfive = fortyfive + 1;
} else if (checkage <= 50) {
    fifty = fifty + 1;
}

console.log(twenty);
console.log(twentyfive);
console.log(thirty);
console.log(thirtyfive);
console.log(forty);
console.log(fortyfive);
console.log(fifty);


// определяем пол
if (gender == "Женский") {
    girl = girl + 1;
} else {
    boy = boy + 1;
}



/*вводим полученные возраста в массив*/
let massAge = [twenty, twentyfive, thirty, thirtyfive, forty, fortyfive, fifty];
API.appendChild(item);


/*вывод диаграммы ВОЗРАСТ*/
var echarts = require('echarts');
var myChart = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
option = {
// всплывающее окно при наведении
tooltip: {
trigger: 'axis',
axisPointer: {
type: 'shadow'
},
backgroundColor: '#ffffff',
},
xAxis: {
type: 'category',
data: ['18-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50']
},
yAxis: {type: 'value'},
series: [{
data: massAge,
type: 'bar'
}]};
myChart.setOption(option);


/*вывод диаграммы ПОЛ*/
var echarts = require('echarts');
var myChart = document.getElementById('gender');
var myChart = echarts.init(chartDom);
var option;
option = {
// всплывающее окно при наведении
tooltip: {
trigger: 'axis',
axisPointer: {
type: 'shadow'
},
backgroundColor: '#ffffff',
},   
xAxis: {
type: 'category',
data: ['Мужской', 'Женский']
},
yAxis: {type: 'value'},
series: [{
data: [boy, {value: girl, itemStyle: {color: '#FF1493'}}],
type: 'bar'
}]};
myChart.setOption(option);

}});