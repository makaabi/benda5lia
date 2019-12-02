var boxes=document.getElementsByClassName('box1');
box1=boxes[0];
box2=boxes[1];



box1.addEventListener("dragstart", function(e)
{
    e.dataTransfer.setData('Text', e.target.id);

});

box2.addEventListener("dragstart", function(e)
{
    e.dataTransfer.setData('Text', e.target.id);
});


box1.addEventListener("drop", function(e)
{
    console.log(e);

    e.preventDefault();

    var ball = e.dataTransfer.getData('Text');

    e.target.appendChild(document.getElementById(ball));
});


box2.addEventListener("drop", function(e)
{
    e.preventDefault();
    var ball = e.dataTransfer.getData('Text');
    e.target.appendChild(document.getElementById(ball));
});



function sum(c)
{
    s=0;

    for(i=1;i<c.length;i++)
    {
        if(!isNaN(parseInt(c[i].textContent)))
        {
        x=parseInt(c[i].textContent);
        console.log(c[i]+"|"+x);
        s+=x;

        }
        

    }

    return s;
}
function showsum(i)
{
    if (i==1)
    document.getElementById('somme1').innerHTML="somme 1:"+sum(box1.childNodes);
    else 
    document.getElementById('somme2').innerHTML="somme 2:"+sum(box2.childNodes);

}

    function unshowsum(i)
{
    if(i==1)
    document.getElementById('somme1').innerHTML="somme 1:";
    else
    document.getElementById('somme2').innerHTML="somme 2:";

}

