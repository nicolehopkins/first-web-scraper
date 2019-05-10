const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
  .launch()
  .then((browser) => {
    return browser.newPage();
  })
  .then((page) => {
    return page.goto(url).then(() => {
        return page.content();
      });
  })
  .then(html => {
    $('h2', html).each(() => {
      console.log($(this).text());
    });
  })
  .catch(err => console.log(err))