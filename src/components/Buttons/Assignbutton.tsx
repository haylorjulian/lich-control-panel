import "./AssignButton.module.scss";
import { assignInstance } from "../../api/instances";

type Props = {
  targetId: string;
  instanceId: string;
};

export function AssignButton({ targetId, instanceId }: Props) {
  return (
    <button onClick={() => assignInstance(instanceId, targetId)}>Assign</button>
  );
}
