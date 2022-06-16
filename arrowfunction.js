const names = [
    {name: 'oscar', age: 32}
    {name: 'yesica', age: 27}
]

// JS A
let listOfNames = names.map(function(item)){
    console.log(item.name)
}

//Ecma

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;