/*переменные*/
let API = document.querySelector('.todoApi'); 
twenty = 0; 
twentyfive = 0;  
thirty = 0;
thirtyfive = 0;
forty = 0;
fortyfive = 0;
fifty = 0;
girl = 0; 
boy = 0;  

/*api*/
fetch('http://localhost:4444/api/v1/company/employees')  
.then(response => response.json()) 
.then(api => {
  
/*определяем возраст*/   
for (let i = 0; i < 40; i++) {
let item = document.createElement('p'); 
age = api[i].birthdate;
gender = api[i].gender;
checkage = ((new Date().getTime() - new Date(age)) / (24 * 3600 * 365.25 * 1000)) | 0;

/*считаем сколько в каждой группе людей*/
if (checkage <= 20) {twenty = twenty + 1;}
else if (checkage <= 25) {twentyfive = twentyfive + 1;}
else if (checkage <= 30) {thirty = thirty + 1;}
else if (checkage <= 35) {thirtyfive = thirtyfive + 1;}
else if (checkage <= 40) {forty = forty + 1;}
else if (checkage <= 45) {fortyfive = fortyfive + 1;}
else if (checkage <= 50) {fifty = fifty + 1;}

/*определяем пол*/
if( gender == "Женский") {girl = girl + 1;}
else {boy = boy + 1;}

/*вводим полученные возраста в массив*/
let massAge = [twenty, twentyfive, thirty, thirtyfive, forty, fortyfive, fifty];
API.appendChild(item)

/*вывод диаграммы ВОЗРАСТ*/
var myChart = echarts.init(document.getElementById('main'));
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
var myChart = echarts.init(document.getElementById('gender'));
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