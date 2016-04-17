dirge.js
========

Ever wanted to schedule a blog post for future publishing or set a date for
an event listing to be hidden? Then dirge _may_ be a solution.

We say it only _may_ be a solution because if you have server-side rendering,
or a fully-featured JS framework, then there are definitely better ways to
do this.

If you have a static website, e.g. Jekyll, and just want a simple way of showing
and hiding elements then dirge.js can help.

## Usage

Initialise dirge.js by calling it on any jQuery selection. It will then
scan all child elements looking for `data-dirge-*` attributes.

```javascript
$(document).dirge();
```

Typical usage is via `data-dirge-*` attributes:

| Attribute                 | Description              |
| ------------------------- | ------------------------ |
| `data-dirge-start`        | Any absolute date-string |
| `data-dirge-end`          | Any absolute date-string or relative period from start date |
| `data-dirge-replace-with` | Element ID to be shown after end date |

dirge.js can be initialised with a configuration object which will be applied
to all elements selected by the jQuery selector. Note that any `data-dirge-*`
attributes will override those specified in the configuration object.

```javascript
$('.post').dirge({ end: '1month' });
```

## Date-strings

The `data-dirge-start` attribute only accepts absolute date-strings allowed
by [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).

Relative date-times are expressed by a positive integer and an identifier.
Available identifiers come in long and short forms:

| Long form | Short form |
| --------- | ---------- |
| second    | s          |
| minute    | m          |
| hour      | h          |
| day       | d          |
| week      | w          |
| month     | M          |
| year      | y          |

Some examples of how end-dates are resolved:

| Start Date | End Date   | Resolved End Date |
| ---------- | ---------- | ----------------- |
| 2016-04-01 | 2016-05-01 | 2016-05-01        |
| 2016-04-01 | 1M         | 2016-05-01        |
| 2016-04-01 | 1month     | 2016-05-01        |
| 2016-04-01 | 1year      | 2017-05-01        |

---

## Configuration

### $.dirge()

```javascript
{
  period: {
    start: ''
    end: ''
  },
  replaceWith: $()
}
```
