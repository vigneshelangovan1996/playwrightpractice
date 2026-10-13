export class SearchHotel {

    constructor(Page){
        this.page = Page
        this.location = Page.locator('//select[@id="location"]')
        this.hotel = Page.locator('//select[@id="hotels"]')
        this.roomtype = Page.locator('//select[@id="room_type"]')
        this.adultsroom = Page.locator('//select[@id="adult_room"]')

    }

    async Findlocation(){
        await this.location.selectOption({label : 'Melbourne'})

    }
    async SelectHotel(){
        await this.hotel.selectOption({label : 'Hotel Sunshine'})
    }
    async Selectroomtype(){
        await this.roomtype.selectOption({label : 'Super Deluxe'})
    }
    async Selectadultsroom(){
        await this.adultsroom.selectOption({lable : '3 - Three'})
    }
}
