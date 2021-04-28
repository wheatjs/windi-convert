# WindiCSS Attributify Converter

## Run
```bash
npx @wheatjs/windi-convert 
```

> Warning this is experimental. Backup your project before running this tool.

## Example

Input
```html
<input
  id="input"
  type="text"
  class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
>
```

Output
```html
<input
  id="input"
  type="text"
  p="x-4 y-2"
  text="sm center"
  bg="transparent"
  border="~ gray-200 rounded dark:gray-700"
  outline="none active:none"
>
```