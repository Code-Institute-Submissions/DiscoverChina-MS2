# Discover China
![Website Snippet](assets/images/website-snip.png)
This is a website that provides information to users on three key chinese cities and locations to visit in those different cities.
[LiveSite](https://jacktubby.github.io/DiscoverChina-MS2/)

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
* "I want my users to be easily linked to more resources about the recommended tourist destinations".
* "I want my users to learn of different tourist destinations in the recommended locations".

### User Stories
* "I want to see idea's of where I should visit China". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story1.png)
* "I want to see some recommended locations in China". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story2.png)
* "I want to learn about tourist destinations in China if I decide to visit". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story3.png)
* "I do all my online searches on my mobile". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story4.png)
* "I want to see the tourist locations on a map". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story5.png)
* "I want to know simple facts about China". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story6.png)
* "I want to be able to get in touch, using a contact form if I have more questions". **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story7.png)
* "If I get a 404 error I want to be able to get back to the homepage without using the browser back buttons" **Screenshot of finished project that aligns with user story** [Screenshot](assets/images/screenshot-of-user-story8.png)

### Surface

#### Colours
 I have chosen colours that suit the oriental theme of my website. The colours that have been chosen are:
 - #fff3db
 - #a61f0b
 - #542527
 - #f25b43
 - white
 - black
#### Typography
- "Stylish" Used for titles as it goes well with the oriental theme.
- "Lato" Used for most of the text throughout the website, as it is a clean font and makes it very user-friendly and easy to read.
#### Imagery
Imagery was carefully chosen to best show each tourist location.
#### Map
An interactive map with markers and info windows, with a zoom to location when the location button is clicked.
### Wireframes
I have two wireframes one for the main website (Discover China) and another for my 404 error page. The Discover China wireframe shows a desktop, tablet and mobile version, the 404 error page is the same for all devices.
- [Wireframe Discover China](assets/docs/DiscoverChinaWireframe.pdf)
- [Wireframe 404 error page](assets/docs/404-error-page-wireframe.pdf)

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
Ran all HTML (index.html and 404.html) through [W3 Validator](https://validator.w3.org)
- **One Error (index.html):** "The element button must not appear as a descendant of the a element." **Fix** Removed anchor tags and changed the button elements to anchor tags. 
[HTML Validator](assets/images/html-validator.png) No other errors.
### Manual Testing 404.html
To manually test the 404 error page, I typed my github index page link incorrectly (https://jacktubby.github.io/DiscoverChina-MS2/indexx.html) which then showed my 404 error page. 
### CSS Testing 
Ran all CSS through [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)
[CSS Validator](assets/images/css-validator.png) no errors.
### Javascript Testing
- Navigation & Intro
    - Clicked on all navbar links to check smooth scrolling is working. **Worked** 
- About Section 
    - Clicked on 'Facts About China' button to check it opens the correct content. **Worked**
- Recommended Location Section
    - Clicked the three cities buttons to ensure they show the correct 'attractions, restaurants, parks'. **Worked**
    - Clicked the 'attractions, restaurants, parks' buttons to check they open the correct tourist destinations. **Worked** 
    - Clicked each tourist destination to ensure it opens the correct option content and zooms to location on map. **Worked**
- Map
    - Clicked each marker to test it opened the correct info window. **Worked**
- Contact Form (email.js)
    - Filled in the contact form and clicked submit.
    - Checked my gmail to check I recieved the email. [Test Screenshot](assets/images/contact-form-worked.png) **Worked**
    - Changed ID in sendemail.js to check my error alert showed when I filled the form and clicked submit. [Test Screenshot](assets/images/contact-form-error.png) **Worked** 
- To top button
    - Clicked the to top button to check it scrolled to the top of the website. **Worked**
#### script.js
Manually tested throughout with console.logs.
Ran all Javascript through [JSHint](https://jshint.com) Passed with no major errors.
#### sendEamil.js
Manually tested throughout with console.logs.
Ran all Javascript through [JSHint](https://jshint.com) Passed with no major errors.
#### map.js
Manually tested throughout with console.logs.
Ran all Javascript through [JSHint](https://jshint.com) Passed with no major errors.
### Responsiveness
- Using **Dev Tools** a range of widths on different devices were tested from a Moto G4 (360px) to desktop screen (1920px). 
- Physically viewed on multiple devices (Iphone XR, Iphone 12, Iphone 12 Plus, Ipad, Desktop).
- Tested on multiple browsers (Google Chrome, Opera, Firefox, Microsoft Edge and Safari).
### Testing problems and solutions
- I found an issue with page loading times, after looking for what was casuing the issue I established it was the amount of images, to fix this I reduced the file sizes and added the lazy loading attribute to the images.
- After checking the website on each device on chrome developer tools, I found bootstrap medium classes only applied to normal sized tablets, larger tablets like the Ipad Pro caused the site responsiveness to break. To fix this I added in a media query to hide the images that broke the responsiveness. 
- A bug was found with the slideshow/ hero images that caused them to be reloaded everytime they finished going through the slideshow, this caused the loading time to go up. To fix this issue I removed the custom script and opted for bootstrap carousul which fixed the bug.
- I found a bug where the to top button would go behind the map, to fix this I added **z-index: 1;** to the map.
- Found an issue where on smaller screen sizes, when the tourist destination buttons were clicked it would not show the changes below. To fix this I changed the buttons to links and made it so when clicked it would go to the info window, so the user knows the buttons do something.
#### Known Issues
- Lazy Loading attribute is currently supported by (Chrome, Edge, Opera and Firefox). It is currently not supported by Safari and is under development [Link About lazy loading support](https://web.dev/browser-level-image-lazy-loading/).
- Due to the high amount of images some of the images can load slowly especially on the info sections, I have added the lazy loading attributes and reduced the file sizes.  

## Deployment
### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JackTubby/DiscoverChina-MS2/)
2. At the top of the Repository, locate the menu and click "Settings".
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will refresh automatically.
6. Scroll back down through the page to locate the now published site [link](https://jacktubby.github.io/DiscoverChina-MS2/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JackTubby/DiscoverChina-MS2/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JackTubby/DiscoverChina-MS2/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

 ## Credits
 ### Code
 - [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap was used to add responsiveness to the website.
 ### Media
 * Information and some imagery was optained from [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
 * The photos used in the Gallery were obtained from two locations: Google Reviews and [Pexels](https://www.pexels.com/)
 * Trip Advisor and Wikipedia was utilized for information on the info options, and to provide a link to the corresponding option.

 ### Acknowledgements
 - Simon Vardy for his assistance with my 404 error page.
 - Tim Nelson for his assistance with LeafletJS.
 - Slack Community and CI staff that helped with questions and assistance throughout development.
 - Mentor - My mentor helped me decide where to focus my time and make improvements, which was very beneficial for my site development.
