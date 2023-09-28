# emoji-kitchen-api

Simple API to generate custom emojis using Google's project Emoji Kitchen

Hosted at [https://emoji-kitchen-api.vercel.app/](https://emoji-kitchen-api.vercel.app/)

## Installation

To install the project and its dependencies, run:

```bash
npm install
```

## Usage

To start the project locally, run:

```bash
npm start
```

This will start the project on <http://localhost:3000> by default, or on the port specified in the `PORT` environment variable.

## API Reference

- GET [/emoji](https://emoji-kitchen-api.vercel.app/emoji): Returns a list of all emojis.
- GET [/emoji/:emoji/combinations](https://emoji-kitchen-api.vercel.app/emoji/👻/combinations): Returns a list of emoji combinations for a specific emoji.
- GET [/mix/random](https://emoji-kitchen-api.vercel.app/mix/random): Returns a random emoji mix.
- GET [/mix/:emoji1/:emoji2](https://emoji-kitchen-api.vercel.app/mix/👻/🏍️): Returns a specific emoji mix.

## Tests

To run the tests use:

```bash
npm test
```

The project uses the following testing libraries:

- [Mocha](https://mochajs.org/): A test framework that runs on Node.js and in the browser.
- [Chai](https://www.chaijs.com/): A BDD / TDD assertion library for node and the browser.
- [Sinon](https://sinonjs.org/): Standalone test spies, stubs and mocks.

## Contributing

Any help or feedback is appreciated. Feel free to open an issue or submit a pull request.

## Acknowledgements

Special thanks to [xsalazar](https://github.com/xsalazar) for his research and depelopment with the [emoji-kitchen](https://github.com/xsalazar/emoji-kitchen) project, it served as inspiration and a starting point for this project.

## License

Licensed under the terms of the [MIT license](LICENSE).
