export {};
declare global {
  type GenericObject = { [key: string]: any };

  type Table = {
    variant: ResponsiveValue<string>;
    caption?: String;
    headers: String[];
    body: GenericObject[];
  };
}
