import{test} from '@playwright/test'
test('dropdown', async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    var dropdown =  page.locator("//select[@id='country']");
    var result = await dropdown.selectOption({index : 2});
    await dropdown.selectOption({label : 'United States'});
    var view = await dropdown.inputValue();
    console.log(view);

    await dropdown.selectOption({value : 'usa'});

    console.log(result);
    

    
} )



