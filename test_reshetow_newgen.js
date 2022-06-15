// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const deleteNull = courses.map(item => {
        let firstValue ;
        let name;
        name = item.name
        firstValue = item.prices[0];
        if(item.prices[1] == null){
            return {name: name, prices: [firstValue, 1000]}
        } else return item
    })
//обрабатываем массив, чтобы избавится от налов в конце цены

function editRange (range){
    for(let i = 0; i<range.length; i++){
        if(range[i] == null){
            range[i] = 1000
        }
    }
}
editRange(requiredRange3)
//обрабатываем фильтр, чтобы избавиться от нала
//Во всех обработках ставлю вместо нала 1000, но там должно стоять максимальное значение от всех курсов, либо инфинити(с ним могут сложности быть)
//первые налы не трогаю, тк они при сравнении станут нулями

//item.prices[1]===null ? {...item.prices, prices[1]: 1000} : item.prices
console.log(deleteNull)

const filteredResult = (range) => deleteNull.filter((course) => {

        if(course.prices[0] >= range[0] && course.prices[1] <= range[1]) return course;
    })
//фильтруем пришедшие курсы, общий метод в который подставляется массив из фильтров

// [подходящие курсы для каждого варианта фильтра]

console.log('from 0 to 200', filteredResult(requiredRange1))
console.log('from 100 to 350', filteredResult(requiredRange2))
console.log('more then 200', filteredResult(requiredRange3))

