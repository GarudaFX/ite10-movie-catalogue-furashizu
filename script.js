const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const interval = 3000;

/* focus ra sa mouse track sa user up and down */
let isPressedDown = false;

/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    console.log(cards.offsetLeft);
    containter.style.cursor = "grabbing";
});

container.addEventListener('mouseup', () => {
    containter.style.cursor = "grab";
});

window.addEventListener('mouseup', () => {
    isPressedDown = false;
});


container.addEventListener("mousemove", (e) => {
    if(!isPressedDown) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXSpace}px`;
    boundCards()
});

function boundCards()
{
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();
    
    console.log(cads_rect);

    if (parseInt(cards.style.left) > -1){
        cards.style.left = -1;
    } else if (cards_rect.right < container_rect.right) {
        card.style.left = `-${card_rect.width - container_rect.width}px`;
    }
    console.log(cards_rect.right);
    console.log(container_rect.right);
}