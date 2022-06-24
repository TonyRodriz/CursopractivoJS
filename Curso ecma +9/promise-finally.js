
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve ('hello world')
        : reject (new Error('test Error'))
    });
};

helloWorld()
.then (response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))


// utilizando el setTimeout

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve ('hello world', 3000))
        : reject (new Error('test Error'))
    });
};

helloWorld()
.then (response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))