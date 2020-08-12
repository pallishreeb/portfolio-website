
function submitEmailForm(form){
  var object = new XMLHttpRequest();
  obj.onreadystatechange = function(){
    if(obj.readyState ==4){
      if(obj.status ==200) {
        var x = JSON.parse(obj.responseText);
        alert(x.message);
      }
      else{
        alert("XMLHttp Status :" + obj.status + "obj.statusText")
      }
    }
  };
  obj.open("post", form.action, true);
  obj.setRequestHeader("Contect-Type","application/json");
  obj.send(JSON.stringify({ name:form.name.value, email:form.email.value, message: form.message.value}));
  return false; 
}
