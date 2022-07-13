# CoinList

A React Native test task

### Run it
1. `npm install`
2. `react-native run-ios` or `react-native run-android`

### Screenshots

#### Android

<img alt="Android List Screen" src="https://i.imgur.com/kB06wTv.png" width="300">
<img alt="Android Details Screen" src="https://i.imgur.com/R0AYkwi.png" width="300">

### Notes

- I wrote test for few files because I already spent quite a time making UI pretty (highlighting links in descriptions took unexpectedly a lot of it)
- Highlighting library I used has some weird warning `Warning: Failed prop type: HyperlinkedText: prop type linkStyle is invalid; it must be a function`. But in its source code, propType is `style`. Already took too much time to debug it, so I stopped at some point.
- Usually I use axios or wretch, but here I made a tiny wrapper to not setup one more library.
- Same for redux. App isn't complex, so I used context-based "store" for markets (because we actually need to store them all the time). And local state for coin details screen (because anyway we want to update it, and I wanted to show that I'm familiar with hooks).
- react-navigation requires running `npx pod-install ios` to complete linking. I don't have a Mac machine right now, so if you want to check iOS version, you will need to run it.
