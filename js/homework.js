
/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
  Вивести кожну змінну за допомогою: console.log , alert, document.write*/
let var1 = 'hello';
let var2 = 'owu';
let var3 = 'com';
let var4 = 'ua';
let var5 = 1;
let var6 = 10;
let var7 = -999;
let var8 = 123;
let var9 = 3.14;
let var10 = 2.7;
let var11 = 16;
let var12 = true;
let var13 = false;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);

/*- Переприсвоїти кожній змінній з завдання значення на довільне.
  Вивести кожну змінну за допомогою: console.log , alert, document.write*/
var1 = 123;
var2 = 456;
var3 = -789;
var4 = 1.444;
var5 = true;
var6 = false;
ar7 = true;
var8 = "uni";
var9 = "LrlF0W";
var10 = "virtue";
var11 = 754.27;
var12 = 408;
var13 = "tn7";

console.log('--------------------------------------');
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11);
console.log(var12);
console.log(var13);
console.log('--------------------------------------');
/*- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)*/
let firstName = 'Polina';
let middleName = 'Valentynivna';
let lastName = 'Romanenko';
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".*/
let name = prompt('Введите имя:');
let surname = prompt('Введите фамилию:');
let patronymic = prompt('Введите отчество:');
let age = prompt('Введите возраст:');
console.log(`Вітаю ${name} ${patronymic}. Тобі ${age} років`);


/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;*/
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


/*- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразах не використовувати однакові оператори!!!
  5 != 6 -> true
  5 > 6 -> false
  5 == 6 -> false
  5 >= 6 -> false
  10 == 10 -> true
  10 === 10 -> true
  10 < 10 -> false
  10 > 10 -> false
  10 != 10 -> false
  123 === '123' -> false
  123 == '123' -> true*/



/*- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
     let a = 5;
     document.write(str + a + "<br/>");  //205
     document.write(str - a + "<br/>");  //15
     document.write(str * "2" + "<br/>"); //40
     document.write(str / 2 + "<br/>"); //10
     */