import type { TinyMCE } from 'tinymce';
import type { HugeRTE } from 'hugerte';

declare global {
  const tinymce: TinyMCE;
  const hugerte: HugeRTE;
}
