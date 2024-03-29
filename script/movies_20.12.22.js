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
//



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

const posterArray = ["/MoviesSite/images/movies/pic0.jpg",
"/MoviesSite/images/movies/pic1.jpg",
"/MoviesSite/images/movies/pic2.jpg",
"/MoviesSite/images/movies/pic3.jpg",
"/MoviesSite/images/movies/pic4.jpg",
"/MoviesSite/images/movies/pic5.jpg",
"/MoviesSite/images/movies/pic6.jpg",
"/MoviesSite/images/movies/pic7.jpg",
"/MoviesSite/images/movies/pic8.jpeg",
"/MoviesSite/images/movies/pic9.jpg",
"/MoviesSite/images/movies/pic10.jpg",
"/MoviesSite/images/movies/pic11.jpg",
"/MoviesSite/images/movies/pic12.jpg",
"/MoviesSite/images/movies/pic13.jpg",
"/MoviesSite/images/movies/pic14.jpg",
"/MoviesSite/images/movies/pic15.jpg",
"/MoviesSite/images/movies/pic16.jpg",
"/MoviesSite/images/movies/pic17.jpg",
"/MoviesSite/images/movies/pic18.jpg",
"/MoviesSite/images/movies/pic19.jpg",
"/MoviesSite/images/movies/pic20.jpg",
"/MoviesSite/images/movies/pic21.jpg",
"/MoviesSite/images/movies/pic22.jpg",
"/MoviesSite/images/movies/pic23.jpg",
"/MoviesSite/images/movies/pic24.jpg",
"/MoviesSite/images/movies/pic25.jpg",
"/MoviesSite/images/movies/pic26.jpg",
"/MoviesSite/images/movies/pic27.jpeg",
"/MoviesSite/images/movies/pic28.jpg",
"/MoviesSite/images/movies/pic29.jpg",
"/MoviesSite/images/movies/pic30.jpg",
"/MoviesSite/images/movies/pic31.jpg",
"/MoviesSite/images/movies/pic32.jpg",
"/MoviesSite/images/movies/pic33.jpg",
"/MoviesSite/images/movies/pic34.jpg",
"/MoviesSite/images/movies/pic35.jpg",
"/MoviesSite/images/movies/pic36.jpg",
"/MoviesSite/images/movies/pic37.jpg",
"/MoviesSite/images/movies/pic38.jpg",
"/MoviesSite/images/movies/pic39.jpg"
]

///////------Variables Declaration-------------------------------------------------
const movieCard = document.getElementById('movie-card-demo');

// let titleUser = titlesArray[1]; //WILL NEED TO AMEND THIS SO THAT THE USER CAN IMPUT IN SEARCH


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

//Create the movie cards
const createNewCard = (filmObj,i) => {
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
    // hideAll(filmObj,i);
}


//Hide all
function hideAll(filmObj,i) {
    const cards = document.querySelector(`#card-${i}`);
    // console.log(cards)
    cards.classList.add('searchHidden')
    
}

//Display All
function displayAllMovies(){
    for(i=0; i<titlesArray.length; i++) {
        let titleUser = titlesArray[i];
        let index = i;
        const apiKey = key;
        getOmdb(titleUser, index, apiKey);
    }
}

//Search Category
const searchByCategory = (filmObject,i,category) => {
    // const cards = document.querySelector(`#card-${i}`);   
    if (filmObject.filmGenres.includes(category)) {
        displayNewCard(filmObject,i);
        console.log(filmObject)
    } else if (filmObject.filmGenres.includes(!category)){
        hideAll(filmObject,i);
    }
    // console.log(cards)
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
    // arrayMoviesObjects.push(filmObject);
    
    //c. Call the create new card function:
    createNewCard(filmObject,i);

    // //d. Call the Search by category function
    // const actionButton = document.getElementById('actionBtn');
    // const comedyButton = document.getElementById('comedyBtn');
    // const dramaButton = document.getElementById('dramaBtn');
    // const fantasyButton = document.getElementById('fantasyBtn');
    // const romanceButton = document.getElementById('romanceBtn');
    // const thrillerButton = document.getElementById('thrillerBtn');


    // // const diffButtons = document.querySelectorAll('.categBtn');
    // // console.log(diffButtons)

    // actionButton.addEventListener('click', ()=>{
    //     const category = 'Action';

    //     searchByCategory(filmObject, i, category); 
 
    // })

    // comedyButton.addEventListener('click', ()=>{
    //     const category = 'Comedy';
    //     searchByCategory(filmObject, i, category);   
    // })

    // dramaButton.addEventListener('click', ()=>{
    //     const category = 'Drama';
    //     searchByCategory(filmObject, i, category);   
    // })

    // fantasyButton.addEventListener('click', ()=>{
    //     const category = 'Fantasy';
    //     searchByCategory(filmObject, i, category);   
    // })

    // romanceButton.addEventListener('click', ()=>{
    //     const category = 'Romance';
    //     searchByCategory(filmObject, i, category);   
    // })

    // thrillerButton.addEventListener('click', ()=>{
    //     const category = 'Thriller';
    //     searchByCategory(filmObject, i, category);   
    // })
        

}

//-------Calling functions-------------------------------------------------

displayAllMovies();



        


//Availability check
//Search by title































































