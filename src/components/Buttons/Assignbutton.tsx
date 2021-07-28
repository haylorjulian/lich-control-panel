import "./Assignbutton.module.scss";
import { reassignTarget } from "../../api/instances";

type Props = {
  targetId: string;
  cellId: number;
};

export function Assignbutton({ targetId, cellId }: Props) {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        targetId === "-1"
          ? reassignTarget(cellId, 0)
          : reassignTarget(cellId, -1);
      }}
    >
      {targetId === "-1" ? "Assign" : "Stop"}
    </button>
  );
}
