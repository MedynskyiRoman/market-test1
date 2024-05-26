// Перевірка чи підключений файл
console.log('Програмно перевірили чи працює консоль');

// Визначення масиву товарів
let itemsArray = [
    {
      email: "23a_byeyu@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Будішевський Єгор",
      gameTitle: "",
      authorPhoto: "img/Будішевський.jpg",
      gamePhoto: "img/скрінБудішевський.png",
      githubRepo: "https://github.com/EgorZTUkl/Platformer",
      githubPages: "https://egorztukl.github.io/Platformer/",
      documentationFolder: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
      surveyForm: "https://forms.gle/ziZ41L7qHnzp6o7x6",
      gameMarketRepo: "https://github.com/EgorZTUkl/Gamemarket_Budishevskiy",
      gameMarketPages: "https://egorztukl.github.io/Gamemarket_Budishevskiy/",
      marketPages: "https://egorztukl.github.io/Gamemarket_Budishevskiy/market/market.html",
      finalGameMarketPage: ""
    },
    {
      email: "23a_mrd@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Мединський Роман",
      gameTitle: "Пригоди козака",
      authorPhoto: "img/Мединський.jpg",
      gamePhoto: "img/скрінМединський.png",
      githubRepo: "https://github.com/MedynskyiRoman/Phaser2ndGame",
      githubPages: "https://medynskyiroman.github.io/Phaser2ndGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1ujjej9ifF-2xqLKIc5X2vpohSn6ZenZ4?usp=sharing",
      surveyForm: "https://forms.gle/MzKxFco9L798EjKi8?authuser=1",
      gameMarketRepo: "https://github.com/MedynskyiRoman/GameMarket_Medynskyi",
      gameMarketPages: "https://medynskyiroman.github.io/GameMarket_Medynskyi/",
      marketPages: "https://medynskyiroman.github.io/market-test1",
      finalGameMarketPage: "https://medynskyiroman.github.io/market-test1/final/final.html"
    },
    {
      email: "23a_mnv@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Михальський Нікіта",
      gameTitle: "",
      authorPhoto: "img/Михальський.jpg",
      gamePhoto: "img/скрінМихальський.png",
      githubRepo: "https://github.com/Cement-Official/Minorun",
      githubPages: "https://cement-official.github.io/Minorun/",
      documentationFolder: "https://docs.google.com/document/d/1lgWfQHAtTu1E_xi-3cKiAC_8ZR0TD4xTL6B5dMvqGY0/edit?usp=sharing",
      surveyForm: "https://forms.gle/XVTQaam7Maj2HLCh8",
      gameMarketRepo: "https://github.com/Cement-Official/GameMarket_Myhalskiy",
      gameMarketPages: "https://cement-official.github.io/GameMarket_Myhalskiy/",
      marketPages: "https://cement-official.github.io/GameMarket_Myhalskiy/market.html?authuser=0",
      finalGameMarketPage: ""
    },
    {
      email: "23a_nom@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Недзвецький Олег",
      gameTitle: "",
      authorPhoto: "img/Недзвецький.jpg",
      gamePhoto: "img/скрінНедзвецький.png",
      githubRepo: "https://github.com/Viogoo/Phaser2stGame2",
      githubPages: "https://viogoo.github.io/Phaser2stGame2/",
      documentationFolder: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
      surveyForm: "https://forms.gle/bvgt8tydcyS6AXPA6",
      gameMarketRepo: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
      gameMarketPages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
      marketPages: "https://viogoo.github.io/market/",
      finalGameMarketPage: ""
    },
    {
      email: "23a_ndi@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Ніцкевич Дар'я",
      gameTitle: "",
      authorPhoto: "img/Ніцкевич.jpg",
      gamePhoto: "img/скрінНіцкевич.png",
      githubRepo: "https://github.com/Daria1284/Phaser2ndGame",
      githubPages: "https://daria1284.github.io/Phaser2ndGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
      surveyForm: "https://forms.gle/PSoFKF3f8JE8JDF18",
      gameMarketRepo: "https://github.com/Daria1284/GameMarket_Nitskevich",
      gameMarketPages: "https://daria1284.github.io/GameMarket_Nitskevich/",
      marketPages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
      finalGameMarketPage: ""
    },
    {
      email: "23a_pbv@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Присяжнюк Богдана",
      gameTitle: "Carpathians",
      authorPhoto: "img/Присяжнюк.jpg",
      gamePhoto: "img/скрінПрисяжнюк.png",
      githubRepo: "https://github.com/Prydana/Phaser2stGame",
      githubPages: "https://prydana.github.io/Phaser2stGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
      surveyForm: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
      gameMarketRepo: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
      gameMarketPages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
      marketPages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
      finalGameMarketPage: "https://prydana.github.io/GameMarket_Prysiazhniuk/students/market_st.html"
    },
    {
      email: "23a_sai@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Сікалюк Артем",
      gameTitle: "",
      authorPhoto: "img/Сікалюк.jpg",
      gamePhoto: "img/скрінСікалюк.png",
      githubRepo: "https://github.com/lokloter/Phaser2ndGame",
      githubPages: "https://lokloter.github.io/Phaser2ndGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
      surveyForm: "https://forms.gle/7oHYvp5hUw1oDwGZA",
      gameMarketRepo: "https://github.com/lokloter/gamemarket",
      gameMarketPages: "https://lokloter.github.io/gamemarket/",
      marketPages: "",
      finalGameMarketPage: ""
    },
    {
        email: "23a_sbr@liceum.ztu.edu.ua",
        group: "10-А 2",
        fullName: "Соломонюк Богдан",
        gameTitle: "",
        authorPhoto: "img/Соломонюк.jpg",
        gamePhoto: "img/скрінСоломонюк.png",
        githubRepo: "https://github.com/23asbr/phaser2ndGame",
        githubPages: "https://23asbr.github.io/phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
        surveyForm: "https://forms.gle/DbGSNNiXNbAfQx6x6",
        gameMarketRepo: "https://github.com/23asbr/Game_Market_solomoniyk",
        gameMarketPages: "https://23asbr.github.io/Game_Market_solomoniyk/",
        marketPages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
        finalGameMarketPage: ""
    },    
    {
      email: "23a_srm@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Столяров Руслан",
      gameTitle: "",
      authorPhoto: "img/Столяров.jpg",
      gamePhoto: "img/скрінСтоляров.png",
      githubRepo: "https://github.com/Shxdxwbxrnzz/Phaser2ndGame",
      githubPages: "https://shxdxwbxrnzz.github.io/Phaser2ndGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1hAhvz34e5KZ7pK-6kGDYw0V-MhZHmw3k?usp=sharing",
      surveyForm: "https://docs.google.com/forms/d/e/1FAIpQLSfGf9QIp20gQ-Cl5FrVKXoFKkE8QcHToU52-BWm9EFHfomLUw/viewform?usp=sharing",
      gameMarketRepo: "https://github.com/Shxdxwbxrnzz/GameMarket_Stolyarov",
      gameMarketPages: "https://shxdxwbxrnzz.github.io/GameMarket_Stolyarov/",
      marketPages: "https://shxdxwbxrnzz.github.io/Market/market.html",
      finalGameMarketPage: ""
    },
    {
      email: "23a_sdv@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Столярчук Дмитро",
      gameTitle: "",
      authorPhoto: "img/Столярчук.jpg",
      gamePhoto: "img/скрінСтолярчук.png",
      githubRepo: "",
      githubPages: "",
      documentationFolder: "https://drive.google.com/drive/folders/12U9uaTrFbhzDPFx_wr8EnpO-ETNscTE5?usp=sharing",
      surveyForm: "https://forms.gle/mbTievdu9FFLXpnV8",
      gameMarketRepo: "",
      gameMarketPages: "",
      marketPages: "",
      finalGameMarketPage: ""
    },
    {
      email: "23a_tkv@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Ткач Кирил",
      gameTitle: "",
      authorPhoto: "img/Ткач.jpg",
      gamePhoto: "img/скрінТкач.png",
      githubRepo: "https://github.com/21kery21/MyFirstPygameGame",
      githubPages: "",
      documentationFolder: "https://drive.google.com/drive/folders/1fuUL8e5OCvSsQlp2i2UlqLIqwoI9QLOg?usp=sharing",
      surveyForm: "https://forms.gle/uHDRhupAuBvuQrQT9",
      gameMarketRepo: "",
      gameMarketPages: "",
      marketPages: "https://21kery21.github.io/Market/",
      finalGameMarketPage: ""
    },
    {
      email: "23a_fyev@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Філімончук Євгеній",
      gameTitle: "",
      authorPhoto: "img/Філімончук.jpg",
      gamePhoto: "img/скрінФілімончук.png",
      githubRepo: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
      githubPages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
      documentationFolder: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
      surveyForm: "https://forms.gle/gd2oE6EtLB3yFCa9A",
      gameMarketRepo: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk",
      gameMarketPages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
      marketPages: "",
      finalGameMarketPage: ""
    },
    {
      email: "23a_khiv@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Хмєль Ілля",
      gameTitle: "",
      authorPhoto: "img/Хмєль.jpg",
      gamePhoto: "img/скрінХмєль.png",
      githubRepo: "https://github.com/khiv23/game1",
      githubPages: "https://khiv23.github.io/game1/",
      documentationFolder: "https://docs.google.com/document/d/1cJxpp8cg3h1lXFxGf03EDxdMv3SWk8C-PO5xYU-xYZg/edit",
      surveyForm: "https://docs.google.com/forms/d/1iR5j3fyjTa7qKMMM2HUhlMLiP01NLBvM2yoLFQnbX8o/edit",
      gameMarketRepo: "https://github.com/khiv23/GameMarket_Khmel",
      gameMarketPages: "https://khiv23.github.io/GameMarket_Khmel/",
      marketPages: "https://khiv23.github.io/GameMarket_Khmel/market.html",
      finalGameMarketPage: ""
    },
    {
      email: "23a_yada@liceum.ztu.edu.ua",
      group: "10-А 2",
      fullName: "Якубець Денис",
      gameTitle: "",
      authorPhoto: "img/Якубець.jpg",
      gamePhoto: "img/скрінЯкубець.png",
      githubRepo: "https://github.com/D3nis1238/Phaser-2nd-Game",
      githubPages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
      documentationFolder: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
      surveyForm: "https://forms.gle/NtHkb7ErZAcexoPY7",
      gameMarketRepo: "https://github.com/D3nis1238/GameMarket_Yakubets",
      gameMarketPages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
      marketPages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
      finalGameMarketPage: ""
    }
  ];  

