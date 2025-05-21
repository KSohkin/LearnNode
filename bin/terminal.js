function write(message) {
    process.stdout.write(message);
}

const ESC = '\x1B';
let time = new Date().toTimeString().substring(0, 8);
write(time);
setInterval(() => {
    time = new Date().toTimeString().substring(0, 8);
    write(ESC + '[8D');
    write(time);
}, 1000);