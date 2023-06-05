//Задачи с модуля 9

// #5

/* Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

 Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
*/

let result = document.getElementById("result");
let errors = document.getElementById("errors-conteiner");
const btn = document.getElementById("btn-request");
const API_URL = "https://picsum.photos/v2/list";
const clearErrors = ()=>{errors.innerHTML = ""};
const clearResult = ()=>{result.innerHTML = ""};
  
// Проверка наличия предыдущего результата//

function showPreviousResult(){
  const prevResult = localStorage.getItem("response");
  if(prevResult){
    result.innerHTML = showResult(JSON.parse(prevResult));
  }
}
document.addEventListener("DOMContentLoaded", showPreviousResult); 

 // Проверка условий //

function check(){
  clearErrors();
  clearResult();
  let error1 = "";
  let error2 = "";
  const page=parseInt(document.getElementById("input-page").value);
  const limit=parseInt(document.getElementById("input-limit").value);
 
 //Check conditions 
  
  if(page < 1 || page > 10 || typeof page !== "number" || isNaN(page)){
    error1 = "Номер страницы вне диапазона от 1 до 10.  ";
    errors.innerHTML = error1;
    }
    
  if(limit < 1 || limit > 10 || typeof limit !== "number" || isNaN(limit)){
    error2 = "Лимит вне диапазона от 1 до 10.  ";
    errors.innerHTML = error2;
  }
  
  if(error1 && error2){
    errors.innerHTML = error1 + error2;
    return;
  }
  
  if(!error1 && !error2){

 //Make request
 
   let url=API_URL+`?page=${page}&limit=${limit}`;
     fetch(url)
    .then((response) => {return response.json();})  
    .then((resp)=>{const myJSON=JSON.stringify(resp);
                   localStorage.setItem("response", myJSON);
                   showResult(resp);}) 
    .catch((e)=>{console.log(e.toString())});
  }} 
  
 //Показать новый результат//

  function showResult(resp){
      clearResult();
      let cards="";
      resp.forEach(item=>{
              const cardBlock=`<div class="cards">
                                <img class="pic" src="${item.download_url}">
                                <p class="author">${item.author}</p>
                                <p class="height">${item.height}</p>
                                <p class="id">${item.id}</p>
                                <p class="url">${item.url}</p>
                                <p class="width">${item.width}</p>
                              </div>`;
     cards = cards + cardBlock;})
    
     result.innerHTML = cards;
     return cards;
 }  
 
 
 btn.addEventListener("click",check);
 

