declare interface IListcommandCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ListcommandCommandSetStrings' {
  const strings: IListcommandCommandSetStrings;
  export = strings;
}
