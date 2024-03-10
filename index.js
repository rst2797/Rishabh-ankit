const buttons = document.querySelectorAll(".button")

const body = document.body

buttons.forEach((x) =>{
     const err =  x.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
    })

    return err;
})