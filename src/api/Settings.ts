/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *  */
/**
 * Based on TinyMCE 5.10.7 paste plugin
 * @see https://github.com/tinymce/tinymce/blob/5.10.7/modules/tinymce/src/plugins/paste/main/ts/api/Settings.ts
 */
/**
 * Left only Word paste options. Other options already a part of TinyMCE 6.
 * @see https://www.tiny.cloud/docs/plugins/opensource/paste/
 * @see https://www.tiny.cloud/docs/tinymce/6/copy-and-paste/
 */

import { Editor } from 'tinymce';

const getRetainStyleProps = (editor: Editor): string | undefined =>
  editor.getParam('paste_retain_style_properties');

const getWordValidElements = (editor: Editor): string => {
  const defaultValidElements = (
    '-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,'
    + '-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,'
    + 'td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody'
  );

  return editor.getParam('paste_word_valid_elements', defaultValidElements);
};

const shouldConvertWordFakeLists = (editor: Editor): boolean =>
  editor.getParam('paste_convert_word_fake_lists', true);

const shouldUseDefaultFilters = (editor: Editor): boolean =>
  editor.getParam('paste_enable_default_filters', true);

const getValidate = (editor: Editor): boolean | undefined =>
  editor.getParam('validate') ?? true;

export {
  getRetainStyleProps,
  getWordValidElements,
  shouldConvertWordFakeLists,
  shouldUseDefaultFilters,
  getValidate,
};
