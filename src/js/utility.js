const dropdown = document.querySelector('.dropdown__menu');

dropdown.addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
})

const burgerMenu = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

const arrayMen = [
    {
        id: 1,
        category: 'accessories',
        img: 'menclothing1.09ed23d3.webp',
        alt: 'accessories',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 2,
        category: 'casual',
        img: 'menclothing2.034c99ef.webp',
        alt: 'shirt',
        price: '$60',
        brand: 'Puma',
        offer: '10% Discount'
    },
    {
        id: 3,
        category: 'formal',
        img: 'menclothing3.1dc1c705.webp',
        alt: 'suit',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 4,
        category: 'footwear',
        img: 'menclothing4.6e65cc79.webp',
        alt: 'sneakers',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    },
    {
        id: 5,
        category: 'formal',
        img: 'menclothing5.86aeaf2a.webp',
        alt: 'formal',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 6,
        category: 'casual',
        img: 'menclothing6.0ac3b40b.webp',
        alt: 'hoodie',
        price: '$60',
        brand: 'Adidas',
        offer: '10% Discount'
    },
    {
        id: 7,
        category: 'sport',
        img: 'menclothing7.4b41d7c1.webp',
        alt: 'sport',
        price: '$60',
        brand: 'Fila',
        offer: '10% Discount'
    },
    {
        id: 8,
        category: 'casual',
        img: 'menclothing8.acd9b327.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    }
]

const arrayWomen = [
    {
        id: 1,
        category: 'swimwear',
        img: 'womenclothing1.6cbb6a3c.webp',
        alt: 'swimwear',
        price: '$60',
        brand: 'Zara',
        offer: '10% Discount'
    },
    {
        id: 2,
        category: 'formal',
        img: 'womenclothing2.8b35b446.webp',
        alt: 'dress',
        price: '$60',
        brand: 'Prada',
        offer: '10% Discount'
    },
    {
        id: 3,
        category: 'casual',
        img: 'womenclothing3.a5ccb2ac.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Prada',
        offer: '10% Discount'
    },
    {
        id: 4,
        category: 'footwear',
        img: 'womenclothing4.6d7cecf9.webp',
        alt: 'sneakers',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    },
    {
        id: 5,
        category: 'accessories',
        img: 'womenclothing5.1a69849e.webp',
        alt: 'accessories',
        price: '$60',
        brand: 'Chanel',
        offer: '10% Discount'
    },
    {
        id: 6,
        category: 'casual',
        img: 'womenclothing6.f0e1a274.webp',
        alt: 'coat',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 7,
        category: 'casual',
        img: 'womenclothing7.ad8d5908.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Armani',
        offer: '10% Discount'
    },
    {
        id: 8,
        category: 'casual',
        img: 'womenclothing8.8a89324a.webp',
        alt: 'jacket',
        price: '$60',
        brand: 'Nike',
        offer: '10% Discount'
    }
]

const clothingGrid = document.querySelector('.clothing__products__container__rightGrid-grid')

window.addEventListener('DOMContentLoaded', () => {
    displayMenItems(arrayMen)
    displayWomenItems(arrayWomen)
})

function displayMenItems(items) {
    let displayItems = items.map((men) => {
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

    displayItems = displayItems.join('')
    clothingGrid.innerHTML = displayItems;
}

function displayWomenItems(items) {
    let displayItems = items.map((women) => {
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

    displayItems = displayItems.join('')
    clothingGrid.innerHTML = displayItems;
}