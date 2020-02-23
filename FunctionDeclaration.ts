import { JSX } from './types/jsx';

export function FunctionDeclaration({
  children,
  name,
  args,
}: {
  children?: string;
  name: string;
  args?: string | string[];
}) {
  return `function ${name}(${
    typeof args === 'string' ? args : args.join(', ')
  }) {
  ${children}
}`;
}
