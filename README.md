# Exception Logger

Interface your logs with Loggly using this logging module.

```
npm install exception-logger --save
npm install linchpin --save
```

```
var el = require('exception-logger');
el.config({
  loggly: ...
  eventListeners: ['ERROR']
});
```

Any module that wants to report to the logger justs requires `linchpin` and 
emits events.

```
var pin = require('linchpin');


....


app.do(function(err, value) {
  if (err) { return pin.emit('ERROR', err); }
});

```


