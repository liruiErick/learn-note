[
    'extend',
    'proxy',
    'bind',
    'createApi',
    'destroy',
    'hideAction',

    'createElement',
    'removeElement',

    '$',
    'attr',
    'css',

    'toArray',

    'isArray',
    'isNumber',
    'isString',
    'isFunction',
    'isUndefined',
    'isDOM',
    'isJQ'
].forEach(m => {
    exports[m] = require(`./${m}`).default
})
