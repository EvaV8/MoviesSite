const key = 'b06c283';
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// API KEY IS ABOVE!!!!!!!//////////////////////////////////////////////////
//
//
//
//
//EVERYTHING IS THE SAME (21.12.2022) AS THE movies.js FILE APART FROM createNewCard
///////////-------Movies Database-------------------------------------------------
const titlesArray = ["Guillermo del Toro's Pinocchio",
"Only Lovers Left Alive",
"Avatar: The Way of Water",
"Blue Jasmine",
"The Fabelmans",
"The Banshees of Inisherin",
"Blade Runner 2049",
"Walk the Line",
"The Life of David Gale",
"Call Me by Your Name ",
"The Grand Budapest Hotel",
"A Girl Walks Home Alone at Night",
"Nocturnal Animals",
"Harry Potter and the Deathly Hallows: Part 2",
"Harry Potter and the Deathly Hallows: Part 1",
"Don't Worry Darling",
"Where the Crawdads Sing",
"The Girl with the Dragon Tattoo",
"My Mother Is Crazy",
"The Big Short",
"Blue Is the Warmest Colour",
"The Hobbit: An Unexpected Journey",
"The Intouchables",
"Black Panther: Wakanda Forever",
"A Star Is Born",
"The Imitation Game",
"Captain Marvel",
"Terminator: Dark Fate",
"12 Years a Slave",
"Incendies",
"The Hobbit: The Desolation of Smaug",
"Despicable Me 2",
"Miss Violence",
"Attenberg",
"The Shape of Water",
"Tell It Like a Woman",
"Toy Story 4",
"Mad Max: Fury Road",
"Maleficent",
"Howl's Moving Castle"
]
// console.log(titlesArray.length);

const stockArray = [
    2, 5, 0, 3, 5, 0, 8, 6, 5, 4, 
    4, 5, 9, 3, 5, 6, 8, 6, 5, 4, 
    3, 5, 9, 3, 5, 6, 8, 6, 5, 4,
    6, 2, 1, 6, 5, 6, 8, 6, 5, 4
]

const priceArray = [
    2.50, 3.50, 2.50, 2.00, 3.00, 3.60, 2.70, 3.10, 2.90, 2.90, 
    2.50, 3.50, 2.50, 2.00, 3.00, 3.60, 2.70, 3.10, 2.90, 2.90,
    2.50, 3.50, 2.50, 2.00, 3.00, 3.60, 2.70, 3.10, 2.90, 2.90,
    2.50, 3.50, 2.50, 2.00, 3.00, 3.60, 2.70, 3.10, 2.90, 2.90,
]

const posterArray = ["images/movies/pic0.jpg",
"images/movies/pic1.jpg",
"images/movies/pic2.jpg",
"images/movies/pic3.jpg",
"images/movies/pic4.jpg",
"images/movies/pic5.jpg",
"images/movies/pic6.jpg",
"images/movies/pic7.jpg",
"images/movies/pic8.jpeg",
"images/movies/pic9.jpg",
"images/movies/pic10.jpg",
"images/movies/pic11.jpg",
"images/movies/pic12.jpg",
"images/movies/pic13.jpg",
"images/movies/pic14.jpg",
"images/movies/pic15.jpg",
"images/movies/pic16.jpg",
"images/movies/pic17.jpg",
"images/movies/pic18.jpg",
"images/movies/pic19.jpg",
"images/movies/pic20.jpg",
"images/movies/pic21.jpg",
"images/movies/pic22.jpg",
"images/movies/pic23.jpg",
"images/movies/pic24.jpg",
"images/movies/pic25.jpg",
"images/movies/pic26.jpg",
"images/movies/pic27.jpeg",
"images/movies/pic28.jpg",
"images/movies/pic29.jpg",
"images/movies/pic30.jpg",
"images/movies/pic31.jpg",
"images/movies/pic32.jpg",
"images/movies/pic33.jpg",
"images/movies/pic34.jpg",
"images/movies/pic35.jpg",
"images/movies/pic36.jpg",
"images/movies/pic37.jpg",
"images/movies/pic38.jpg",
"images/movies/pic39.jpg"
]

///////------Variables Declaration-------------------------------------------------
// let titleUser = titlesArray[1]; //WILL NEED TO AMEND THIS SO THAT THE USER CAN INPUT IN SEARCH
const movieCard = document.getElementById('movie-card-demo');

const actionButton = document.getElementById('actionBtn');
const comedyButton = document.getElementById('comedyBtn');
const dramaButton = document.getElementById('dramaBtn');
const fantasyButton = document.getElementById('fantasyBtn');
const romanceButton = document.getElementById('romanceBtn');
const thrillerButton = document.getElementById('thrillerBtn');
const allButton = document.getElementById('allBtn');


////////////--------FUNCTIONS-------------------------------------------------
//http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}
//Fetch OMDB API
function getOmdb(titleUser, index, apiKey){
    fetch(`http://www.omdbapi.com/?t=${titleUser}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // console.log(data.Title);
        createMovieObject(data, index);
    });
}

////////////OBJECT CONSTRUCTOR-------------------------------------------------
// const arrayMoviesObjects = [];
function createMovieObject(d, i){
    //a. Constructor function for films
    function Movie(title, year, genres, directors, stock, poster, price) {
        this.filmTitle = title;
        this.filmYear = year;
        this.filmGenres = genres;
        this.filmDirectors = directors;
        this.filmAvailability = stock;
        this.filmPoster = poster;        
        this.filmPrice = price;
    }
    
    //b. Create a Film Object: 
    const filmObject = new Movie(d.Title, d.Year, d.Genre, d.Director, stockArray[i], posterArray[i], priceArray[i]);

    //c. Call the create new card function:
    createNewCard(filmObject,i);
    
}


//Create the movie cards inside div with id='movie-card-demo'


const createNewCard = (filmObj,i) => {
    const category = 'Drama';
    if(filmObj.filmGenres.includes(category)){
        movieCard.innerHTML += `
        <div class="movie-card" id=card-${i}>
            <div class="movie-poster"><img src=${filmObj.filmPoster} alt=""></div>
            <p class="title">${filmObj.filmTitle}</p>
            <p>Released: <span class="year">${filmObj.filmYear}</span></p>
            <p>Genres: <span class="genres">${filmObj.filmGenres}</span></p>
            <p>Directors: <span class="directors">${filmObj.filmDirectors}</span></p>
            <p>Availability: <span class="stock">${filmObj.filmAvailability}</span></p>
            <p>Price: <span class="price">${filmObj.filmPrice}£</span></p>
            <button class="basketBtn">Add to basket</button>
        </div>
    `
    }

}


//---------DISPLAY ALL (function & Event listener)-----------------
function displayAllMovies(){
    for(let i=0; i<titlesArray.length; i++) {
        let titleUser = titlesArray[i];
        let index = i;
        const apiKey = key;
        getOmdb(titleUser, index, apiKey);
    }
    movieCard.innerHTML = '';
}


displayAllMovies()




//---------DISPLAY ACTION ( Event listener)-----------------

//Search Category
// const searchByCategory = (filmObject,i,category) => {
//     // const cards = document.querySelector(`#card-${i}`);   
//     if (filmObject.filmGenres.includes(category)) {
//         createNewCard(filmObject,i);
//         console.log(filmObject)
//     } 
//     // console.log(cards)
// }




// actionButton.addEventListener('click', ()=>{
//     const category = 'Action';
//     searchByCategory(filmObject, i, category); 
// })





