dirge.js
========

Ever wanted to schedule a blog post for future publishing or set a date for
an event listing to be hidden? Then dirge _may_ be a solution.

We say it only _may_ be a solution because if you have server-side rendering,
or a fully-featured JS framework, then there are definitely better ways to
do this.

If you have a statically-generated website, e.g. Jekyll,

## Usage

One line to scan all elements to look for `data-dirge-*` attributes

```javascript
$(document).dirge();
```

or

to specify the same config for a specific selection of elements, use the
appropriate css selector

```html
<div id="event">
  <h2>Wild party</h2>
  <p>2016-04-01</p>
</div>
<div id="expired-event">
  <p>Wild party was wild</p>
</div>
```

```javascript
$('#event').dirge({
  period: {
    end: '2016-04-01'
  },
  replaceWith: $('#expired-event')
});
```

or
