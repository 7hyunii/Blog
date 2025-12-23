declare module 'react-syntax-highlighter' {
  import type { ComponentType, CSSProperties, ReactNode } from 'react';

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: unknown;
    customStyle?: CSSProperties;
    codeTagProps?: Record<string, unknown>;
    children?: ReactNode;
    [key: string]: unknown;
  }

  export const Prism: ComponentType<SyntaxHighlighterProps>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export type PrismTheme = Record<string, unknown>;
  export const vscDarkPlus: PrismTheme;
}
