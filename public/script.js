const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const typeSpeed = 2;

let text = {
    'name': 'Did you really think I would tell you my name?',
    'school': 'Michigan State University',
}

$(".autofill").on("keydown", function(e) {
    console.log(e.key);
    let thisText = text[this.id];
    if (e.key === 'Backspace') {
        e.preventDefault();
        this.dataset.cur = Math.max(parseInt(this.dataset.cur) - typeSpeed, 0);
    } else if (e.key != 'Tab') {
        e.preventDefault();
        this.dataset.cur = Math.min(parseInt(this.dataset.cur) + typeSpeed, thisText.length);
    }
    $(this).val(thisText.substring(0, this.dataset.cur));

    // Auto delete
    if (this.dataset.cur >= thisText.length && $(this).hasClass("autodel")) {
        setTimeout(() => {
            $(this).trigger("delete", thisText.length);
        }, 500);
    }
});

$(".autodel").on("delete", async function(e, len) {
    let delSpeed = Math.min(5, 500/len);
    while (this.dataset.cur > 0) {
        this.dataset.cur--;
        $(this).val(text[this.id].substring(0, this.dataset.cur));
        await sleep(50);
    }
});