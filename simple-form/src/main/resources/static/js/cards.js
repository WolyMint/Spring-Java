const cardData = [
    {
        imageUrl: "/img/дождевик.jpeg",
        title: "Дождевик",
        description: "Для осенних прогулок в тепле и комфорте",
        price: "5600p.",
    },
];

function createCard(cardInfo) {
    const colDiv = document.createElement("div");
    colDiv.className = "col";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.borderRadius = "30px";

    const img = document.createElement("img");
    img.src = cardInfo.imageUrl;
    img.className = "card-image";
    img.style.borderRadius = "30px";
    img.alt = cardInfo.title;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("p");
    title.className = "card-text card-textt-1";
    title.textContent = cardInfo.title;

    const description = document.createElement("p");
    description.className = "card-text card-text-2";
    description.textContent = cardInfo.description;

    const priceDiv = document.createElement("div");
    priceDiv.style.display = "flex";
    priceDiv.style.alignItems = "center";
    priceDiv.style.justifyContent = "center";

    const priceBtn = document.createElement("a");
    priceBtn.href = "#";
    priceBtn.className = "btn btn-primary but";
    priceBtn.style.border = "1px solid #ffbd71";
    priceBtn.style.background = "none";
    priceBtn.style.width = "100px";
    priceBtn.textContent = cardInfo.price;

    priceBtn.style.display = "flex";
    priceBtn.style.alignItems = "center";
    priceBtn.style.justifyContent = "center";

    priceDiv.appendChild(priceBtn);

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(priceDiv);

    colDiv.appendChild(cardDiv);

    return colDiv;
}

function addCardsToContainer(cards) {
    const cardContainer = document.getElementById("cardContainer");
    cards.forEach(function (cardInfo) {
        const cardElement = createCard(cardInfo);
        cardContainer.appendChild(cardElement);
    });
}

addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);
addCardsToContainer(cardData);

const loadMoreButton = document.querySelector(".button");
loadMoreButton.addEventListener("click", function () {
    const newCardData = [
        {
            imageUrl: "/img/дождевик.jpeg",
            title: "Дождевик",
            description: "Описание новой карточки 1",
            price: "9500p.",
        },
        {
            imageUrl: "/img/дождевик.jpeg",
            title: "Дождевик",
            description: "Описание новой карточки 2",
            price: "8700p.",
        },
        {
            imageUrl: "/img/дождевик.jpeg",
            title: "Дождевик",
            description: "Описание новой карточки 3",
            price: "7200p.",
        },
    ];
    addCardsToContainer(newCardData);
});

addCardsToContainer(initialCardData);
