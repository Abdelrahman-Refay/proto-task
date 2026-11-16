### 1\. DOM Selectors

DOM Selectors are methods used to select and access HTML elements from the DOM (Document Object Model) using JavaScript.

They allow developers to find specific elements based on their ID, class, tag name, or CSS selectors.

The selected elements can then be accessed and manipulated.

### 2\. NodeList vs HTMLCollection

Both NodeList and HTMLCollection are collections of DOM nodes or elements returned by DOM selection methods.

The main differences are:

| NodeList                             | HTMLCollection                      |
| ------------------------------------ | ----------------------------------- |
| Can contain different types of nodes | Contains only HTML elements         |
| Can be static or live                | Always live                         |
| Supports forEach()                   | Does not directly support forEach() |
| Can be accessed using indexes        | Can be accessed using indexes       |

Static: Does not automatically update when the DOM changes.

Live: Automatically updates when the DOM changes.

### 3\. removeAttribute()

`removeAttribute()` is a DOM method used to remove a specific attribute from an HTML element.

It removes the attribute itself, not the HTML element.

It can be used to remove attributes such as `class`, `id`, `disabled`, `src`, or `href`.

Official references:

* [MDN – DOM Selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model?utm_source=chatgpt.com)

* [MDN – NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList?utm_source=chatgpt.com)

* [MDN – HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection?utm_source=chatgpt.com)

* [MDN – removeAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute?utm_source=chatgpt.com)
*