// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//added axios
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((resolve) => {
       let topics = resolve.data.topics;
       console.log(topics);

       topics.forEach(element => {
        const topicsOne = document.querySelector('.topics')

        lTopics.appendChild(newTab(element))
        // tabs.appendChild(topicsOne)
        console.log(topicsOne)

    })})
    .catch((error) => {console.log(error)})

    //added function
    function newTab (top) {
        const tablet = document.createElement('div')
        tablet.classList.add('tab')
        tablet.textContent = top

        // const topicsOne = document.querySelector('.topics')
        // topicsOne.appendChild(tablet)

        return tablet
    } 