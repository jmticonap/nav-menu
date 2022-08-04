const $jm = function (query) {
    return {
        node: document.querySelector(query),
        toToggleBtn: function (input_checker, ul_links) {
            // <nav class="nav">
            //     <img class="img-logo" src="./assets/img/logo.svg" alt="logo" >
            //     <section class="toggle-menu">
            //         <input id="btn_toggle" type="checkbox">
            //         <label class="btn_toggle__lbl" for="btn_toggle">
            //             <img src="./assets/img/icon-hamburger.svg" alt="">
            //         </label>
            //         <ul class="menu-links">
            //             <li class="menu-links__li"><a class="menu-links__li__a" href="#">About</a></li>
            //             <li class="menu-links__li"><a class="menu-links__li__a" href="#">Services</a></li>
            //             <li class="menu-links__li"><a class="menu-links__li__a" href="#">Projects</a></li>
            //             <li class="menu-links__li"><a class="menu-links__li__a" href="#">Contact</a></li>
            //         </ul>
            //     </section>
            // </nav>
            function click_toggle() {
                if (btn_toggle__input.checked) {
                    btn_toggle__ul.style = `display: none`
                } else {
                    btn_toggle__ul.style = `display: flex`
                }
            }
            
            function toggle_off() {
                btn_toggle__input.checked = true
                btn_toggle__ul.style = `display: none`
            }

            document.body.addEventListener("load", () => {
                btn_toggle__input.addEventListener("change", click_toggle, false)

                btn_toggle__li__a.forEach((itm) => {
                    itm.addEventListener("click", toggle_off, false)
                })
            }, false)

            return this
        },
        addGradientBorder: function (thickness) {
            const background_div = document.createElement("div")

            this.node.childNodes.forEach((itm) => {
                if (itm.id === "bg_border_gradien") itm.remove()
            })

            this.node.style.position = "relative"
            this.node.style.backgroundColor = "black"
            this.node.style.borderRadius = `${thickness}rem`
            this.node.style.color = "white"

            background_div.id = "bg_border_gradien"
            background_div.style.background = "linear-gradient(130deg, #ff6c00, #af002d 41.07%, #319197 76.05%)"
            background_div.style.position = "absolute"
            background_div.style.top = `${-1 * thickness}rem`
            background_div.style.left = `${-thickness}rem`
            background_div.style.width = `calc(100% + ${thickness * 2}rem)`
            background_div.style.height = `calc(100% + ${thickness * 2}rem)`
            background_div.style.zIndex = "-1"
            background_div.style.borderRadius = `${thickness * 2}rem`

            this.node.append(background_div)
            return this
        },
        nodeMargin: function (value) {
            this.node.style.margin = `${value}rem`
            return this
        },
        nodePadding: function (value) {
            this.node.style.padding = `${value}rem`
            return this
        }
    }
}