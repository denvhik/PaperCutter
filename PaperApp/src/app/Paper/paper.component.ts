import { Component } from '@angular/core';
import { Cell } from '../models/CellModel';
import { GridModel } from '../models/GridModel';
import { PaperService } from './paper.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent {
  constructor(private paperService: PaperService) { }
    M: number = 0;
    N: number = 0;
    grid!: Cell[][];
    uncutParts!: number ;
    gridExist = false;
    mouseIsDown = false;

   
    @HostListener('document:mouseup', ['$event'])
  mouseUp() {
    this.mouseIsDown = false;
  }

    generateGrid() {
      
      if (this.M < 1 || this.M > 1000 || this.N < 1 || this.N > 1000) {
        return;
      }
      this.grid = new Array(this.M);
      for (let i = 0; i < this.M; i++) {
        this.grid[i] = new Array(this.N);
      }
      this.grid = Array(this.M).fill(0).map(() => Array(this.N).fill(0).map(() => ({ IsCut: 0, IsVisited: 0, Group: 0 })));
      this.gridExist = true;
      this.uncutParts = 1;
      console.log("mimimi");
    }
  
    cutCell(i: number, j: number) {
      if (this.grid[i][j].IsCut === 1) {
          return;
      }  
        this.grid[i][j].IsCut = 1;
        this.sendGridData();
      }

      removeCut(rowIndex: number, colIndex: number) {
        if (this.grid[rowIndex][colIndex].IsCut === 1) {
          this.grid[rowIndex][colIndex].IsCut = 0;
          if (this.uncutParts >1 ) {
            this.uncutParts--;
          
          } else {
            this.uncutParts = 1; 
          }
          
        }
        this.sendGridData();
      }
      
      sendGridData(): void {
        const gridData: GridModel = {
            M: this.grid.length,
            N: this.grid[0].length,
            Grid: this.grid
        };
      
        this.paperService.sendGridData(gridData).subscribe(piece => {
          this.uncutParts = piece;
            console.log(`The paper is divided into ${piece} pieces.`);
        });
    }

    mouseDown() {
      this.mouseIsDown = true;
    }

    mouseMove(i: number, j: number) {
      if (this.mouseIsDown) {
        this.cutCell(i, j);
      }
    }
    }