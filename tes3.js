const section = document.getElementsByTagName("section")[0];

section.addEventListener('click', function(e) {
    const hero = section.getElementsByClassName('hero')[0];
    console.log(e.target.tagName);
    if( e.target.tagName == 'IMG' && e.target.className != 'hero' ) {
        section.querySelectorAll('.thumbs img').forEach( element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
        const src = e.target.getAttribute('src');
        console.log(src);
        hero.setAttribute('src', src)
        hero.classList.add('fade')
    }
    setTimeout(function(){
        hero.classList.remove('fade')
    }, 500)
})