import { join } from 'path';
import { Controller, Post, Get, Next, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller()
export class AppController {
  @Post('/callback')
  callbackMonitoring(@Req() req: Request) {
    console.log(req.body);
  }

  @Get('*')
  site(@Res() res: Response, @Next() next: NextFunction, @Req() req: Request) {
    if (req.path.includes('graphql')) return next();

    return res.render('index');
  }
}
