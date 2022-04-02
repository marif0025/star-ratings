
# Star Rating Component

A lightweight Js library to add star rating component.

### Features

- Add interactive star rating components to get rating from users.
- Add readonly star rating component to show rating to 

### Live preview url
[Go to live preview](https://marif0025.github.io/star-ratings/)

### Add in your project
- [Download rating script](https://github.com/marif0025/star-ratings/blob/master/public/assets/js/ratings.js) and add in your project
- [Download rating css](https://github.com/marif0025/star-ratings/blob/master/public/assets/css/ratings.css) and add in your project

```html
    <!-- data-rating for initial rating -->
    <div class="ratings" data-rating="3.8"></div>
```

```js
    ratingPlugin.init({
        selector: 'ratings', //Rating component class
        onChange: (el, value) => { //On change function, which returns user input and set rating function
            console.log('Rating Value : ', value);
            ratingPlugin.setRating(el, 3.5)
        }
    });
```

## License

MIT

**Free Software, Hell Yeah!**
