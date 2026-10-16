import{test} from '@playwright/test'
import { LoginPage } from '../Page/LoginPage'
import { SearchHotel } from '../Page/SearchHotel';
test("log",async({page})=>{

    const login = new LoginPage(page);
    await login.visitUrl()
    await login.enterUsername("Vignesh8111")
    await login.enterPasword("Trantula@321")
    await login.clickButton()
    const search = new SearchHotel(page);
    await search.Findlocation();
    await search.SelectHotel();
    await search.Selectroomtype();
    await search.Selectadultsroom();
    



})