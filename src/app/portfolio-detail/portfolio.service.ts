import { Injectable } from '@angular/core';
import {Portfolio} from './portfolio'
import {alpha} from './data'


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  portfolios: Portfolio[] = []


  constructor() {
    this.portfolios.push(alpha) // Add alpha

  }
}
