import './Movielist.css';

const Movielist = ({title,genre,year})=>{


return (
    <tr className="tablerow">
        <td className="tabledata">{title}</td>
        <td className="tabledata">{genre}</td>
        <td className="tabledata">{year}</td>
    </tr>
);

}

export default Movielist;