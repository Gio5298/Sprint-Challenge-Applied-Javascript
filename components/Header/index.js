// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //created elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headOne = document.createElement('h1');
    const temp = document.createElement('span');

    //added classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //added content
    date.textContent = 'SMARCH 28, 2019';
    headOne.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //added structure
    header.appendChild(date);
    header.appendChild(headerOne);
    header.appendChild(temp);

    const container = document.querySelector('.header-container')
    container.appendChild(header)
}
