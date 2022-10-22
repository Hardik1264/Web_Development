let Name = document.getElementById("name")
let Email= document.getElementById("email")
let Pass= document.getElementById("pass")
let Form = document.getElementById("form")
let Check = document.getElementById("check")

let Ename = document.getElementById("EroName")
let Eemail= document.getElementById("EroEmail")
let Epass= document.getElementById("EroPass")
let Echeck = document.getElementById("EroCheck")
let EemailVali = document.getElementById("EroCheckVali")

form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    Validate();
})



function Validate()
{
    if(Name.value==='')
    {
        Ename.style.display="block";
    }
    else if(Name.value!='')
    {
        Ename.style.display="none";
    }
    if(Email.value==='')
    {
        Eemail.style.display="block";
    }
    else if(Email.value!='')
    {
        Eemail.style.display="none";
    }
    if(Pass.value==='')
    {
        Epass.style.display="block";
    }
    else if(Pass.value!='')
    {
        Epass.style.display="none";
    }
    if(!(Check.checked))
    {
        Echeck.style.display="block"
    }
    else if((Check.checked))
    {
        Echeck.style.display="none"
    }
}