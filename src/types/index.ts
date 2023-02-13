export type CompPropsWithChildrenAndStyles = {
  children?: React.ReactNode | JSX.Element;
  styles?: React.CSSProperties;
};

export type CompPropsWithOnClick = {
  onClick?: (params?: any) => any;
};
