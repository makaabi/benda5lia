
    var canvas=document.getElementById("canvas");
    var context1=canvas.getContext("2d");
    context1.fillStyle="green";
    context1.fillRect(0, 0, canvas.width, 15);
    context2=canvas.getContext("2d");
    var inter;
    var x2=2;
    var y2=85;

    context1.strokeStyle="red";
    context1.lineWidth = 2;
    context1.beginPath();
    context1.moveTo(0, 15);
    context1.lineTo(canvas.width, 15);
    context1.stroke();

    context1.fillStyle="grey";
    context1.fillRect(0, 15, canvas.width, 120);
    context1.beginPath();
    context1.moveTo(0, 145/2);
    context1.strokeStyle="white";
    context1.setLineDash([5, 5]);

    context1.lineTo(canvas.width, 145/2);
    context1.stroke();
   
    context1.setLineDash([]);
    context1.strokeStyle="red";

    context1.beginPath();
    context1.moveTo(0, 135);
    context1.lineTo(canvas.width, 135);
    context1.stroke();
    context1.fillStyle="green";
    context1.fillRect(0, 135, canvas.width, 15);


    x= canvas.width-30;
    y=15;
    for(i=1;i<=8;i++)
    {
        if(i%2==0)
            {
                context1.fillStyle="white";
                context1.fillRect(x, y, 15, 15);
                context1.fillStyle="black";
                context1.fillRect(x+15, y, 15, 15)
            }
            else
            {
                context1.fillStyle="black";
                context1.fillRect(x, y, 15, 15);
                context1.fillStyle="white";
                context1.fillRect(x+15, y, 15, 15)

            }
            y+=15;

    
    }


    context=canvas.getContext("2d");
    context1.strokeStyle="black";

    var height=10;
    var width=22;
    var x=2;
    var y=20;
    
    
    if(document.body.onkeydown)
    document.body.onkeydown=dessiner;

else if(document)
    document.onkeydown=dessiner;

function dessiner(event) {

    context.clearRect(x, y, width, height*2);
    context.fillStyle = "grey";


    event.preventDefault();

    switch(event.keyCode) {
        case 37 : 
        if(x>=7)
            x-=7;
        break;
        case 38 : 
        if(y>=20)
            y-=5;
        break;
        case 39 : 
        if(x<canvas.width-(width+35))
            x+=7;
        break;
        case 40 : 
        if(y<=40)
            y+=5;
        break;    
    }
    context.fillStyle="yellow";

    context.fillRect(x, y, width, height);
    context.beginPath();
    context.arc(x+5, y+14, 4, 0, 2 * Math.PI);
    context.stroke();
    context.fillRect(x, y, width, height);
    context.beginPath();
    context.arc(x+17, y+14, 4, 0, 2 * Math.PI);
    context.stroke();

    if(x>=canvas.width-(width+35) )
    {
        alert("you won");
        clearInterval(inter);
        location.reload();

    }
    else if (x2>=canvas.width-(width+35) )
    {
        alert("you lost");
        clearInterval(inter);
        location.reload();

    }
    }

   
    document.getElementById("start").addEventListener("click", function(){inter=setInterval(startrace,200);});

    function startrace() {
        var list=document.getElementById("level");
        var lev=list.options[list.selectedIndex].value;

    context2.clearRect(x2, y2, width, height*2);
    context2.fillStyle = "grey";
    if(x2<canvas.width-(width+35))
        x2+=5*lev;


    
    context2.fillStyle="red";
    context2.fillRect(x2, y2, width, height);
    context2.beginPath();
    context2.arc(x2+5, y2+14, 4, 0, 2 * Math.PI);
    context2.stroke();
    context2.fillRect(x2, y2, width, height);
    context2.beginPath();
    context2.arc(x2+17, y2+14, 4, 0, 2 * Math.PI);
    context2.stroke();

       
    }
    




    
