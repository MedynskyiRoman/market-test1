//перевірка чи підключений файл
//console.log('Програмно перевірили чи працює консоль')

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумуляторний оприскувач 12 E',
]

//Отримання елементу з ідентифікатором
let itemsDiv = document.getElementById('items');

//перевірки чи знайшли елемент
if (itemsDiv) {
    //вивід знайденого елементу
    //console.log(itemsDiv);

    //Виведення елементів відсортованого масиву
    itemsArray.forEach((item, index) => {
    //console.log(item)
    itemsDiv.innerHTML += 
    `
    <div class = "item">
        <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
        <p>${item}</p>
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
