import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() produto: Produto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produto> {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto): Promise<Produto> {
    return this.produtosService.update(id, produto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.produtosService.delete(id);
  }
}
