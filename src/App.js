// import logo from './logo.svg';
import './App.css';
import Movielist from './components/Movielist';
import Genrelist from './components/Genrelist';

function App() {
  let moviearr =  [{ title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: 'Schindlers List', genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 }];

  let genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

  return (
    <div>
   <header>
    <h1 className="header">Top 15 Movies of All Time</h1>
   </header>
    <div className="maingenre">
      <div>
        <h2>Filter by Genre</h2>
      </div>
      <div className="container">
      {genres.map((movie)=>(
          <Genrelist genre={movie}/>
        ))}
      </div>
    </div>
    <table className="movietable">
      <tr>
        <th className="tableheading tabledata">Title</th>
        <th className="tableheading tabledata">Genre</th>
        <th className="tableheading tabledata">Year</th>
      </tr>
        {moviearr.map((movie) => (
        <Movielist title={movie.title} genre ={movie.genre} year={movie.year}/> 
        ))}
    </table>
    </div>
  );
}

export default App;
