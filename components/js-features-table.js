import React from 'react'

// TODO: Make this not look terrible
// We probably need some CSS stuff to be done here
function createMarkup() {
  return {
    __html: `

<!-- Generated with gatsby/src/data/javascript-features.js -->
<table>
<thead>
<tr>
<th>Feature</th>
<th>Works with Expo</th>
<th>Links</th>
<th>Spec</th>
<th>Implementation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Object rest/spread</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">MDN</a>
<br />
<a href="http://2ality.com/2016/10/rest-spread-properties.html">2ality</a></td>
<td>Proposal</td>
<td>Babel
<hr class="vertical-divider" />
No JSC support</td>
</tr>
<tr>
<td>Class properties</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://tc39.github.io/proposal-class-public-fields/">TC39 Proposal</a></td>
<td>Proposal</td>
<td>Babel
<hr class="vertical-divider" />
No JSC support</td>
</tr>
<tr>
<td>Revised template literals (lenient escape sequences)</td>
<td><span class="centered-text-cell">
❌
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">MDN</a>
<br />
<a href="http://2ality.com/2016/09/template-literal-revision.html">2ality</a></td>
<td>ES2018</td>
<td>JSC support: iOS 11</td>
</tr>
<tr>
<td>Async functions (
<code>async</code>
/
<code>await</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_async-functions.html">Exploring ES2017</a></td>
<td>ES2017</td>
<td>Babel with Regenerator
<hr class="vertical-divider" />
JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>Trailing commas in function calls and signatures</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_trailing-comma-parameters.html">Exploring ES2017</a></td>
<td>ES2017</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>Shared memory (SharedArrayBuffer, Atomics)</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10.3+, iOS 10.3 doesn’t implement byteLength)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer">MDN (SharedArrayBuffer)</a>
<br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics">MDN (Atomics)</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_shared-array-buffer.html">Exploring ES2017</a></td>
<td>ES2017</td>
<td>JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>Object static methods (entries, values, getOwnPropertyDescriptors)</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+, and only Object.entries and Object.values on iOS 9)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_object-entries-object-values.html">Exploring ES2017 (entries, values)</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_object-getownpropertydescriptors.html">Exploring ES2017 (getOwnPropertyDescriptors)</a></td>
<td>ES2017</td>
<td>Polyfills for Object.entries and Object.values
<hr class="vertical-divider" />
JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>String instance methods (padStart, padEnd)</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_string-padding.html">Exploring ES2017</a></td>
<td>ES2017</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Proxy 
<code>ownKeys</code>
 handler</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/ownKeys">MDN</a></td>
<td>ES2017</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Exponentiation operator (
<code>**</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**)">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_exponentiation-operator.html">Exploring ES2017</a></td>
<td>ES2016</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>Destructuring nested rest declarations</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring">MDN</a></td>
<td>ES2016</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10.3+</td>
</tr>
<tr>
<td>Array.prototype.includes</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">MDN</a>
<br />
<a href="http://exploringjs.com/es2016-es2017/ch_array-prototype-includes.html">Exploring ES2016</a></td>
<td>ES2016</td>
<td>Polyfilled
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td><code>for</code>
…
<code>of</code>
 loops</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_for-of.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Array instance methods (entries, keys, values, find, findIndex, copyWithin, fill)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_arrays.html#sec_new-array-prototype-methods">Exploring ES6</a></td>
<td>ES2015</td>
<td>Some methods have polyfills
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Octal and binary literals</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="http://exploringjs.com/es6/ch_numbers.html#sec_new-integer-literals">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Number static properties and methods (EPSILON, MIN
<em>SAFE</em>
INTEGER, MAX
<em>SAFE</em>
INTEGER, isInteger, isSafeInteger, isNaN, isFinite, parseInt, parseFloat)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_numbers.html#sec_new-static-number-props">Exploring ES6</a></td>
<td>ES2015</td>
<td>Some properties and methods have polyfills
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Math static methods (sign, trunc, cbrt, expm1, log1p, log2, log10, fround, imul, clz32, sinh, cosh, tanh, asinh, acosh, atanh, hypot)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_numbers.html#sec_new-math">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Unicode code point escapes</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="http://exploringjs.com/es6/ch_unicode.html#sec_escape-sequences">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel, in string literals
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>String instance methods (codePointAt, normalize, startsWith, endsWith, includes, repeat)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_strings.html#sec_reference-strings">Exploring ES6</a></td>
<td>ES2015</td>
<td>Some methods have polyfills
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>String static methods (raw, fromCodePoint)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_strings.html#sec_reference-strings">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Symbols</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_symbols.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Template literals (including tags)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_template-literals.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Block scoping (
<code>let</code>
, 
<code>const</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block">MDN</a>
<br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">MDN (let)</a>
<br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">MDN (const)</a>
<br />
<a href="http://www.2ality.com/2015/02/es6-scoping.html">2ality</a>
<br />
<a href="http://exploringjs.com/es6/ch_variables.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Destructuring syntax</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_destructuring.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td>Default parameter values</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_parameter-handling.html#sec_parameter-default-values">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Rest parameters (
<code>...</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_parameter-handling.html#sec_rest-parameters">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Spread syntax (
<code>...</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td>Function 
<code>name</code>
 property</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_callables.html#sec_function-names">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td><code>new.target</code></td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_callables.html#_how-do-i-determine-whether-a-function-was-invoked-via-new">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Arrow functions</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_arrow-functions.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Object static methods (assign, is, setPrototypeOf, getOwnPropertySymbols)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_oop-besides-classes.html#sec_new-methods-object">Exploring ES6</a></td>
<td>ES2015</td>
<td>Polyfill for Object.assign (overrides native implementation with stricter one)
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Shorthand for object methods</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_oop-besides-classes.html#object-literal-method-definitions">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Shorthand for object properties</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_oop-besides-classes.html#_property-value-shorthands-1">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Computed properties and methods</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_oop-besides-classes.html#_computed-property-keys-1">Exploring ES6 (properties)</a>
<br />
<a href="http://exploringjs.com/es6/ch_classes.html#_computed-method-names">Exploring ES6 (methods)</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td>Classes</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_classes.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td>Modules (
<code>import</code>
, 
<code>export</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">MDN (import)</a>
<br />
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export">MDN (export)</a>
<br />
<a href="http://exploringjs.com/es6/ch_modules.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
Natively supported on Android and iOS 10+ but we always use Babel’s implementation</td>
</tr>
<tr>
<td>Map</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_maps-sets.html#sec_map">Exploring ES6</a></td>
<td>ES2015</td>
<td>Polyfilled
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Set</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_maps-sets.html#sec_set">Exploring ES6</a></td>
<td>ES2015</td>
<td>Polyfilled
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>WeakMap</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_maps-sets.html#sec_weakmap">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>WeakSet</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_maps-sets.html#sec_weakset">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Typed arrays (ArrayBuffers, DataViews)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_typed-arrays.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Polyfilled on iOS 9
<hr class="vertical-divider" />
JSC support: Android, iOS 9 (partially), iOS 10+</td>
</tr>
<tr>
<td>Generators (
<code>function*</code>
)</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_generators.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Babel
<hr class="vertical-divider" />
JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>RegExp 
<code>y</code>
 and 
<code>u</code>
 flags</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_regexp.html#sec_regexp-flag-y">Exploring ES6 (sticky “y”)</a>
<br />
<a href="http://exploringjs.com/es6/ch_regexp.html#sec_regexp-flag-u">Exploring ES6 (unicode “u”)</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>RegExp.prototype.flags</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_regexp.html#sec_regexp-data-property-flags">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Promises</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_promises.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>Polyfill overrides native implementation
<hr class="vertical-divider" />
JSC support: Android, iOS 9+</td>
</tr>
<tr>
<td>Proxy</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_proxies.html">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Reflect (object introspection)</td>
<td><span class="centered-text-cell">
⚠️
<br />
(Android and iOS 10+)
</span></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflex">MDN</a>
<br />
<a href="http://exploringjs.com/es6/ch_proxies.html#_reflect">Exploring ES6</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 10+</td>
</tr>
<tr>
<td>Tail call optimization</td>
<td><span class="centered-text-cell">
✅
</span></td>
<td><a href="http://exploringjs.com/es6/ch_tail-calls.html">Exploring ES6</a>
<br />
<a href="http://www.2ality.com/2015/06/tail-call-optimization.html">2ality</a></td>
<td>ES2015</td>
<td>JSC support: Android, iOS 9+</td>
</tr>
</tbody>
</table>
`
  }
}

export default class JSFeaturesTable extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={createMarkup()} />
  }
}
