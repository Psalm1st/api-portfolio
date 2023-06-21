// Fetch NASA image by date from the API
async function fetchImageByDate(date) {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=zio74ErMPjolCv7fCATfOzUhZj0b8YQfnTDGv5IZ&date=${date}`);
      const data = await response.json();
      const imageUrl = data.url;
      document.body.style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
      console.error('Failed to fetch image:', error);
    }
  }

    // Handle date filter changes
  function handleDateFilterChange() {
    const dateInput = document.getElementById('date-filter-input');
    const selectedDate = dateInput.value;
    fetchImageByDate(selectedDate);
  }

    // Call the fetchImageByDate function when the page loads & set the input to today's date
  window.onload = function() {
    const dateInput = document.getElementById('date-filter-input');
    dateInput.valueAsDate = new Date(); 
    dateInput.addEventListener('change', handleDateFilterChange);
    fetchImageByDate(dateInput.value);
  };

// Fetch SpaceX launches data from the API
function fetchLaunches() {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(response => response.json())
      .then(data => displayLaunches(data))
      .catch(error => console.log(error));
  }
  
  // Display SpaceX launches onlly on the webpage when search term is entered
  function displayLaunches(launches) {
    const launchesList = document.getElementById('launches-list');
    launches.forEach(launch => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>Launch: ${launch.name}</h2>
        <p>${launch.details}</p>
      `;
      listItem.classList.add('launch-item');
      launchesList.appendChild(listItem);
    });
  }
  
  // Fetch SpaceX rockets data from the API
  function fetchRockets() {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then(response => response.json())
      .then(data => displayRockets(data))
      .catch(error => console.log(error));
  }
  
  // Display SpaceX rockets on the webpage when search term is entered
  function displayRockets(rockets) {
    const rocketsList = document.getElementById('rockets-list');
    rockets.forEach(rocket => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>Rocket: ${rocket.name}</h2>
        <p>${rocket.description}</p>
      `;
      listItem.classList.add('rocket-item'); 
      rocketsList.appendChild(listItem);
    });
  }
  
  // Fetch SpaceX landpads data from the API
  function fetchLandpads() {
    fetch('https://api.spacexdata.com/v3/landpads')
      .then(response => response.json())
      .then(data => displayLandpads(data))
      .catch(error => console.log(error));
  }
  
  // Display SpaceX landpads on the webpage when search term is entered
  function displayLandpads(landpads) {
    const landpadsList = document.getElementById('landpads-list');
    landpads.forEach(landpad => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>Landpad: ${landpad.full_name}</h2>
        <p>${landpad.details}</p>
      `;
      listItem.classList.add('landpad-item');
      landpadsList.appendChild(listItem);
    });
  }
  
  // Call the fetch functions for the three categories, when the page loads
  window.addEventListener('load', () => {
    fetchLaunches();
    fetchRockets();
    fetchLandpads();
  });
  
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterResults(searchTerm);
  });
  
  function filterResults(searchTerm) {
    const launchesList = document.getElementById('launches-list');
    const rocketsList = document.getElementById('rockets-list');
    const landpadsList = document.getElementById('landpads-list');
  
    // Reset the display of all list items when the search term is cleared
    const allItems = [...launchesList.children, ...rocketsList.children, ...landpadsList.children];
    allItems.forEach(item => {
      item.style.display = 'block';
    });
  
    // Filter the items based on the search term
    if (searchTerm) {
      allItems.forEach(item => {
        const itemTitle = item.querySelector('h2').innerText.toLowerCase();
        if (!itemTitle.includes(searchTerm)) {
          item.style.display = 'none';
        }
      });
    }
    }

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show or hide the back-to-top button based on the scroll position
  window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });