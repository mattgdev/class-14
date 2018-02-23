'use strict';

function User(Name, Street, City, Zip, Phone){
  this.name = Name;
  this.street = Street;
  this.city = City;
  this.zip = Zip;
  this.phone = Phone;
}


var formObj = document.getElementById("formInfo1")
formObj.addEventListener("submit",function(event){
event.preventDefault();

//VALIDATE
if(event.target.name.value.length < 4){
  alert("Name is too short!")
  event.target.name.value = null;
}else if(event.target.street.value.length < 5){
  alert("Street is too short!")
  event.target.street.value = null;
}else if(event.target.city.value.length < 4){
  alert("City is too short!")
  event.target.city.value = null;
}else if(event.target.zip.value.length < 5){
  alert("ZIP is too short!")
  event.target.zip.value = null;
}else if(event.target.phone.value.length < 7){
  alert("Phone is too short!")
  event.target.street.value = null;
}

var user = new User(event.target.name.value, event.target.street.value, event.target.city.value, event.target.zip.value, event.target.street.value);

console.log(user.name);

localStorage.setItem("useR", JSON.stringify(user));

var gotUser = localStorage.getItem("useR");

console.log(gotUser, JSON.parse(gotUser));

document.getElementById("test").innerHTML = localStorage.getItem("gotUser.name")


event.target.name.value = null;
event.target.street.value = null;
event.target.city.value = null;
event.target.zip.value = null;
event.target.phone.value = null;

})
// var node = document.createElement("tr");
// var textnode = document.createTextNode(event.target.location.value);
// node.setAttribute("id",event.target.location.value);
// node.appendChild(textnode);
// document.getElementById("dataT").appendChild(node);
