import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/asdf')
    getRootRoute(){
        return "Hii there!";
    }

    @Get('/bye')
    getByeThe(){
        return "Bye There!"
    }
}