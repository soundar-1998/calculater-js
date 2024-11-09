
let os=document.getElementById('os')

function Clear()
{
os.value="0"
}function del()
{
os.value=os.value.slice(0,-1)
}function display(txt)
{
os.value=os.value+txt;
console.log(os.value);
}function calc()
{
os.value=eval(os.value);
}functiontri()
{
let b=prompt('Enter breath');
let h=prompt('enter height');
let result=0.5*b*h;
alert("The  result is: ,${result}");
alert("The  result is:",result);
}