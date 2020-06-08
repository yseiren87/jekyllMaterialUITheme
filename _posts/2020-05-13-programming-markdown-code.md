---
layout: post
categories: programming
menu: [markdown, syntax]
tags: [markdown, code]

title: Code
description: Markdown Code syntax
---

# Code

## Code

### Basic
<pre>
I love `you`.
</pre>

### Escaping Backticks
<pre>
``I love `you`, Baby``.
</pre>

#### Code Blocks
<pre>
    <html>
        <head>
        </head>
    </html>
</pre>

### Fenced Code Blocks

#### Basic
<pre>
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
</pre>

<pre>
~~~
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
~~~
</pre>

#### Highlighting
<pre>
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
</pre>







## Links

<pre>
I love [google](https://google.com).
</pre>

### Adding Titles
<pre>
I love [google](https://google.com "go to google").
</pre>

### Urls and Email
<pre>
<https://google.com>
<yseiren87@gmail.com>
</pre>

### With Format

<pre>
I love **[google](https://google.com)**.
I love *[google](https://google.com)*.
I love [code](#code).
</pre>

### Automatic URL Linkings
<pre>
http://www.example.com
</pre>

### Disabling Automatic URL Linking
<pre>
`http://www.example.com`
</pre>


## Images

### Basic
<pre>
![This is very good](/assets/images/philly-magic-gardens.jpg "philly magic gardens")
</pre>

### With Links
<pre>
[![Old rock](/assets/images/old-rock.jpg) "old rock" ](https://google.com)
</pre>

## Escaping Characters
<pre>
\* blah blah blah
</pre>

## HTML
<pre>
I love **you**, I love <em>you</em>. 
</pre>

## Tables

### Basic
<pre>
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
</pre>

### Alignment
<pre>
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
</pre>

## Footnotes
<pre>
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
</pre>

## Emoji
<pre>
Gone camping! :tent: Be back soon.

That is so funny! :joy:
</pre>
