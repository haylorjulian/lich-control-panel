export type Instance = {
  _id: string;
  name: string;
  ip: string;
  service: string;
  status: string;
  targetId: string;
  pumpsCount: number;
  cmcRank: number;
};

export type PumpReport = {
  targetId: string;
  instanceId: string;
  numberOfPumps: number;
};
