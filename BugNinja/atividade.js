class User{

    constructor(name, IsAdmin){
        this.name = name;
        this.IsAdmin = IsAdmin;
    }
    GrantAccess(){
        console.log("Acesso concedido");
    }


}
const user = new User("Alan Gabryel", true);
if (user.IsAdmin == true) { user.GrantAccess(); }

