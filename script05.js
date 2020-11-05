function changeBackgroundColor(element)
{
    var backgroundColor;
    if(element==1)
    {
        backgroundColor = "grey";
    }
    else
    {
        backgroundColor = "white";
    }
    document.getElementById("changeBackgroundColor").style.backgroundColor=backgroundColor;
}
function switchBolb(element)
{
    var bolB;
    if(element==0)
    {
        bolB="https://www.w3schools.com/js/pic_bulboff.gif";
    }
    else
    {
        bolB="https://www.w3schools.com/html/pic_bulbon.gif";
    }
    document.getElementById('offBolb').src=bolB;
}
function changeTextBackgroundColor()
{
    document.getElementById('text').style.backgroundColor="grey";
}