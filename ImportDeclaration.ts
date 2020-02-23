interface Props {
  defaultSpecifier?: string;
  modulePath: string;
  namedSpecifiers?: string[];
}

export function ImportDeclaration({
  defaultSpecifier,
  modulePath,
  namedSpecifiers,
}: Props): string {
  if (!defaultSpecifier && !namedSpecifiers) {
    throw new Error('ImportDeclaration: No import specifiers found');
  }
  const compiledNamedSpecifiers =
    namedSpecifiers && namedSpecifiers.length > 1
      ? `{ ${namedSpecifiers.join(', ')} }`
      : '';
  const compiledDefaultSpecifier = defaultSpecifier
    ? `${defaultSpecifier}`
    : '';
  const compiledSeparator =
    compiledDefaultSpecifier && compiledNamedSpecifiers ? ', ' : '';
  return `import ${compiledDefaultSpecifier}${compiledSeparator}${compiledNamedSpecifiers} from '${modulePath}';`;
}
