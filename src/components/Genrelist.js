import './Genrelist.css';

const Genrelist = ({genre}) =>{
    

return(
    <div className="genrefilter">
            <button className="genrebtn" id={genre} onClick ={(e) =>console.log("Filering by",e.target.innerText)}>{genre}</button>
    </div>
);
}


export default Genrelist;