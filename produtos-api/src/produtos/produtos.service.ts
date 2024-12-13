import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}

  create(produto: Produto): Promise<Produto> {
    return this.produtosRepository.save(produto);
  }

  findAll(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  findOne(id: number): Promise<Produto> {
    return this.produtosRepository.findOneBy({ id });
  }

  async update(id: number, produto: Produto): Promise<Produto> {
    await this.produtosRepository.update(id, produto);
    return this.findOne(id);
  }

  delete(id: number): Promise<void> {
    return this.produtosRepository.delete(id).then(() => {});
  }
}
