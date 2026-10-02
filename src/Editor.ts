import type { AstNode as TinyMCEAstNode, Editor as TinyMCEEditor, TinyMCE } from 'tinymce';
import type {
  AstNode as HugeRTEAstNode, Editor as HugeRTEEditor, HugeRTE,
} from 'hugerte';

export type Editor = TinyMCEEditor | HugeRTEEditor;
export type AstNode = TinyMCEAstNode | HugeRTEAstNode;
export type EditorManager = TinyMCE | HugeRTE;
