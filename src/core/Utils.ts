/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */
/**
 * Based on TinyMCE 5.10.7 paste plugin
 * @see https://github.com/tinymce/tinymce/blob/5.10.7/modules/tinymce/src/plugins/paste/main/ts/core/Utils.ts
 */

const { Tools } = tinymce.util;

type RegExpFilter =
  | RegExp
  | [RegExp, string]
  | [RegExp, (match: string, ...args: any[]) => string];

const isRegExp = (val: object): val is RegExp => val.constructor === RegExp;

/**
 * This class contails various utility functions for the paste plugin.
 *
 * @class tinymce.pasteplugin.Utils
 */

const filter = (content: string, items: RegExpFilter[]): string => {
  Tools.each(items, (v) => {
    if (isRegExp(v)) {
      content = content.replace(v, '');
    } else {
      content = content.replace(v[0], v[1] as any);
    }
  });

  return content;
};

export { filter };
