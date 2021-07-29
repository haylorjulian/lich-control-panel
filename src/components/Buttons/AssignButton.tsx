import "./AssignButton.module.scss";
import { assignInstance } from "../../api/instances";

type Props = {
  targetId: string;
  instanceId: string;
  buttonState: string;
};

export function AssignButton({ targetId, instanceId, buttonState }: Props) {
  if (buttonState === "assign") {
  return (
    <input id="new-target-id" name="new-target-id" type="text"></input>
  );
  } else {
    return (
      <button onClick={() => buttonState = "assign"}>Assign</button>
    );
  }
}