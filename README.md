# TinyMCE / HugeRTE Word Paste Plugin
This plugin provides the capability to accept data from Microsoft Word, and clean-up the received data before pasting it into place.

Supports TinyMCE 6/7/8 and [HugeRTE](https://github.com/hugerte/hugerte) 1.x. Both editors are optional peer dependencies; install the editor you use.

Based on [TinyMCE 5.10.7 paste plugin](https://github.com/tinymce/tinymce/tree/5.10.7/modules/tinymce/src/plugins/paste/main/ts).

## Usage
Import the plugin after loading TinyMCE or HugeRTE. It registers `pasteword` with every supported editor already loaded on the page.

### TinyMCE

```bash
npm install tinymce @openregion/tinymce-word-paste-plugin
```

```js
import tinymce from 'tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/models/dom';
import '@openregion/tinymce-word-paste-plugin';

tinymce.init({
  selector: 'textarea',
  license_key: 'gpl',
  plugins: 'pasteword',
});
```

The TinyMCE example uses the GPL license configuration. Configure your TinyMCE license key as appropriate for your application.

### HugeRTE

```bash
npm install hugerte @openregion/tinymce-word-paste-plugin
```

```js
import hugerte from 'hugerte';
import 'hugerte/icons/default';
import 'hugerte/themes/silver';
import 'hugerte/models/dom';
import '@openregion/tinymce-word-paste-plugin';

hugerte.init({
  selector: 'textarea',
  plugins: 'pasteword',
});
```

Configure the skin and content CSS for your bundler as usual. The paste options below work with either editor; replace `tinymce` with `hugerte` in the examples when using HugeRTE.

## Options
### `paste_enable_default_filters`

This option allows you to disable the plugin's default Word paste filters when set to false.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_enable_default_filters`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'pasteword',
  menubar: 'edit',
  paste_enable_default_filters: false
});
```

### `paste_word_valid_elements`
This option enables you to configure the `valid_elements` specific to MS Office. Word produces a lot of junk HTML, so when users paste things from Word we do extra restrictive filtering on it to remove as much of this as possible. This option enables you to specify which elements and attributes you want to include when Word contents are intercepted.

>**Note:** This option applies when `paste_enable_default_filters` is `true` (the default).

**Type:** `String`

#### Example: Using `paste_word_valid_elements`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pasteword',
  menubar: 'edit',
  paste_word_valid_elements: 'b,strong,i,em,h1,h2'
});
```

### `paste_retain_style_properties`
This option allows you to specify which styles you want to retain when pasting contents from MS Word and similar Office suite products. This option can be set to a space-separated list of CSS style names, or `"all"` if you want all styles to be retained.

**Type:** `String`

#### Example: Using `paste_retain_style_properties`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'pasteword',
  menubar: 'edit',
  paste_retain_style_properties: 'color font-size'
});
```

### `paste_convert_word_fake_lists`
This option lets you disable the logic that converts list like paragraph structures into real semantic HTML lists.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_convert_word_fake_lists`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'pasteword',
  menubar: 'edit',
  paste_convert_word_fake_lists: false
});
```
