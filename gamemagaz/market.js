//перевірка чи підключений файл
//console.log('Програмно перевірили чи працює консоль')

//Визначення масиву товарів
let itemsArray = [
    {
        title: "",
        author: "Присяжнюк Богдана",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Prydana/Phaser2stGame",
        game_pages: "https://prydana.github.io/Phaser2stGame/",
        docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
        forms: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
        gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
        gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
        market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
        stars: ""
    },
    {
        title: "",
        author: "Недзвецький Олег",
        email: "23a_nom@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Viogoo/Phaser2stGame2",
        game_pages: "https://viogoo.github.io/Phaser2stGame2/",
        docs: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
        forms: "https://forms.gle/bvgt8tydcyS6AXPA6",
        gamemarket_github: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
        gamemarket_pages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
        market_pages: "https://viogoo.github.io/market/",
        stars: ""
    },
    {
        title: "",
        author: "Ніцкевич Дар'я",
        email: "23a_ndi@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Daria1284/Phaser2ndGame",
        game_pages: "https://daria1284.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
        forms: "https://forms.gle/PSoFKF3f8JE8JDF18",
        gamemarket_github: "https://github.com/Daria1284/GameMarket_Nitskevich",
        gamemarket_pages: "https://daria1284.github.io/GameMarket_Nitskevich/",
        market_pages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
        stars: ""
    },
    {
        title: "",
        author: "Соломонюк Богдан",
        email: "23a_sbr@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/23asbr/phaser2ndGame",
        game_pages: "https://23asbr.github.io/phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
        forms: "https://forms.gle/DbGSNNiXNbAfQx6x6",
        gamemarket_github: "https://github.com/23asbr/Game_Market_solomoniyk",
        gamemarket_pages: "https://23asbr.github.io/Game_Market_solomoniyk/",
        market_pages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
        stars: ""
    },
    {
        title: "",
        author: "Філімончук Євгеній",
        email: "23a_fyev@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
        game_pages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
        forms: "https://forms.gle/gd2oE6EtLB3yFCa9A",
        gamemarket_github: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk/settings/pages",
        gamemarket_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
        market_pages: "",
        stars: ""
    },
    {
        title: "",
        author: "Сікалюк Артем",
        email: "23a_sai@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/lokloter/Phaser2ndGame",
        game_pages: "https://lokloter.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
        forms: "https://forms.gle/7oHYvp5hUw1oDwGZA",
        gamemarket_github: "https://github.com/lokloter/gamemarket",
        gamemarket_pages: "https://lokloter.github.io/gamemarket/",
        market_pages: "",
        stars: ""
    },
    {
        title: "",
        author: "Якубець Денис",
        email: "23a_yada@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/D3nis1238/Phaser-2nd-Game",
        game_pages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
        docs: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
        forms: "https://forms.gle/NtHkb7ErZAcexoPY7",
        gamemarket_github: "https://github.com/D3nis1238/GameMarket_Yakubets",
        gamemarket_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
        market_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
        stars: ""
    },
    {
        title: "",
        author: "Будішевський Єгор",
        email: "23a_byeyu@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/EgorZTUkl/Platformer",
        game_pages: "https://egorztukl.github.io/Platformer/",
        docs: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
        forms: "https://forms.gle/ziZ41L7qHnzp6o7x6",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: ""
    },
    {
        title: "",
        author: "Михальський Нікіта",
        email: "23a_mnv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Cement-Official/Minorun",
        game_pages: "https://cement-official.github.io/Minorun/",
        docs: "https://docs.google.com/document/d/1lgWfQHAtTu1E_xi-3cKiAC_8ZR0TD4xTL6B5dMvqGY0/edit?usp=sharing",
        forms: "https://forms.gle/XVTQaam7Maj2HLCh8",
        gamemarket_github: "https://github.com/Cement-Official/GameMarket_Myhalskiy",
        gamemarket_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/",
        market_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/market.html?authuser=0",
        stars: ""
    },
    {
        title: "",
        author: "Столярчук Дмитро",
        email: "23a_sdv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "",
        game_pages: "",
        docs: "https://drive.google.com/drive/folders/12U9uaTrFbhzDPFx_wr8EnpO-ETNscTE5?usp=sharing",
        forms: "https://forms.gle/mbTievdu9FFLXpnV8",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: ""
    },
    {
        title: "",
        author: "Ткач Кирил",
        email: "23a_tkv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/21kery21/MyFirstPygameGame",
        game_pages: "",
        docs: "https://drive.google.com/drive/folders/1fuUL8e5OCvSsQlp2i2UlqLIqwoI9QLOg?usp=sharing",
        forms: "https://forms.gle/uHDRhupAuBvuQrQT9",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "https://21kery21.github.io/Market/",
        stars: ""
    },
    {
        title: "",
        author: "Мединський Роман",
        email: "23a_mrd@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/MedynskyiRoman/Phaser2ndGame",
        game_pages: "https://medynskyiroman.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1ujjej9ifF-2xqLKIc5X2vpohSn6ZenZ4?usp=sharing",
        forms: "https://forms.gle/MzKxFco9L798EjKi8?authuser=1",
        gamemarket_github: "https://github.com/MedynskyiRoman/GameMarket_Medynskyi",
        gamemarket_pages: "https://medynskyiroman.github.io/GameMarket_Medynskyi/",
        market_pages: "https://medynskyiroman.github.io/market-test1",
        stars: ""
    },
    {
        title: "",
        author: "Столяров Руслан",
        email: "23a_srm@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://shxdxwbxrnzz.github.io/Phaser2ndGame/",
        game_pages: "https://github.com/Shxdxwbxrnzz/Phaser2ndGame",
        docs: "https://drive.google.com/drive/folders/1hAhvz34e5KZ7pK-6kGDYw0V-MhZHmw3k?usp=sharing",
        forms: "https://docs.google.com/forms/d/e/1FAIpQLSfGf9QIp20gQ-Cl5FrVKXoFKkE8QcHToU52-BWm9EFHfomLUw/viewform?usp=sharing",
        gamemarket_github: "https://shxdxwbxrnzz.github.io/GameMarket_Stolyarov/",
        gamemarket_pages: "https://github.com/Shxdxwbxrnzz/GameMarket_Stolyarov",
        market_pages: "https://shxdxwbxrnzz.github.io/Market/market.html",
        stars: ""
    }
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
                    <img src="${item.image}" alt="Скрін гри">
                </div>

                <!-- Блок частин оплати -->
                    <div class="parts-pay">
                    <div>
                    <img src="" alt="">
                    <a href="${item.game_github}" target="_blank">Код гри<span>${item.game_github}</span></a>
                </div>
                <div>
                    <img src="img/pt.png" alt="">
                    <a href="${item.gamemarket_pages}" target="_blank">Сторінка на магазин<span>${item.gamemarket_pages}</span></a>
                </div>
</div>


                <!-- Блок ціни -->
                <div class="price">
                    <div><span></span><sup></sup></div>
                    <div><span>${item.author}</span><sup></sup></div>
                </div>

                <!-- Блок бонусної ціни -->
                <div class="price bonus">
                <div></div>
                <div>
                <a href=" target="${item.game_pages}"_blank">
                <span>ПОГРАТИ</span>
                </a>
                <sup></sup>
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
