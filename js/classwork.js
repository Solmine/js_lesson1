

/*1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.*/
let array = [820, 13, 484, 273, 883, 100, 960, 700, 178, 896];
let result = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9];
console.log(result);

/*2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр*/
let book = {
    title: 'stick',
    pages: 345,
    genre: 'horror'
}
console.log(book);


/*3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори*/
book = {
    title: 'stick',
    pages: 345,
    genre: 'horror',
    authors: ['Jackie Collins', 'Stephen King']
}
console.log(book);

/*4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт*/
let books = [
    book,
    {
        title: 'doctor',
        pages: 152,
        genre: 'detective',
        authors: ['Clive Cussler', 'Stephenie Meyer']
    },
    {
        title: 'quick',
        pages: 600,
        genre: 'fantasy',
        authors: ['Osamu Tezuka', 'Karl May']
    }
]
console.log(books[0], books[1], books[2]);

/*5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
   Значення площі зберігати в змінній s.*/
let height = 23;
let width = 10;
let s = height*width;
console.log(s);

/*6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
        результат помістіть у змінну v.*/
let heightC = 10;
let dC = 4;
let v = 3.14/4*dC**2*heightC;
console.log(v);


/*7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
       Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).*/
let n = 3;
let m = 4;
let res = Math.sqrt(n**2+m**2);
console.log(res);





