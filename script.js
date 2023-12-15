//pobieranie danych
const $input = document.querySelector(".search");
const $liList = document.querySelectorAll("li");
//funkcja sprawdz input
const inputChecker = el => {
    const text = el.target.value.toLowerCase();
    //.toLowerCase zabiepiecza nas przed wielkością znaków wpisanych w input
    $liList.forEach(e => {
        const task = e.textContent;

        if(task.toLowerCase().indexOf(text) !== -1){
            e.style.display = 'block'
        }else {
            e.style.display = 'none'
        }
    })
}
//nasłuchiwanie
$input.addEventListener("keyup", inputChecker);