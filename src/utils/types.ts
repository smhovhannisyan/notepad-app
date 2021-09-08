export type httpPropsType = (params: {
  url: string;
  options: { [key: string]: string };
}) => Promise<any>;
