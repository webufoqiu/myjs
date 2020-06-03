// https://www.bootcss.com/
// https://www.bootcdn.cn/skeleton/  外链CSS

document.getElementById("button1").addEventListener('click',getText);
document.getElementById("button2").addEventListener('click',getJson);
document.getElementById("button3").addEventListener('click',getExt);

function getText(){
  fetch("test.txt")
  .then(res=>res.text())
  .then(data=>{
    console.log(data);
    document.getElementById("output").innerHTML=data;
  }
   )
  .catch(err=> console.log(err))
}
function getJson(){
  fetch("json.json")
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    out='';
    data.forEach(element => {
      out+= `<li> ${element.title}</li>`;
      document.getElementById("output").innerHTML=out;
    });
  }
   )
  .catch(err=> console.log(err))
}
// https://api.github.com/users
function getExt(){
  fetch("https://api.github.com/users")
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    out='';
    data.forEach(element => {
      out+= `<li> ${element.login}</li>`;
      document.getElementById("output").innerHTML=out;
    });
  }
   )
  .catch(err=> console.log(err))
}