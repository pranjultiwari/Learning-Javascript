var getUserRole = function (name, role){
    switch (role) {
        case "admin":
        return`${name}gets the full access.`
        
        break;
    case "subadmin" :
        return`${name}gets access to create/delete courses.`
        break;

    case "testprep" :
        return`${name}gets access to create/delete tests.`
        break;

    case "user" :
        return`${name}gets access to consume content.`


    default: return`Trial user.`
        break;
    }
}

console.log(getUserRole("karan " ,"testprep"))