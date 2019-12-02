
var first_name=document.getElementById('t1');
var last_name=document.getElementById('t2');
var email=document.getElementById('t3');
var username=document.getElementById('t4');
var password=document.getElementById('t5');
var phone=document.getElementById('t6');
var sex_male=document.getElementById('r1op1');
var sex_female=document.getElementById('r1op1');
var agree=document.getElementById('c1');
var btn=document.getElementById("btn");
btn.addEventListener("click",verif);


function alertbootstrap(valeur,champ)
{

    
    var alertdiv=document.createElement('DIV') ;
    alertdiv.setAttribute('class','alert alert-danger text-danger bg-dark');
    alertdiv.setAttribute('role','alert');

    if (valeur=="agree")
    {
        var pere=champ.parentElement.parentElement;
        alertdiv.innerHTML=" please agree with Terms and Conditions ";


    }

    else if(valeur=="success")
    {
        alertdiv.setAttribute('class','alert alert-success bg-success');
        alertdiv.innerHTML=" <h4 class='alert-heading'>Well done!</h4>You successfully Subscribed";


    }

    else
    alertdiv.innerHTML="<strong>Warning!</strong>Check your "+valeur;
    var pere=champ.parentElement.parentElement;

    
    pere.appendChild(alertdiv);

}
function validateEmail(email) {
    //source stackoverflow
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function verif()
{
    if(first_name.value.length==0 ||!isNaN(first_name.value))
    {

        alertbootstrap("first name",first_name);
        window.setInterval(function(){location.reload();}, 5000);


        return false;


    }

    if(last_name.value.length==0 ||!isNaN(last_name.value))
    {
        alertbootstrap("last name",last_name);
        window.setInterval(function(){location.reload();}, 5000);

        return false;

    }
    if(email.value.length==0 ||!validateEmail(email.value))
    {
        alertbootstrap("email",email);
        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }

    if(username.value.length<6)
    {
        alertbootstrap("username",username);
        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }
    if(password.value.length<8)
    {
        alertbootstrap("password",password);
        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }
    if(phone.value.length!=8 ||isNaN(phone.value))
    {
        alertbootstrap("phone number",phone);
        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }

    if(sex_male.value.checked==0 &&sex_female.value.checked==0 )
    {
        alertbootstrap("sex",sex_male.parentElement);


        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }

    if(!agree.checked)
    {
        alertbootstrap("agree",agree);
        window.setInterval(function(){location.reload();}, 5000);

        return false;
    }
    alertbootstrap("success",agree.parentElement);




}

