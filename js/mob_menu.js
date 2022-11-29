let btn = document.querySelector('.mobile_btn');
let menu = document.querySelector('.menu__mobile');
let content = document.querySelector('.content');
let list = document.querySelector('.mobile__list');

let command = document.querySelector('.mobile__command')
let dropCommand = document.querySelector('.mobile__drop_command')

command.addEventListener('click', () => {
    showDropMenu();
})

let showDropMenu = () => {
    if (dropCommand.style.display == 'none') {
        dropCommand.style.display = 'inline-block';
    } else {
        dropCommand.style.display = 'none';
    }
}

btn.addEventListener('click', () => {
    Toggler()
})

let Toggler = () => {
   tog:if (menu.style.width == '0px') {
        menu.style.width = 100 + '%'
        btn.style.transform = 'none'
        content.style.transform = 'translateX(-100%)'
        list.style.opacity = '1';
        list.style.transition = '1.3s';
    } else {
        list.style.opacity = '0';
        menu.style.width = 0
        content.style.transform = 'translateX(0)'
        btn.style.transform = 'rotateZ(180deg)'
        list.style.transition = '0s';
    }
}
