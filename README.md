# Gitbook Image Wrapper Plugin

This plugin will wrap your images in a div with a class of *image-wrapper*. This allows you to add CSS styles to style the way the image is displayed.

```
<div class="image-wrapper" />
```

## Usage

### Installation

Add the plugin to your `book.json`:

```
{
    "plugins" : [ "image-wrapper" ]
}
```

### Add Images

Add images normally to your document using Markdown

```
![Alt Text](/assets/image-url.jpg)
```

Each image will be wrapped in a div like this

```
<div class="image-wrapper">
	<img src="/assets/image-url.jpg" alt="Alt Text" />
</div>
```

### Style It

Add the following CSS to your book to center your images and add some additional spacing:

```
.image-wrapper {
	text-align: center;
	padding: 15px 0px;
}
```

## Why

When building the getting started guide for my startup [Election Runner](https://electionrunner.com/) I was annoyed at the limitation of Markdown and not being able to add inline-styles without using HTML. All I wanted to do was center images and make them responsive, so I made this little plugin.