<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Split Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Transform stream][transform-stream] which splits streamed data.



<section class="usage">

## Usage

```javascript
import splitStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-split@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory, objectMode } from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-split@deno/mod.js';
```

<a name="split-stream"></a>

#### splitStream( \[options] )

Creates a [transform stream][transform-stream] which splits streamed data.

```javascript
import stdout from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdout@deno/mod.js';

var stream = splitStream();

stream.pipe( stdout );
stream.write( '1\n2\n3' );

stream.end();

// prints: 1 => 2 => 3
```

The function accepts the following `options`:

-   **sep**: separator used to split streamed data. Similar to [`String#split`][string-split], a separator may be either a [regular expression][regexp] or a `string`. Default: `/\r?\n/`.
-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **writableObjectMode**: specifies whether the writable side should be in [objectMode][object-mode]. Default: `false`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'sep': ',',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'writableObjectMode': false // overridden by `objectMode` option when `objectMode=true`
};

var stream = splitStream( opts );
```

#### splitStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'sep': '\t',
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var factory = splitStream.factory( opts );

// Create 10 identically configured streams...
var streams = [];
var i;
for ( i = 0; i < 10; i++ ) {
    streams.push( factory() );
}
```

This method accepts the same `options` as [`splitStream()`](#split-stream).

#### splitStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which always operate in [objectMode][object-mode].

```javascript
import stdout from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdout@deno/mod.js';

var stream = splitStream.objectMode({
    'sep': ','
});

stream.pipe( stdout );
stream.write( 'a,b,c' );

stream.end();

// prints: a => b => c
```

This method accepts the same `options` as [`splitStream()`](#split-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Similar to [`String#split`][string-split], a separator which is a [regular expression][regexp] containing a matching group will result in the separator being retained in the output stream.

    ```javascript
    import stdout from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdout@deno/mod.js';

    var stream = splitStream({
        'sep': /(,)/
    });

    stream.pipe( stdout );
    stream.write( '1,2,3' );

    stream.end();

    // prints: 1 => , => 2 => , => 3
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import transformStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@deno/mod.js';
import stdout from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdout@deno/mod.js';
import splitStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-split@deno/mod.js';

function append( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\n' );
}

var newline;
var stream;
var i;

// Create a split stream to split tab delimited data:
stream = splitStream({
    'sep': /\t/
});

// Create a transform stream to make newline delimited data...
newline = transformStream({
    'transform': append,
    'objectMode': true
});

// Create a stream pipeline:
stream
    .pipe( newline )
    .pipe( stdout );

// Write data to the pipeline...
for ( i = 0; i < 10; i++ ) {
    stream.write( i+'\t', 'utf8' );
}
stream.end();
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/streams-node/join`][@stdlib/streams/node/join]</span><span class="delimiter">: </span><span class="description">transform stream which joins streamed data.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-split.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-split

[test-image]: https://github.com/stdlib-js/streams-node-split/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-split/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-split/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-split?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-split.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-split/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-split/tree/deno
[umd-url]: https://github.com/stdlib-js/streams-node-split/tree/umd
[esm-url]: https://github.com/stdlib-js/streams-node-split/tree/esm
[branches-url]: https://github.com/stdlib-js/streams-node-split/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-split/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[transform-stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[string-split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/streams/node/join]: https://github.com/stdlib-js/streams-node-join/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
