import { Cell } from "./../cell";
import { Colors } from "./../colors";
import { Figure, figuresName } from "./figure";
import blackLogo from "../../pictures/black-knight.png";
import whiteLogo from "../../pictures/white-knight.png";
export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figuresName.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
