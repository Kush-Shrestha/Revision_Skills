There are 8 data types:

number:- for both floating-point and integer numbers,
bigint:- for integer numbers of arbitrary length,
string:- for strings,
boolean:- for logical values: true/false,
null: – a type with a single value null, meaning “empty” or “does not exist”,
undefined:– a type with a single value undefined, meaning “not assigned”,
object and symbol: – for complex data structures and unique identifiers, we haven’t learnt them yet.
Strict mode
To fully enable all features of modern JavaScript, we should start scripts with "use strict".
```
'use strict';

...
```
The directive must be at the top of a script or at the beginning of a function body.

Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.

 
