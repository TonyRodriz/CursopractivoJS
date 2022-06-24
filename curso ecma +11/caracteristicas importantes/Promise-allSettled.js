const promise1 = nre Promise((resolve, reject) => reject("reject"));
const promise2 = nre Promise((resolve, reject) => resolve("resolve"));
const promise3 = nre Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))

//promise.all => va a ser rechazada cuando sea rechazada alguna de estas promesas.

//Promise.allSettled => no le importa el estado de las promesas solo esperara a que todas sean resueltas.