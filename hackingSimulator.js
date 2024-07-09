let txt = [
    "Initializing Hacking...",
    "Reading Your Files...",
    "Password files detected...",
    "Sending all files and personal data sent to the server...",
    "Cleaning up..."
];

const RandomDelay = () => {
    return new Promise((resolve) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

let lastLine = null;

const displayText = async (text) => {
    await RandomDelay();
    let t = document.getElementsByClassName("text")[0];
    let newLine = document.createElement("div");
    newLine.innerHTML = text;
    t.appendChild(newLine);
    lastLine = newLine;
};

const runSequence = async () => {
    for (let i = 0; i < txt.length; i++) {
        await displayText(txt[i]);
    }
};


function blink() {
    setInterval(() => {
        if (lastLine && lastLine.innerHTML.endsWith("...")) {
            lastLine.innerHTML = lastLine.innerHTML.slice(0, lastLine.innerHTML.length - 3);
        } else if (lastLine) {
            lastLine.innerHTML += ".";
        }
    }, 1000);
}


runSequence();


blink();
