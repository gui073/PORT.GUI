
const acoordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acoordeonTriggers.forEach((trigger)=>{
    trigger.addEventListener('click',(e)=>{
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen){
           acordeon.classList.remove('open')
        }else{
           acordeon.classList.add('open')
        }
    })
})



const toggleMode = () =>{
    const img = document.querySelector('.git')
    const body = document.querySelector('body')
 
    if (body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        img.setAttribute('src','assets/img/icons/github-142-black.svg')
    }
    else if(body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        img.setAttribute('src','assets/img/icons/github.svg')
    }
}




