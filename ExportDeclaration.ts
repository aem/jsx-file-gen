import { JSX } from './types/jsx';

export function ExportDeclaration({
  children,
  isDefault = false,
}: {
  children?: JSX.Element | JSX.Element[];
  isDefault?: boolean;
}): string {
  return `export${isDefault ? ' default' : ''} ${children}`;
}