// Отримання елементу з ідентифікатором
let itemsDiv = document.getElementById('items');

// Перевірка чи знайшли елемент
if (itemsDiv) {
    // Вивід знайденого елементу
    console.log(itemsDiv);

    // Створення за прізвищем
    itemsArray.forEach((item) => {
        itemsDiv.innerHTML += `
            <div class="item">
                <div class="item-title">${item.gameTitle}</div>
                <div class="item-info">
                    <div class="item-author">${item.fullName} ${item.group} ${item.email}</div>
                    <img src="${item.authorPhoto}" alt="Фото автора" class="author-photo">
                    <img src="${item.gamePhoto}" alt="Скрін гри" class="game-photo">
                </div>
                <div class="links">
                    <a href="${item.githubRepo}" target="_blank">GitHub Repository</a>
                    <a href="${item.githubPages}" target="_blank">GitHub Pages_Game</a>
                    <a href="${item.documentationFolder}" target="_blank">Google Drive Documentation</a>
                    <a href="${item.surveyForm}" target="_blank">Survey Form</a>
                    <a href="${item.gameMarketRepo}" target="_blank">GitHub Repository GameMarket</a>
                    <a href="${item.gameMarketPages}" target="_blank">GitHub Pages Design</a>
                    <a href="${item.marketPages}" target="_blank">Market Pages 4 Products</a>
                    <a href="${item.finalGameMarketPage}" target="_blank">Market Pages Final</a>
                </div>
            </div>
        `;
    });
} else {
    // Вивід повідомлення що блок товарів не знайдено
    console.log('Перевір код товарів');
}

// Сортування масиву
itemsArray = itemsArray.sort((a, b) => a.fullName.localeCompare(b.fullName));

// Виведення в консоль масиву товарів
itemsArray.forEach((item, index) => {
    console.log(`${index + 1}-й елемент: `, item);
});