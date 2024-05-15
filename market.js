//перевірка чи підключений файл
//console.log('Програмно перевірили чи працює консоль')

//Визначення масиву товарів
let itemsArray = [
    {
        fistName: "Віталій",
        lastName: "Шатківський",
        kubki: 56456,
        subject: "CS",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        fistName: "Іван",
        lastName: "Севрук",
        kubki: 6350,
        subject: "Захист України",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
    },
    {
        fistName: "Олена",
        lastName: "Геча",
        kubki: 654564564894,
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
    {
        fistName: "Василь",
        lastName: "Бабій",
        kubki: 654,
        subject: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },



//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газонокосарка 430',
//     'Електричний тример 130',
//     'Електрична газонокосарка 320',
//     'Акумуляторний оприскувач 12 E',
//     'Супер паркан 3000',
//     'Автомат варколина 960',
//     'Телефон 24',
//     'Ултра крутий цемент з бетономішалкою 5555',
]

//Отримання елементу з ідентифікатором
let itemsDiv = document.getElementById('items');

//перевірки чи знайшли елемент
if (itemsDiv) {
    //вивід знайденого елементу
    //console.log(itemsDiv);

    //Створення за прізвищем
    itemsArray
    
    //Сортування за прізвищем
    .sort((a,b) => a.lastName.localeCompare(b.lastName))
    //
    .forEach((item, index) => {
    //console.log(item)
    itemsDiv.innerHTML += 
    `
    <div class = "item">
        <h2>Вчитель №${index + 1} з ${itemsArray.length}</h2>
        <p>${item.lastName} ${item.fistName} </p>
        <p> Кількість кубків в бравл старс: ${item.kubki} </p>
        <p>
            <a href="${item.url}" target="_blank">
                <img src="${item.photo}" class="item-image">
            </a>
        </p>
        <p><a href="${item.url}" target="_blank">Профіль</a></p>
    </div>
    `
})

    // //вивід значень
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле  clientWight: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // //Додавання тексту в блок
    // itemsDiv.innerText = 'Програмно доданий текст';
    // itemsDiv.innerText += 'Другий програмно доданий текст';
    // //додавання коду в скрипти
    // itemsDiv.innerHTML += '<h1>Програмно доданий текст</h1>';

    // //Додавання відформатованого HTML коду в блок
    // for(let i = 0; i< 10; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }
} else {
    //вивід повідомлення що блок товарів не знайдено
    console.log('Перевір код товарів');
}

// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль масиву товарів
// for (let i = 0; i < itemsArray.length; i++){
//     console.log(i + '-й елемент: ', itemsArray[i])
// }
