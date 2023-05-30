var user = "admin";
switch (user) {
    case "admin":
        console.log("gets the full access");
        
        break;
    case "subadmin" :
        console.log("gets access to create/delete courses");
        break;

    case "testprep" :
        console.log("gets access to create/delete tests");
        break;

    case "user" :
        console.log("gets access to consume content");


    default: console.log("Trial user");
        break;
}