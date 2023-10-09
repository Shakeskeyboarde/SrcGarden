import '@emotion/react';

declare module '@emotion/react' {
  type Numeric<TUnit extends string> = `${number}${TUnit}`;

  interface Theme {
    readonly typography: {
      readonly fontFamily: string;
      readonly fontSize: Numeric<'px'>;
      readonly lineHeight: number;
    };
    readonly palette: {
      readonly background: string;
      readonly backgroundAlt: string;
      readonly text: string;
      readonly paper: string;
      readonly border: string;
      readonly note: string;
      readonly noteBackground: string;
      readonly important: string;
      readonly importantBackground: string;
      readonly warning: string;
      readonly warningBackground: string;
    };
    readonly shape: {
      readonly borderRadius: Numeric<'px' | 'rem'>;
    };
  }
}
