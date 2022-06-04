import { Cell } from "./../cell";
import { Colors } from "./../colors";
import { Figure, figuresName } from "./figure";
import blackLogo from "../../pictures/black-king.png";
import whiteLogo from "../../pictures/white-king.png";
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figuresName.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    if (
      (target.y === this.cell.y + direction ||
        target.y === this.cell.y - direction) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }
    if (
      (target.x === this.cell.x + direction ||
        target.x === this.cell.x - direction) &&
      target.y === this.cell.y &&
      this.cell.board.getCell(target.x, target.y).isEmpty()
    ) {
      return true;
    }
    if (
      (target.y === this.cell.y + direction &&
        (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)) ||
      ((target.y === this.cell.y + direction ||
        target.y === this.cell.y - direction) &&
        target.x === this.cell.x) ||
      ((target.x === this.cell.x + direction ||
        target.x === this.cell.x - direction) &&
        target.y === this.cell.y &&
        this.cell.isEnemy(target))
    ) {
      return true;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 1) || (dx === 1 && dy === 1);
  }
}
