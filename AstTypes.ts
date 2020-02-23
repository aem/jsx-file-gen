export type AstNode<Props> = (props: Props) => string | AstNode<any>;
