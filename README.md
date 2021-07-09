# Web Dev 2021 Challenge

## Development

To start development run `npm start`.  
It should compile all the SCSS files for you, as well as spin a local web server.

It will _not_ automatically reload when saving.

### Fake API

This repository already contains a fake API you can use to interact with during the challenge.  
All this is is a local file called `database.json` to which you will be reading from and writing to.

To make it available during development you will need to run `npm run api`.  
You should see a bunch of information in the command line, including the endpoints you have available, which at this point is only `/reviews`.

Please refer to the official documentation of `json-server` here: https://github.com/typicode/json-server/blob/master/README.md#getting-started  
There, you will find useful information such as how to make any type of request you might need for the sake of this challenge.
