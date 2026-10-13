import { test, expect, chromium } from '@playwright/test'
test('Launch', async () => {

    const browser = await chromium.launch();
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://x.com/");//twitter
    
    
    var title = await page.title();
    console.log("see the", title);


    await expect(page).toHaveTitle("X. It’s what’s happening / X");
    if (title === "X. It’s what’s happening  X") {
        console.log("Header matching");
    } else {
        console.log("Header not matching");
    }

    var url = await page.url();
    console.log("This is the link",url);

    await expect(page).toHaveURL("https://x.com/");//twitter
    if(url === "https://x.com/"){
        console.log("link is matching");
    } else {
        console.log("link not matching");
    }

    var username = page.locator("//input[@id = 'jf-input-username_or_email']");
    var use = await username.fill("vignesh");
    console.log("vignesh");
})
