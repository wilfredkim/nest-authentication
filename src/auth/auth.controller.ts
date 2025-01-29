import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post,   Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './decorator/public.decorator';
import { Roles } from './decorator/roles.decorator';
import { Role } from 'src/role/role.enum';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }


    @HttpCode(HttpStatus.OK)
    @Post("login")
    @Public()
    sign(@Body() signDto: Record<string, any>) {
        Logger.log('login credentials', signDto);
        return this.authService.signIn(signDto.username, signDto.password);
    }

    @Get('testjwt')
    @Roles(Role.Admin)

    testJwt(@Request() req) {
        return req.user;
    }

}
