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

async function main() {
    let baseUrl = 'https://explosm.net';
    let url = baseUrl + '/comics/latest';
    for(let i = 0; i < 10; i++){
        let name = url.replaceAll('/', '').replaceAll(':', '');
        let data = cacheGet(name);
        if(!data) {
            console.log('LIVE REQUEST!!!!!!');
            await sleep(1000);
            let res = await axios.get(url);
            data = res.data;
            cacheSet(name, data);
        }
        const $ = cheerio.load(data);
        let img = $('div[class*="MainComic__ComicImage"] img');
        let src = img.attr('src');
        let title = img.attr('alt') || 'Cyanide & Happiness';
        if (src && !src.startsWith('http')) src = baseUrl + src;
        console.log(src);
        console.log(title);
        let prev = $('div[class*="ComicSelector__Container"] a').first().attr('href');
        if(!prev) break;
        if (prev.startsWith('/')) prev = baseUrl + prev;
        url = prev;
    }
}
main();