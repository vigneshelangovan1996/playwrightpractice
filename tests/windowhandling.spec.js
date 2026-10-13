import{test} from '@playwright/test'
test('window handling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("//a[text()='SwitchTo']").click();
    await page.locator("//a[text()='Windows']").click();
    const prom = page.waitForEvent('popup')
    await page.locator('//button[@class="btn btn-info"]').first().click();
    const window = await prom;
    await window.locator('//a[@class="nav-link"]').first().click();
});