import { Cell } from "./../cell";
import { Colors } from "./../colors";
import { Figure, figuresName } from "./figure";
import blackLogo from "../../pictures/black-rook.png";
import whiteLogo from "../../pictures/white-rook.png";
export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figuresName.ROOK;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
