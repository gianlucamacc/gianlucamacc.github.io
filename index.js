function searchCourses() {
  // get search input value
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  // get all course sections
  const courseSections = document.querySelectorAll('.courses');
  // loop through each course section
  for (let i = 0; i < courseSections.length; i++) {
    // get course title and description
    const courseTitle = courseSections[i].querySelector('.course-title').textContent.toLowerCase();
    const courseDescription = courseSections[i].querySelector('p').textContent.toLowerCase();
    // check if search value matches course title or description
    if (courseTitle.includes(searchValue) || courseDescription.includes(searchValue)) {
      // show course section if there's a match
      courseSections[i].style.display = 'flex';
    } else {
      // hide course section if there's no match
      courseSections[i].style.display = 'none';
    }
  }
}


// Get the select element
const select = document.querySelector('#filterbylevel');

// Add an event listener to the select element
select.addEventListener('change', filterCourses);

function filterCourses() {
  // Get all the course sections
  const courses = document.querySelectorAll('.courses');

  // Get the selected value
  const selectedValue = select.value;

  // Loop through all the course sections and hide or show them based on the selected value
  courses.forEach(course => {
    if (selectedValue === 'all') {
      course.style.display = 'flex';
    } else {
      if (course.dataset.level === selectedValue) {
        course.style.display = 'flex';
      } else {
        course.style.display = 'none';
      }
    }
  });
}


