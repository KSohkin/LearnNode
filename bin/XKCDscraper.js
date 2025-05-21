import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';

function cacheGet(name){
    if(fs.existsSync(`./cache/${name}.html`)) {
        return fs.readFileSync(`./cache/${name}.html`);
    }
    return false;
}

function cacheSet(name, value){
    if(!fs.existsSync('./cache')){
        fs.mkdirSync('./cache');
    }
    fs.writeFileSync(`./cache/${name}.html`, value);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(let i = 3091; i>=3081; i--){
    let data = cacheGet(i);
    if(!data) {
        console.log('LIVE REQUEST!!!!!!');
        await sleep(1000);
        let res = await axios.get(`https://xkcd.com/${i}/`);
        data = res.data;
        cacheSet(i, data);
    }
    //console.log(res.data);
    const $ = cheerio.load(data);
    let src = $('#comic img').attr('src');
    let text = $('#comic img').attr('title');
    let title = $('#comic img').attr('alt');
    console.log(src);
    console.log(text);
    console.log(title);
}