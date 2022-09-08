    let pastille = document.querySelector('.popup');
    let pastilleClose = document.querySelector('.popup_close');
    let formulaire = document.querySelector('.form_contact');
    let body = document.querySelector('.click_remove_form')
    let controller = false;

    pastille.addEventListener("click", ()=>{
        formulaire.classList.remove("d-none");
        pastilleClose.classList.remove("d-none");
        pastille.classList.add("d-none");
        controller = true;
    });

    function openContact(){
        formulaire.classList.remove("d-none");
        pastilleClose.classList.remove("d-none");
        pastille.classList.add("d-none");
        controller = true;
        }

    if(controller = true){
        pastilleClose.addEventListener("click", ()=>{
            pastilleClose.classList.add("d-none");
            pastille.classList.remove("d-none");
        })
    };

    body.addEventListener("click", ()=>{
        formulaire.classList.add("d-none");
        pastilleClose.classList.add("d-none");
        pastille.classList.remove("d-none");
    });