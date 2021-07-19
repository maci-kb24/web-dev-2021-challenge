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

# Thoughts Process,challenges etc. 

## Styling

In terms of styling, i have a challenge how to style the star ratings. I had two options,to use SVG or an icon because these are the best for performance. At the end,i used icons from fontAwesome,as i couldn't make the default outline white icon to fill the color on hover and active.

In HTML, at first i was using input with radio type but i realised i need type of checkbox to filter through.

For mobile version,i used media query to remove the sticky hover pseudo class and instead i used active class. 

For the desktop version,on hover i add a div inside the image where the parent div has position:relative and on child element i used positon:absolute with opacity:0 and then on hover i make the opacity to 1. 

Of course,i used the right spacing from the Sketch design. 

## Functionality 

Moving along with Javascript,i have three main functions. First one,i added an event listener on write a review button. Then on click fires an function which shows the review form. 

To listen to the star ratings,at first i was thinking to use forEach loop to loop through the inputs and that way to add event listener to every input, filter between checked and unchecked and them use map to get the value. Instead,i decided just to add onlick on every input just because it is more simple and better for performance. Then, based on the value, i used if else condition to display the textarea. Since i'm adding the textarea manipulating the DOM,i could have removed the additional text in the HTML.

On click of one of the star rating,it displays the textarea all while the button is disabled and the spinned is loading. Once you start typing in the textarea,the i display the button and remove the spinner listening to the textarea on keypress.

Finally,i added the function with submit form. I listen to the form with submit. I'm getting the star ratings value from the previous function, as a mentioned on every input i added an onclick and then i passed on argument and getting the value and then i store the ratings and comment values in a variable. For the id and productId,i just choose to add a random number from 1 to 100 when you submit with math.floor and math.random.

At the end,when i submit the form, the button becames disabled just by adding the true value and the check icon shows it the response is successfull. If it's not,it displays the X icon. 

Thanks all for your time.

