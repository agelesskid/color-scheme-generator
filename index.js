function setStripesHtml(colorsArr){
    let stripesHtml = ``
    
    colorsArr.forEach(color => {
        stripesHtml += `
            <div class="color-stripe" style="background: ${color.hex.value};">
                <p class="hex-code">${color.hex.value}</p>
            </div>
        `
    });

    document.getElementById('stripes-wrapper').innerHTML = stripesHtml
}

document.addEventListener('submit', e => {
    e.preventDefault()
    let color = document.getElementById('color').value.replace('#', '')
    let scheme = document.getElementById('scheme').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
        .then(res=>res.json())
        .then(data=>setStripesHtml(data.colors))

})

