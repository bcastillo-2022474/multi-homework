const barsButton = document.querySelector("#bars-button");
const sidebarMobile = document.querySelector("#nav-mobile")

barsButton.addEventListener('click', (e) => {
    sidebarMobile.classList.toggle('hidden')
})


const carousell = document.querySelector(".container-carousell");
const imgList = [...carousell.querySelectorAll('img')];

imgList.forEach((img, i) => {
    img.dataset.index = `${i}`;
    const isHeightBigger = img.naturalHeight > img.naturalWidth
    img.classList.add(isHeightBigger ? 'h-full' : 'w-full')

    if (i === 0) {
        carousell.dataset.indexSelected = '0';
    }
})


function render() {
    imgList.forEach((img, i) => {
        console.log({selected: carousell.dataset.indexSelected})
        const isLast = carousell.dataset.indexSelected === `${imgList.length - 1}`
        const isFirst = carousell.dataset.indexSelected === '0';
        const isPrev = carousell.dataset.indexSelected === `${i - 1}` || isLast && i === 0;
        const isNext =  carousell.dataset.indexSelected === `${i + 1}` || isFirst && i === imgList.length - 1
        img.classList.remove('hidden');

        const isHeightBigger = img.naturalHeight > img.naturalWidth


        if (carousell.dataset.indexSelected === `${i}`) {
            img.style.transform = 'none';
            // console.log({height: img.naturalHeight, width: img.naturalWidth})
            // img.classList.add(isHeightBigger ? 'h-full' : 'w-full')
            console.log({curr: img});
            return;
        }

        if (isPrev) {
            // left
            console.log("___________________________________________________________________-----")
            img.style.transform = `translateX(${isHeightBigger ? -200 : -100}%) scale(0.5)`;
            console.log({prev: img.dataset.index});
            return;
        }
        if (isNext) {
            // right
            console.log({next: img.dataset.index})
            img.style.transform = `translateX(${isHeightBigger ? 200 : 100}%) scale(0.5)`;
            return;
        }

        img.style.transform = 'none';
        img.classList.add('hidden');
    })
}

render();

// carousell.addEventListener('click', (e) => {
//     const img = e.target.closest('img');
//     if (!img) return;
//
//     carousell.dataset.indexSelected = img.dataset.index;
//
//     render();
// })

carousell.addEventListener('click', (e) => {
    const button = e.target.closest('button')
    if (!button) return;
    if (button.innerText === '>') {
        // go prev
        // imgList.find(img => Number(img.dataset.index)-1 === Number(carousell.dataset.indexSelected))
        const selected = carousell.dataset.indexSelected !== '0' ? `${Number(carousell.dataset.indexSelected) - 1}` : `${imgList.length - 1}`;
        console.log({selected, curr: carousell.dataset.indexSelected})
        carousell.dataset.indexSelected = selected;
        render();
    }

    if (button.innerText === '<') {
        carousell.dataset.indexSelected = carousell.dataset.indexSelected !== `${imgList.length - 1}` ? `${Number(carousell.dataset.indexSelected) + 1}` : `0`;
        render();
    }
})