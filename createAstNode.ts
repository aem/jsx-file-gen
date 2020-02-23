import { AstNode } from './AstTypes';

export function createAstNode(
  node: AstNode<any>,
  props: object,
  ...children: AstNode<any>[]
) {
  const propsToPass = {
    children,
    ...props,
  };
  return node(propsToPass);
}
