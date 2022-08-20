import { Controller, Post, Body, UploadedFiles, UseInterceptors} from '@nestjs/common';
import { PhotoService } from './photo.service';
import {FilesInterceptor} from '@nestjs/platform-express';


@Controller('/photo')
export class PhotoController {

    constructor(
        private readonly photoService: PhotoService
    ) {}

    @Post('/file')
    @UseInterceptors(FilesInterceptor('file'))
    async upload(@UploadedFiles() files, @Body() data) {
        console.log(data.hi);
        return await this.photoService.upload(files);
    }
}
