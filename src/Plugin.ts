import { isWordContent, preProcess } from './core/WordFilter';

export default (): void => {
  tinymce.PluginManager.add('pasteword', (editor) => {
    let isRemoveStylesIfWebkit: boolean;

    editor.on('PastePreProcess', (event) => {
      const { content } = event;
      const { options } = editor;
      isRemoveStylesIfWebkit = options.get('paste_remove_styles_if_webkit') ?? true;

      if (isWordContent(content)) {
        event.content = preProcess(editor, content);

        if (isRemoveStylesIfWebkit) {
          /**
           * Don't know why, but with it enabled styles from Word are sanitized
           * @see https://github.com/tinymce/tinymce/blob/6.6.2/modules/tinymce/src/core/main/ts/paste/Quirks.ts#L40C59-L40C59
           */
          options.set('paste_remove_styles_if_webkit', false);
        }
      }
    });

    editor.on('PastePostProcess', () => {
      const { options } = editor;

      if (options.get('paste_remove_styles_if_webkit') !== isRemoveStylesIfWebkit) {
        options.set('paste_remove_styles_if_webkit', isRemoveStylesIfWebkit);
      }
    });

    /* Return the metadata for the help plugin */
    return {
      getMetadata: () => ({
        name: 'Paste from Word',
        url: 'https://www.openregion.info/',
      }),
    };
  });
}
