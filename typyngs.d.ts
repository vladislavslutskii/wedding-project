declare module "*.module.scss"
declare module '*.jpg'
declare module '*.gif'
declare module '*.png' 
{
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}
declare module '*.svg' {
  const content: string;
  export default content;
}declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
