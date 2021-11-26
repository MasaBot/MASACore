# MASACore

Provides core MASA APIs used by the Discord bot [MASA](https://github.com/Tembero11/MASA)


```javascript
// Basic Hello, World! server example
const server = new MASA.GameServer("...", "./example");

server.on("join", (event) => {
  event.player.sendMessage("Hello World!");
});

server.start();
```
