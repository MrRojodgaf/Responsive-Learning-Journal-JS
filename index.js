const barIcon = document.getElementById('bar-icon')
const links = document.getElementById('links')

barIcon.addEventListener('click', function(){
    links.classList.toggle('hidden')
})