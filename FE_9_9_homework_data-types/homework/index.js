let findType = (param) => typeof param;


let forEachFun = (array,action) => {
    for(let i = 0; i < array.length; i++){
        action(array[i]);
    }
};


let mapFun = (array,action) => {
    let mapped = [];
    forEachFun(array, function(el){
        mapped.push(action(el));
    })
    return mapped;
}


let filterFun = (array,action) => {
    let filtered = [];
    forEachFun(array, function(el){
        if(action(el)){
            filtered.push(el);
        }
    })
    return filtered;
}


let getName = (data) => {
    let stringifyData = JSON.stringify(data);
    let parseData = JSON.parse(stringifyData);
    return mapFun(filterFun(parseData, function(el){
        return el.age > 18 && el.favoriteFruit === 'apple';
    }), function (el){
            return el.name;
    });
}


let keys = (obj) => {
    let arrayOfKeys = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arrayOfKeys.push(key);
        }
    }
    return arrayOfKeys;
}


let values = (obj) => {
    let arrayOfValues = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arrayOfValues.push(obj[key]);
        }
    }
    return arrayOfValues;
}


let showFormattedDate = (date) => {
    let mounth = 1, day = 2, year = 3;
    let dateToString = date.toDateString();
    let dates = dateToString.split(' ');
    let formatedDate = `It is ${dates[day]} of ${dates[mounth]}, ${dates[year]}`
    return formatedDate;
}