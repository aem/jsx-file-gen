import { AstNode } from '../AstTypes';

declare namespace JSX {
  interface Element {
    key?: string;
    type: AstNode<any>;
    props: { [propName: string]: any };
  }
  interface ElementChildrenAttribute {
    children: {}; // specify children name to use
  }
}
