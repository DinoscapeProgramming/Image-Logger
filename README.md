# Image Logger
Log images on the console

## Get started

### Script Tag
First copy the file __image-logger.js__ and then add this script tag into your body tag
```html
<script src="image-logger.js"></script>
```

## Use the framework

You need to call a function named __console.image__. Specify a image url as parameter.
```js
console.image("imageURL")
```

## Example

### index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Image Logger</title>
</head>

<body>
  <script src="image-logger.js"></script>
  <script src="script.js"></script>
</body>

</html>
```

### script.js
```js
console.image("https://avatars.githubusercontent.com/u/95239392?v=4")
```

### image-logger.js
Copy the file from this repository
