# Discover China
(assets/images/websiteSnip.png)
This is a website that provides information to users on three key chinese cities and locations to visit in those different cities.
[LiveSite](https://jacktubby.github.io/MS2/)

## UX 
This project is targeted at a wide range of users, from distinguished travellers, to first time travellers. The main focus on the website is to provide information, recommended tourist locations, images, map locations, contact form and social media links.

### Strategy
#### Project Goals
* Provide recommended locations in China for users who want to visit.
* Show tourist destinations in each of the recommended locations.
* Provide information on tourist destinations.
* Provide links to extra resources about the tourist destinations.
* Provide a location on a map to show where the tourist destination is.
* For users to leave the site knowing of good tourist destinations in China.

### Owner Stories
* "I want my users to be able to get in contact, by submitting a contact form".
* "I want my users to be able to see our recommended locations in China".
* "I want my users to be able to click on markers at tourist destinations, in our recommended locations maps".
* "I want my users to be easily linked to more resources about the recommended tourist destinations.
* "I want my users to learn of different tourist destinations in the recommended locations".

### User Stories
* "I want to know where I should visit China".
* "I want to see some recommended locations in China".
* "I want to learn about tourist destinations in China if I decide to visit".
* "I do all my online searches on my mobile".
* "I want to see the tourist locations on a map".
* "I want to know simple facts about China".
* "I want to be able to get in touch, using a contact form if I have more questions".

### Surface

#### Colours
 I have chosen colours that suit the oriental theme of my website. The colours that have been chosen are:
 - #fff3db, 
 - #a61f0b,
 - #542527,
 - #f25b43,
 - white,
 - black,
#### Typography
- "Stylish" Used for titles as it goes well with the oriental theme.
- "Lato" Used for most of the text throughout the website, as it is a clean font and makes it very user friendly and easy to read.
#### Imagery
Imagery was carefully chosen to best show each tourist location.
### Wireframes
My wireframe includes a desktop, tablet and mobile version.
[WireFrame](assets/docs/DiscoverChinaWireframe.pdf)

## Features 
### Existing Features
- Designed with HTML5, Bootstrap, CSS3, Javascript.
- A to top button to assist users to get back to the top of the page easily.
- A bootstrap carousel to showcase some images of China, when users first click onto the website.
- A section to show the websites mission and why should you visit China.
- A button to find out more about China.
- Clickable buttons to showcase three recommended locations in China, which then provides more tourist destinations once clicked.
- A map with tourist destination markers and information windows.
- A contact form to get in touch to find out more about China.
- Links in each tourist location that opens a relevant website or reviews.
- Each tourist location has a showcase of images that are clickable and open in a new tab. 

## Features Left to Implement
- A section showing the current weather in China throughout the year.
- Incorporate hotel deals from an api into the website. 

### Languages, Frameworks, Libraries & Programs Used 
- HTML5
- CSS3
- Javascript
- JQuery
- Bootstrap
 - I used bootstrap to assist with responsiveness of the website.
- Google Fonts
 - Google fonts was used to give the fonts 'Stylish' and 'Lato'.
- Git
 - Git was used for version control to commit to Git and Push to GitHub.
- GitHub
 - GitHub was used to store the project in a repository.
- Balsamiq
 - Balsamiq was used to create the wireframes during the early design process.
- [Tinyjpg.com](https://tinyjpg.com)
 - Tingjpg.com was used to reduce image file sizes, to improve loading times.

 ## Testing
### HTML Testing
Ran all HTML through [W3 Validator](https://validator.w3.org)
- **One Error:** "The element button must not appear as a descendant of the a element." **Fix** Removed anchor tags and changed the button elements to anchor tags.  
[HTML Validator No Errors](assets/images/htmlValidator.png)
### CSS Testing 
Ran all CSS through [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)
[CSS Validators No Errors](assets/images/cssValidator.png)
### Javascript Testing
Ran all Javascript through [JSHint](https://jshint.com)
#### script.js
- **No errors**
#### sendEamil.js
- **No errors**
#### map.js
- **No errors:**
### Responsiveness
- Using **Dev Tools** a range of widths on different devices were tested from a Moto G4 (360px) to desktop screen (1920px). 
- Physically viewed on multiple devices (Iphone XR, Iphone 12, Iphone 12 Plus, Ipad, Desktop).
- Tested on multiple browsers (Google Chrome, Opera, Firefox, Microsoft Edge and Safari).
### Manual Testing problems and solutions
- I found an issue with page loading times, after looking for what was casuing the issue I established it was the amount of images, to fix this I reduced the file sizes and added the lazy loading attribute to the images.
- After checking the website on each device on chrome developer tools, I found bootstrap medium classes only applied to normal sized tablets, larger tablets like the Ipad Pro caused the site responsiveness to break. To fix this I added in a media query to hide the images that broke the responsiveness. 
- A bug was found with the slideshow/ hero images that caused them to be reloaded everytime they finished going through the slideshow, this caused the loading time to go up. To fix this issue I removed the custom script and opted for bootstrap carousul which fixed the bug.
- I found a bug where the to top button would go behind the map, to fix this I added **z-index: 1;** to the map.
- Lazy Loading is currently supported by (Chrome, Edge, Opera and Firefox). It is currently under development for Safari [Link About lazy loading support](https://web.dev/browser-level-image-lazy-loading/).
- Top Button goes behind 

## Deployment
This site was deployed on GitHub Pages, the steps I took to do this was:
- The code was written in VS Code.
- I pushed the code to my GitHub repository.
- In the repository settings, I scrolled down to the GitHub Pages.
- Under 'source', I selected the 'master branch'. 
- I published the project to GitHub pages, which provided me with a url.
- The deployed website and development site are the same.

 ## Credits
 ### Code
 [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap was used to add responsiveness to the website.
 [Pexels](https://www.pexels.com/): Pexels was used to provide images for the website.
 ### Media
 * The photos used in the Gallery were obtained from two locations: Google Reviews and https://www.pexels.com/
 * Trip Advisor and Wikipedia was utilized for information on the info options, and to provide a link to the corresponding option.

 ### Acknowledgements
 - Tim Nelson for his assistance with LeafletJS.
 - Slack Community and CI staff that helped with questions and assistance throughout development.
 - Mentor - My mentor helped me decide where to focus my time and make improvements, which was very beneficial for my site development.