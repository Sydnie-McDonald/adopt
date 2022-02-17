/* eslint-disable no-console */
/* eslint-disable space-before-function-paren */
import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
window.addEventListener('load', async () => {
    //search data
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const dog = await getDog(id);
    console.log(id, dog);
    dogDetailContainer.append(renderDogDetail(dog));

});
