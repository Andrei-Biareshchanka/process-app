export type Process = {
  id: string;
  name: string;
  blocks: Block[];
};

export type BlockPosition = {
  x: number;
  y: number;
};

export type Block = {
  id: string;
  name: string;
  type: string;
  data: string;

  input: Dependency[];
  output: Dependency[];
} & BlockPosition;

export type Dependency = {
  id: string;
  outputId: string;
  outputPort: string;
  inputId: string;
  inputPort: string;
};
