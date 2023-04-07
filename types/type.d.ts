export interface DoneType {
  title: string;
  desc?: string[];
}
export interface LinksType {
  name: string;
  url: string;
}

export interface ProjectType {
  title: string;
  param: string;
  desc: string;
  done: DoneType[];
  stacks: string[];
  links: LinksType[];
}
