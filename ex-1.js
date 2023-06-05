//Задачи с модуля 9

//#1 XML into JS-object

/* Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

XML:
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

JS-объект:
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/


const xmlString=`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser=new DOMParser();
const xmlDom=parser.parseFromString(xmlString, "text/xml");

 const students=xmlDom.getElementsByTagName("student");
 
 const result = {list:[]};
 
 for(let i=0; i<students.length; i++){
    const student= students[i];
    const name=student.querySelector("name");
    const lang=name.getAttribute("lang");
    const firstName=name.querySelector("first").textContent;
    const secondName=name.querySelector("second").textContent;
    const age=parseInt(student.querySelector("age").textContent);
    const prof=student.querySelector("prof").textContent;
    
    result.list.push({
        name:`${firstName} ${secondName}`,
        age: age,
        prof:prof,
        lang:lang,
      });
 }
  console.log(result);            
 
 

	