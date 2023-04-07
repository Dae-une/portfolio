/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProjectType {
  title: string;
  param: string;
  stacks: { stack: string; reason: string }[];
  links: {
    name: string;
    url: string;
  }[];
  image: string;
  overall?: string[];
  role?: string[];
}
