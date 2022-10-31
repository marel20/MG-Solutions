(function(){
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    const addClick = () => {
        listElements.forEach(element => {
            element.addEventListener('click', () => {

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active');

                if (subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                } 

                subMenu.style.height = `${height}px`;
            });
        });
    }

    const deleteStyleHeight = () =>{
        listElements.forEach(element => {
            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item--active');
            }
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            deleteStyleHeight();
            if(list.classList.contains('menu_links--show'))
            list.classList.remove('menu_links--show');
        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 800) {
        addClick()
    }

    menu.addEventListener('click', () => list.classList.toggle('menu_links--show'));

})();



let btnUp = window.pageYOffset;
window.onscroll = function() {
    let displace = window.pageYOffset;
    if (btnUp < displace){
        this.document.getElementById('up').style.display = 'block';
    } else{
        document.getElementById('up').style.display = 'none';
    }
}

$(".option").click(function(){
    $(".option").removeClass("active-projects");
    $(this).addClass("active-projects");
    
});


// window.addEventListener('scroll', btnUp)

// function btnUp() {
// if(window.scrollY > nav.offsetHeight + 750) {
//     this.document.getElementById('up').style.display = 'block';
// } else {
//     document.getElementById('up').style.display = 'none';
// }
// }



// const nav = document.querySelector('nav')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     const logo = document.getElementById('logo');

// if(window.scrollY > nav.offsetHeight + 550) {
    //     nav.classList.add('active')
    //     logo.classList.remove('hidden');
//     logo.classList.add('visible');
// } else {
//     nav.classList.remove('active');
//     logo.classList.remove('visible');
//     logo.classList.add('hidden');
// }
// }



