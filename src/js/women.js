const clothingGrid = document.querySelector('.clothing__products__container__rightGrid-grid')

window.addEventListener('DOMContentLoaded', () => {
    displayMenItems(arrayMen)
    displayWomenItems(arrayWomen)
})

const arrayWomen = [
    {
        id: 1,
        category: 'swimwear',
        img: '..\\dist\\womenclothing1.6cbb6a3c.webp',
        alt: 'swimwear',
        price: '$60',
        brand: 'Zara',
        offer: '10% Discount'
    },
    {
        id: 2,
        category: 'formal',
        img: '..\\dist\\womenclothing2.8b35b446.webp',
        alt: 'dress',
        price: '$60',
        brand: 'Prada',
        offer: '10% Discount'
    },
    {
        id: 3,
        category: 'casual',
        img: '..\\dist\\womenclothing3.a5ccb2ac.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Prada',
        offer: '10% Discount'
    },
    {
        id: 4,
        category: 'footwear',
        img: '..\\dist\\womenclothing4.6d7cecf9.webp',
        alt: 'sneakers',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    },
    {
        id: 5,
        category: 'accessories',
        img: '..\\dist\\womenclothing5.1a69849e.webp',
        alt: 'accessories',
        price: '$60',
        brand: 'Chanel',
        offer: '10% Discount'
    },
    {
        id: 6,
        category: 'casual',
        img: '..\\dist\\womenclothing6.f0e1a274.webp',
        alt: 'coat',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 7,
        category: 'casual',
        img: '..\\dist\\womenclothing7.ad8d5908.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 8,
        category: 'casual',
        img: '..\\dist\\womenclothing8.8a89324a.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    }
]

function displayWomenItems(women) {
    let displayWomenItems = women.map((women) => {
        return `
        <div class="clothing__products__gridItem">
            <img src=${women.img} alt=${women.alt}>
            <div class="clothing__products__gridItem-display_options">
                <div class="options_top">
                    <span class="product__options top-options">${women.price}</span>
                    <span class="product__options top-options">${women.brand}</span>
                    <span class="product__options top-options">${women.offer}</span>
                </div>
                <div class="options_bottom">
                    <a href="#" class="product__options bottom-options">View</a>
                </div>
            </div>
        </div>`
    })

    displayWomenItems = displayWomenItems.join('')
    clothingGrid.innerHTML = displayWomenItems;
}