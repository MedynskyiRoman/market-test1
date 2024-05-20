//перевірка чи підключений файл
//console.log('Програмно перевірили чи працює консоль')

//Визначення масиву товарів
let itemsArray = [
    {
        title: "Мотокоса",
        mono: "6",
        privat: "8",
        old_prise: "5499",
        new_prise: "4497",
        bonus_prise: "4395",
        photo: "img/1.jpg",
    },
    {
        title: "Газонокосарка",
        mono: "5",
        privat: "60",
        old_prise: "12540",
        new_prise: "10550",
        bonus_prise: "9500",
        photo: "img/2.png",
    },
    {
        title: "Оприскувач",
        mono: "12",
        privat: "13",
        old_prise: "6000",
        new_prise: "4130",
        bonus_prise: "3201",
        photo: "img/3.png",
    },
    {
        title: "Електричний тример",
        mono: "12",
        privat: "13",
        old_prise: "6000",
        new_prise: "5800",
        bonus_prise: "5500",
        photo: "img/4.png",
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
    
    .forEach((item, index) => {
    //console.log(item)
    itemsDiv.innerHTML += 
    `
    <div class="item">
                <div class="item-title">${item.title}</div>

                <!-- Блок зображення товару -->
                <div class="item-image">                    
                    <img src="${item.photo}" alt="Мотокоса">
                </div>
               

                <!-- Блок частин оплати -->
                <div class="parts-pay">
                    <div><img src="img/mono-lapka.png" alt="">${item.mono}</div>
                    <div><img src="img/pt.png" alt="">${item.privat}</div>
                </div>

                <!-- Блок ціни -->
                <div class="price">
                    <div><span>${item.old_prise}</span><sup>₴</sup></div>
                    <div><span>${item.new_prise}</span><sup>₴</sup></div>
                </div>

                <!-- Блок бонусної ціни -->
                <div class="price bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item.bonus_prise}</span><sup>₴</sup></div>
                </div>
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
