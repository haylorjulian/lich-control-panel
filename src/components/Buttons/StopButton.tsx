import { assignInstance } from "../../api/instances";

type Props = {
  instanceId: string;
};

export function StopButton({ instanceId }: Props) {
  return <button onClick={() => assignInstance(instanceId, "-1")}>Stop</button>;
}
