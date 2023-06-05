//Задачи с модуля 9

// #4

/*Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
 */

const result=document.getElementById("result-conteiner");
const btn=document.getElementById("btn-request");
let API_URL="https://picsum.photos";


function check(){
  const valueOfFirstInput=parseInt(document.getElementById("first-input").value);
  const valueOfSecondInput=parseInt(document.getElementById("second-input").value);
  
  if(valueOfFirstInput < 100 || valueOfFirstInput > 300 || typeof valueOfFirstInput !== "number" || isNaN(valueOfFirstInput) || valueOfSecondInput < 100 || valueOfSecondInput > 300 || typeof valueOfSecondInput !== "number" || isNaN(valueOfSecondInput)){
    result.innerHTML="одно из чисел вне диапазона от 100 до 300"; 
  }else{
  const url=API_URL+`\/${valueOfFirstInput}\/${valueOfSecondInput}`;
  console.log(url);
  
  fetch(url)
  .then((response) => {
    let cards="";
    const cardBlock = `
      <div class="card">
        <img
          src="${response.url}"
          class="card-image"
        />
      </div>
    `;
    cards = cards + cardBlock;
    result.innerHTML=cards;
    
})
  .catch((e) => { console.log(e.toString())});
 }
}

btn.addEventListener("click",check);


