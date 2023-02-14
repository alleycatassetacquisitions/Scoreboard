export type CompPropsWithChildrenAndStyles = {
  children?: React.ReactNode | JSX.Element;
  styles?: React.CSSProperties;
};

export type CompPropsWithOnClick = {
  onClick?: (params?: any) => any;
};

export type itemType = {
  id: string;
  name: string;
  score: number;
};
