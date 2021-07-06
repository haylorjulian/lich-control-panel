// @ts-nocheck;
import "./Assignbutton.module.scss";
import { reassignTarget } from "../../api/instances";

type Props = {
  targetId: string;
  cellId: number;
};

export function Assignbutton(props: Props) {
  return (
    <button onClick={(event: React.MouseEvent<HTMLElement>) => {props.targetId === "-1" ? reassignTarget(props.cellId, 0) : reassignTarget(props.cellId, -1)}}>{props.targetId === "-1" ? "Assign" : "Stop"}</button>
  );
}