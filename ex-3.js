//Задачи с модуля 9

// #3

/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.*/
 

 const btnNode = document.getElementById('btn-request');
	const resultNode = document.getElementById('result-conteiner');

function checkValue(){
  const value = document.querySelector('input').value;
	if(value < 1 || value >10){
  	resultNode.innerHTML="число вне диапазона от 1 до 10";
  }else{ 
  			var url="https://picsum.photos/v2/list?limit=";
  			url+=value;
  	    console.log(url);
  	    var xhr = new XMLHttpRequest();
        
  	    xhr.open('GET', url, true);
  	        
  	    xhr.onload = function(x) {
       console.log(xhr.status);
  	      if (xhr.status != 200) {
  	        console.log('Статус ответа: ', xhr.status);
  	      } else {
  	        const result = JSON.parse(xhr.response);
  	      console.log(result); 
  	        }
  	      }
  	        
  	    xhr.onerror = function() {
  	      console.log('Ошибка! Статус ответа: ', xhr.status);
  	    };
  	        
  	    xhr.send();
  	        
	}
}

btnNode.addEventListener("click",checkValue);
