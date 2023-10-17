const dateElement = document.getElementsByClassName('last-update-date')[0];
const id = document.body.getAttribute('data-clp-course-id');
const link = `https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=created`;
let createdDate = '';

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

fetch(link)
  .then((res) => res.json())
  .then((data) => {
    if (!data) throw new Error('No data');
    if (!data.created) throw new Error('No data');
    createdDate = data.created;

    const date = new Date(createdDate);
    if (!date) throw new Error('No date');
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const dateNode = document.createElement('div');
    dateNode.className = 'udlite-heading-sm';
    dateNode.style =
      'background:#a743e9; color:#fff; font-size: 1.7rem; padding: 1rem; text-align: center; z-index:999999;';
    dateNode.innerHTML = `Created on ${formattedDate}`;

    // add as first element on the page
    document.body.insertBefore(dateNode, document.body.firstChild);

    document.title = `${formattedDate} -  ${document.title}`;
  })
  .catch((err) => {
    console.log('There was an error with the udemy real date lookup', {
      message: err.message,
      createdDate,
    });
  });
