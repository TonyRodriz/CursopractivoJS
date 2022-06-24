const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout (() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//Asi se trabaja de forma correcta el async y el await

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();