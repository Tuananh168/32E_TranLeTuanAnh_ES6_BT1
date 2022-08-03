const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];




function doiMauNgoiNha(colorList) {

    let html = '';
    for (const value of colorList) {
        console.log(value)

        html += `<button class="color-button ${value}" onclick="addColor('${value}')"></button>`

    }
    document.querySelector('#colorContainer').innerHTML = html;
}

doiMauNgoiNha(colorList);


const addColor = (value) => {
    // alert(value);
    document.querySelector('#house').className = `house ${value}`;
}