function changeText()
{
    document.getElementById("demo").innerHTML="New Text";
    document.getElementById("demo").style.color="red";
}
function changeBackgroundColor(parameter)
{
    var color;
    if(parameter==0)
    {
        color="grey";
    }
    else
    {
        color="white";
    }
    document.getElementById("changeBackgroundColor").style.backgroundColor=color;
}
function switchBolb(element)
{
    var pic;
    if(element == 0)
    {
        pic="https://www.w3schools.com/html/pic_bulbon.gif";
    }
    else
    {
        pic="https://www.w3schools.com/js/pic_bulboff.gif";
    }
    document.getElementById("switch").src=pic;
}
