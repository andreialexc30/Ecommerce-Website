const clothingGrid = document.querySelector('.clothing__products__container__rightGrid-grid')

window.addEventListener('DOMContentLoaded', () => {
    displayMenItems(arrayMen)
})

const arrayMen = [
    {
        id: 1,
        category: 'accessories',
        img: '..\\dist\\menclothing1.09ed23d3.webp',
        alt: 'accessories',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 2,
        category: 'casual',
        img: '..\\dist\\menclothing2.034c99ef.webp',
        alt: 'shirt',
        price: '$60',
        brand: 'Puma',
        offer: '10% Discount'
    },
    {
        id: 3,
        category: 'formal',
        img: '..\\dist\\menclothing3.1dc1c705.webp',
        alt: 'suit',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 4,
        category: 'footwear',
        img: '..\\dist\\menclothing4.6e65cc79.webp',
        alt: 'sneakers',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    },
    {
        id: 5,
        category: 'formal',
        img: '..\\dist\\menclothing5.86aeaf2a.webp',
        alt: 'formal',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 6,
        category: 'casual',
        img: '..\\dist\\menclothing6.0ac3b40b.webp',
        alt: 'hoodie',
        price: '$60',
        brand: 'Adidas',
        offer: '10% Discount'
    },
    {
        id: 7,
        category: 'sport',
        img: '..\\dist\\menclothing7.4b41d7c1.webp',
        alt: 'sport',
        price: '$60',
        brand: 'Fila',
        offer: '10% Discount'
    },
    {
        id: 8,
        category: 'casual',
        img: '..\\dist\\menclothing8.acd9b327.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    }
]

function displayMenItems(men) {
    let displayMenItems = men.map((men) => {
        return `
        <div class="clothing__products__gridItem">
            <img src=${men.img} alt=${men.alt}>
            <div class="clothing__products__gridItem-display_options">
                <div class="options_top">
                    <span class="product__options top-options">${men.price}</span>
                    <span class="product__options top-options">${men.brand}</span>
                    <span class="product__options top-options">${men.offer}</span>
                </div>
                <div class="options_bottom">
                    <a href="#" class="product__options bottom-options">View</a>
                </div>
            </div>
        </div>`
    })

    displayMenItems = displayMenItems.join('')
    clothingGrid.innerHTML = displayMenItems;
}