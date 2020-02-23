import { JSX } from './types/jsx';

export function File({ children }: { children?: JSX.Element[] }): string {
  console.log(children.join('\n'));
  return '';
}
