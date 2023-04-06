/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProjectType {
  title: string;
  stacks: { stack: string; reason: string }[];
  links: {
    name: string;
    url: string;
  }[];
  image: any;
  overall?: string[];
  role?: string[];
}
