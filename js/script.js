window.addEventListener('load', function () {
    $('body').css('overflow', 'auto')
    $('.loadscreen').fadeOut(300)
})

for (let i = 0; i < mods.length; i++) {
    document.getElementById("mods").innerHTML += `<div class="col"><div class="card h-100"><img src="mods-images/${mods[i].image}" class="card-img-top" alt="..."><div class="card-body bg-dark"><h5 class="card-title text-white">${mods[i].name}</h5><p class="card-text text-muted">${mods[i].description}</p></div></div></div>`
}