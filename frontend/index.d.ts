declare module '*.module.css' {
  const content: {
    [style: string]: string;
  };

  export default content;
}
