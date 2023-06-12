import { ApiTags } from '@nestjs/swagger';
import { PortfoliosService } from './portfolios.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Request,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { Portfolio } from './entities/portfolio.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import path, { extname, join } from 'path';
import { diskStorage } from 'multer';
import { imageFilter } from 'src/common/upload-filter';
import { existsSync } from 'fs';

@ApiTags('Portfolios')
@Controller({ version: '1', path: 'portfolios' })
export class PortfoliosController {
  constructor(private readonly portfoliosService: PortfoliosService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, cb) => {
        const result = imageFilter(path.extname(file.originalname));
        req.fileValidation = result;
        return cb(null, result);
      },
      storage: diskStorage({
        destination: './public/assets/portfolios',
        filename: (_req, file, cb) => {
          const randomName = Array(15)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(
    @Body() createRequest: CreatePortfolioDto,
    @Request() req,
    @UploadedFile() logo?: Express.Multer.File,
  ): Promise<Portfolio> {
    if (!req.fileValidation && logo) {
      throw new HttpException(
        `Type de fichier invalide`,
        HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      );
    }

    if (logo) {
      createRequest.path = logo.filename;
    }

    return await this.portfoliosService.create(createRequest);
  }

  @Get(':id/image')
  async getImage(@Param('id', ParseIntPipe) id: number, @Res() res) {
    const portfolio = await this.portfoliosService.findOne(id);

    if (!portfolio) {
      throw new HttpException(
        `Portfolio avec l'id ${id} introuvable`,
        HttpStatus.NOT_FOUND,
      );
    }

    const url = join(
      process.cwd(),
      '/public/assets/portfolios/',
      portfolio.path,
    );

    if (!existsSync(url))
      throw new HttpException(
        'Logo introuvable pour cette entreprise',
        HttpStatus.NOT_FOUND,
      );

    res.sendFile(url);
    return url;
  }
}
