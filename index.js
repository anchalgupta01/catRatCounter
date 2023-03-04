
let incrementCount = document.getElementById("count-el");
let saveCount = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    incrementCount.textContent = count;
}

function save() {
    saveCount.textContent += count + "-";
    count = 0;
    incrementCount.textContent = 0;

}