import {test} from '@playwright/test'
test('alert', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
     page.once('dialog',async(pop)=>{
        pop.accept("Good noon");
        console.log(pop.message());
        console.log(pop.type());


})
await page.locator("//a[text()='SwitchTo']").click();
await page.locator("//a[text()='Alerts']").click();
await page.locator("//a[@href='#Textbox']").click();
await page.locator("//button[@class='btn btn-info']").click();








})

