import { Cell } from "./../cell";
import { Colors } from "./../colors";
import { Figure, figuresName } from "./figure";
import blackLogo from "../../pictures/black-bishop.png";
import whiteLogo from "../../pictures/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figuresName.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
