const cellBlocks = document.querySelectorAll('cellBlocks')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')

// cellBlocks.addEventListener('click', () => {
//     console.log('cells clicked')
// })

c1.addEventListener('click', () => {
    console.log('c1 clicked')
})

function handleClick(e) {
    console.log('clicked')
}