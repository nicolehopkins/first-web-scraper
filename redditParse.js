const puppeteer = require('puppeteer');
const url = 'https://www.reddit.com';

puppeteer
  .launch()
  .then(browser => {
    return browser.newPage()
  })
  .then(page => {
    return page.goto(url)
      .then(() => {
        return page.content()
      })
  })
  .then(html => {
    console.log(html)
  })
  .catch(err => console.log(err))