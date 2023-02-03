const c1=document.getElementById("cp1");
const c2=document.getElementById("cp2");
const b=document.getElementById("xxx");
const p=document.getElementById("man");



c1.addEventListener("input",function()
{
    b.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
    p.innerHTML = "linear-gradient(to right,"+c1.value+","+c2.value+")";
})
c2.addEventListener("input",function()
{
    b.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
    p.innerHTML = "linear-gradient(to right,"+c1.value+","+c2.value+")";
})