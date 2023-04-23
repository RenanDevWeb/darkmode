const changeTheme = document.querySelector('#change-theme')
const imgTenis = document.querySelector(".card-img img")
console.log(imgTenis);


imgTenis.addEventListener('mouseleave', function(){
    imgTenis.classList.add("tenisLeave")
})

function toggleDarkMode(){
    document.body.classList.toggle("dark")
}


// carregando preferencias do usuario 

function loadTheme(){
    const darkMode = localStorage.getItem("dark")
    if(darkMode){
        toggleDarkMode()
    }
}

loadTheme()


changeTheme.addEventListener('change', function(){
   toggleDarkMode()


    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem('dark',1)
    }

})


