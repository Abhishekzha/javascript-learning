var dataBase=[
    {
        username:'Abhishek',
        password:'Abhishek123'
    },
    {
        username:'Binod',
        password:'binod123'
    },
    {
        username:'Ranu',
        password:'Ranu123'
    }
];

var timeLine=[
    {
        username:'Ravi',
        post:"I want to be millionaire"
    },
     {
        username:'Abhishek',
        post:"I want to be Billionaire"
     }
];

var usernamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password?");

var isValid=function(username,password){
    for(i=0;i<dataBase.length;i++){
        if(dataBase[i].username===username && dataBase[i].password===password){
            return true;
        }
    }
    return false;
}

var signIn=function(username,password){
    if(isValid(username,password)){
        console.log(timeLine)
    }else{
        console.log("oops!! wrong credential")
    }
}
signIn(usernamePrompt,passwordPrompt);




