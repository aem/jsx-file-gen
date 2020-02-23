import { createAstNode } from './createAstNode';
import { ImportDeclaration } from './ImportDeclaration';
import { File } from './File';
import { ExportDeclaration } from './ExportDeclaration';
import { FunctionDeclaration } from './FunctionDeclaration';

export default (
  <File>
    <ImportDeclaration
      modulePath="react"
      defaultSpecifier="* as React"
      namedSpecifiers={['useEffect', 'useState']}
    />
    <ImportDeclaration modulePath="prop-types" defaultSpecifier="PropTypes" />
    <ExportDeclaration>
      <FunctionDeclaration name="ultimateTruth" args="multiplier">
        return multiplier * 42;
      </FunctionDeclaration>
    </ExportDeclaration>
  </File>
);
