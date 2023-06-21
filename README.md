# SpaceX API Project - Rockets, Landpads, and Launches

This project is an API-based web application that provides information about SpaceX rockets, landpads, and launches. It features a user-friendly interface with a filter search bar for quick access to specific information. Additionally, the application incorporates NASA's daily photos as the background of the page. Users can select a date from the calendar, and the corresponding photo will instantly change the page background. This README provides an overview of the project and includes credits to SpaceX, NASA, HZ University of Applied Sciences, and the project author.

## Built With 

* HTML
* CSS
* JavaScript

Each file section of codes is commented to explain what each line of code does.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage of my Project](#usage-of-my-project)
  - [Filter Search](#filter-search)
  - [NASA Daily Photos](#nasa-daily-photos)
- [Credits](#credits)
- [Author](#author)
- [Disclaimer and License](#disclaimer-and-license-of-use)

## Getting Started

### Prerequisites

To run this project, you need to have the following:

- A web browser (Chrome, Firefox, Safari, etc.)
- Internet access

### Installation

Follow these steps to use the SpaceX API project:

1. Visit the SpaceX API Documentation page at [https://docs.spacexdata.com/](https://docs.spacexdata.com/).

2. On the left sidebar, you will find the API endpoints folders for all existing links on v3.Though you can choose the advanced level of the newer version, v4. I decided to use this old version to get accustomed to how API works because it is my first time. But in the near future, I will try to update. Anyways, among the list of available API docs, I have chosen to use 3 for this project, which are: rockets, landpads, and launches. 

3. Click on any of the folders that suits you to view the GET data. 

4. Then on the right side of the page, you will find the GET example request, copy the GET https link.

5. Open your project directory: and you can call the link appropriately where needed, fetch the API into your work.


To install NASA API also, follow these steps:

1. Visit the NASA API Portal page at [https://api.nasa.gov/](https://api.nasa.gov/).

2. Click on the "Get Started" blue button and it will take your to a form to fill in order to Generate an API key.

3. Fill the form and submit by clicking the "Sihn up" button. You will receive an email with your API key.This key is what you will use to fetch the NASA API into your work.

Note: if you are calling the API for the daily calendar photos, you can do it in this format https://api.nasa.gov/planetary/apod?api_key=YOUR-API-KEY=${date}`; of course replace YOUR-API-KEY
with the one you received in your email.

## Usage of my Project

This is the steps on how this page works. It is a brief and interesting page.

1.	Load the site with the appropriate link, and once the page is loaded, all the contents of the page is displayed which includes Launches, Landpads and Rockets of the SpaceX company.

2.	You can manually scroll through the page to read the contents. And also watch out for a button added to the page which is the “Back to Top” button. This button is located at the bottom right of the page. You can use this button to scroll back to the top of the page.

3.  Even at that, we are aware the content may seem daunting at first, which is why the Search bar on the top left is there to make your reading experience much easier. You can use this Search bar to filter the title list of specific information between the three main categories of informations about SpaceX company (Landpads, Launches & Rockets). Kindly note that this search bar recognizes only the three titles mentioned.

3.	When for example “Rockets” is inputed in the search bar, only informations about the number of Rockets owned by the company will be filtered to appear on the page, and same way for other two.

4.  To help the user further just in case they choose to scroll the page, just as you scroll down a bit, there will appear at the bottom of the page a red “Back to Top” button. This button is located at the bottom right of the page. You can use this button to quickly bring you back to the top of the page.

5.	Another interesting aspect on this page is on the top right of the page. Here you can select any date from the calendar which will change the background image of the whole page, and still retain the SpaceX information on the page. This image changes each day you visit this page, trust me. You can choose to play around with the date as you wish, but note, of course, that you cannot travel past the real current date and expect an image; except you can time-travel to the future…Hahaha!
Have Fun With the Page, but hey, don’t get carried away by just playing with the images, there are a bunch of informations you can read to know a bit about SpaceX Landpads, Launches and Rockets.


### Filter Search

The web application includes a filter search bar that allows user to search for specific SpaceX rockets, landpads, or launches. Follow the steps below to use this feature:

1. Locate the search bar at the top left of the page.

2. Enter a search term related to rockets, landpads, or launches.

3. As you type, the page will dynamically update, displaying only the information that matches the search terms Rockets, Landpads and Launches.

### NASA Daily Photos

The web application integrates NASA's daily photos as the background image of the page. To change the background image to a specific date's photo, follow these steps:

1. Find the calendar widget on the top right of the page.

2. Click on the desired date in the calendar.

3. The page background will instantly update, displaying the NASA photo for the selected date, along with the other contents (rockets, launches, landpads) and descriptions.

## Credits

This project acknowledges and gives credit to the following entities:

- SpaceX: The project utilizes the SpaceX API to gather information about rockets, landpads, and launches. Visit the [SpaceX API Documentation](https://docs.spacexdata.com/) for more details.

- NASA: The project incorporates NASA's daily photos as the background images. Thanks to NASA for providing the API key that makes this feature possible. Visit the [NASA API Portal](https://api.nasa.gov/) for more information.

- HZ University of Applied Sciences: The development of this API project was made possible with the support of HZ University of Applied Sciences. Learn more about HZ University of Applied Sciences at [hz.nl](https://www.hz.nl).

## Author

This project was created by Psalm1st.

- GitHub: [psalm1st](https://github.com/psalm1st)
- Personal website: [https://psalm1st.github.io](https://psalm1st.github.io)

## Disclaimer and License of use

- This project is for educational purposes only. It is not intended for commercial use.

- This project is licensed under Nasa Liscencing Agreements. For more information, please refer to the [SSC Office of the Center Chief Technologist](https://www.nasa.gov/centers/stennis/ssc-partnerships/licensing-opportunities.html#) file.
