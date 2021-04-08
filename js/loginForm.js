let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");
          
function register()
{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
    document.title="S'inscrire"
}

function login()
{
    x.style.left="50px";
    y.style.left="400px";
    z.style.left="0px";
    document.title="Se connecter";
}

function check()
{
    if(sessionStorage.getItem("statut") == "S'inscrire")
    {
        register(); 
    }
    else
    {
        login();
    }
}

check();