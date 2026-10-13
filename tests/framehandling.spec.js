import{test} from '@playwright/test'
test('framhandling',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator("//a[text()='SwitchTo']").click()
    await page.locator("//a[@href='Frames.html']").click()
    await page.frameLocator("//iframe[@style='float: left;height: 300px;width: 600px']").locator("//input[@type='text']").first().fill("boss");



})