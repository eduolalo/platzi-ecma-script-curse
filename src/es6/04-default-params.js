function newUser(name, age, country){
    var name = name || 'Eduardo';
    var age = age || 36;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Oscar', 23, 'CO')

function newAdmin(name = 'Eduardo', age = 36, country = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Elver Gonzuela', 23, 'CL')