# Exception Logger

Interface your logs with Loggly using this logging module.

## Install

```
npm install exception-logger --save
npm install linchpin --save
```

## Usage

index.js

```
var loggr = require('exception-logger');
loggr({ token: 'YOUR-Loggly-Token'});
```

Any module that wants to report to the logger justs requires `linchpin` and 
emits events.

anymodule.js

```
var pin = require('linchpin');

app.do(function(err, value) {
  if (err) { return pin.emit('ERROR', err); }
});

```

## Test

```
npm test
```

## Issues

see Github Issues.


