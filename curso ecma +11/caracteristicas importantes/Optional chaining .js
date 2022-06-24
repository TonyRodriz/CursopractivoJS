// con esto vamos a poder trabajar diferentes niveles de recursos.

const user = {};

console.log(user?.profile?.email);

//al colocar los signos de interrogacion en user y profile le estamos diciendo al codigo que no rompa la app o pagina porque no exista, esto te permite trabajar asi no tengas la app o web desarrollada.. te arroja un undefined.

if (user?.profile?.email){
    console.log('email')
} else {
    console.log('fail')
}

