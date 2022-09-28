var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");
var buttonTranslate = document.querySelector("#btn-translate");

var Url = "https://api.funtranslations.com/translate/groot.json";

function getUrl(text){
  return Url + "?text=" +text;
}

function errorHandler(error){
  console.log("OOOPS, "+error+" occured");
  alert("Please try again");
}

function callEvent(){
  var insertedVal = textInput.value;
  fetch(getUrl(insertedVal))
  .then(response => response.json())
  .then(json => {
    var res =  json.contents.translated;
    textOutput.innerText = res; })
    .catch(errorHandler)
}

buttonTranslate.addEventListener("click",callEvent);