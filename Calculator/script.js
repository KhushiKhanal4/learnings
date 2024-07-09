let symbol = ""

let buttons = document.querySelectorAll(".keys")
Array.from(buttons).forEach((keys) => {
    keys.addEventListener("click", (e) => {
        const content = e.target.innerHTML
        if (content == '=') {
            symbol = eval(symbol);
        }
        else if (content == 'C') {
            symbol = "";
        }
        else if (content == 'DEL') {
            symbol = symbol.slice(0, -1)
        }
        else if (content == '(-)') {

            if (symbol) {
                symbol = (parseFloat(symbol) * -1);
            }
        }
        else {
            symbol += content;
        }

        document.querySelector('input').value = symbol;
    })
})
