var noiDung = '';

noiDung = document.querySelector('.heading').innerHTML;

const chars = [...noiDung]

// console.log(chars)

const jumpText = (text) => {
    let html = '';
    for (let i in text) {
        html += `<span>${text[i]}</span>`
    }
    document.querySelector('.heading').innerHTML = html;
}



jumpText(chars);