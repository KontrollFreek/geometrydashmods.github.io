window.addEventListener('load', function () {
    $('body').css('overflow', 'auto')
    $('.loadscreen').fadeOut(300)
})

for (let i = 0; i < mods.length; i++) {
    document.getElementById("mods").innerHTML += `<div class="col"><div class="card bg-dark h-100"><img src="mods-images/${mods[i].image}" class="card-img-top" alt="${mods[i].name}"><div class="card-body"><h5 class="card-title text-white">${mods[i].name}</h5><p class="card-text text-muted">${mods[i].description}</p></div></div></div>`
}