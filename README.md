# Find a room

PLaying with VueJs 2.

It uses: 

* [VueJs 2](https://vuejs.org/): an awesome JS Framework ❤️
  * [vue-resource](https://github.com/pagekit/vue-resource): Vuejs extension for XMLHttpRequest
* [SemanticUI](http://semantic-ui.com/): CSS Framework.

## Dev tools

If you don't want to install NPM on your machine, you can use Docker :whale::

```bash
docker build -t vueapp --rm .
docker run -it -v $PWD:/src -p 127.0.0.1:8080:8080 vueapp bash
npm install
```

Available command:

* `npm start`: start a mini HTTP server, then go to: 
  * [127.0.0.1:8080](http://127.0.0.1:8080)
* `npm run lint`: lint app.js and admin.js
