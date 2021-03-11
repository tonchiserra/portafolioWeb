/* ------ Menu ------ */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn")
    const $menu = d.querySelector(".menu")

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active")
    })

    d.addEventListener("click", (e) => {
        if(!e.target.matches(".menu a")) return false

        $btnMenu.firstElementChild.classList.remove("none")
        $btnMenu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active")
    })
})(document)


/* ------ Contacto ------*/
function sendMail(){
    const $form = document.querySelector(".contact-form");
    const $loader = document.querySelector(".contact-loader");
    const $modal = document.querySelector(".modal");
    const $response = document.querySelector(".modal-contact-response");

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $modal.classList.remove("modal-none");
        $response.classList.add("modal-none");
        $loader.classList.remove("modal-none");
        
        fetch("https://formsubmit.co/ajax/serragonzalo1@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            $form.reset();
        })
        .catch((err) => {
            let message = err.statusText || "Ocurrio un error, instenta nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            $loader.classList.add("modal-none");
            $response.classList.remove("modal-none");
            setTimeout(() => {
                $modal.classList.add("modal-none");
            }, 3000);
        });
    });
};