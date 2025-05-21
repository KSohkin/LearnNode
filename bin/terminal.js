function write(message) {
    process.stdout.write(message);
}

const ESC = '\x1B';
write(ESC + '[31m');
write(ESC + '[42m');
write('Hello TA23A');
write(ESC + '[0m');
write('\n');

write(ESC + '[30m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[31m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[32m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[33m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[34m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[35m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[36m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[37m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');

write(ESC + '[40m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[41m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[42m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[43m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[44m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[45m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[46m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[47m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');

write(ESC + '[1m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[2m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[3m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[4m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[5m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[7m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[8m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[9m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');

write(ESC + '[31m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[1;31m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[2;31m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');

write(ESC + '[41m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');
write(ESC + '[101m'); write('Hello TA23A'); write(ESC + '[0m'); write('\n');

for(let i = 0; i<256; i++){
    write(ESC + `[48;5;${i}m`); write(' '); write(ESC + '[0m'); write(ESC + '[49m');
}

for(let i = 0; i<256; i++){
    write(ESC + `[48;2;${i};0;0m`); write(' '); write(ESC + '[0m'); write(ESC + '[49m');
}