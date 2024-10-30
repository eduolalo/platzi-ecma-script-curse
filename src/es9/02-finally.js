const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('༼ つ ◕_◕ ༽つ')
        } else {
            reject('༼ つ ಥ_ಥ ༽つ')
        }
    });
}

anotherFunction()
    .then(response => console.log(`Promise dice: ${response}`))
    .catch(err => console.log(err))
    .finally(() => console.log(`¯\\\_(ツ)_/¯`))