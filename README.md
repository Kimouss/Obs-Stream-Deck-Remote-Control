# Obs-Stream-Deck-Remote-Control
Interface to control OBS with socket



## Downloads

Binaries for Windows, MacOS, and Linux are available in the [Releases](https://github.com/Palakis/obs-websocket/releases) section.

## Installation
Replace address value in `/js/main.js` by your (stream machine) IP address, but keep port.
(You define port in obs-websocket).
```js
await obs.connect({ address: '192.168.10.10:4444', password: 'obscontrol' });
```

```sh
yarn install
```

## Usage
Run app and go http://localhost:3000/
```sh
yarn run dev
```
