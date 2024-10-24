const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Sí jaló perrillo!!!')
        } else {
            reject('Te la pellizcaste :c')
        }
    });
}

anotherFunction()
    .then(response => console.log(`Promise dice: ${response}`))
    .catch(err => console.log(`Promise dice: ${err}`))
    .finally(() => console.log('Y tu tiempo se acabó xD'))