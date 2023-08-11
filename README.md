# TinyMCE 6 Word Paste Plugin
This plugin provides the capability to accept data from Microsoft Word, and clean-up the received data before pasting it into place.

Based on [TinyMCE 5.10.7 paste plugin](https://github.com/tinymce/tinymce/tree/5.10.7/modules/tinymce/src/plugins/paste/main/ts).

## Usage
Install package

```bash
npm install @openregion/tinymce-word-paste-plugin
```

Import plugin

```js
import '@openregion/tinymce-word-paste-plugin';
```

## Options
### `paste_enable_default_filters`

This option allows you to disable TinyMCE's default paste filters when set to false.

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

>**Note:** To access this feature, you need to set the value of `paste_enable_default_filters` to `"false"` in your configuration.

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
