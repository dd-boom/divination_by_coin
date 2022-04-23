export type Yao = "0" | "1" | "2" | "3";

export enum YY {
  ying = "0",
  yang = "1",
}

export type GuaInfo = {
  totalTrans: number;
  oYao: Yao[];
  oGuaId: string;
  tGuaId: string;
  isUseO: boolean;
  isUseT: boolean;
  yaoIdList: [string, string][];
};

export type Gua = {
  id: string;
  name: string;
  info: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
  };
};
