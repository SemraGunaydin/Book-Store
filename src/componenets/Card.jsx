import { Link } from "react-router-dom"


const Card = ({book}) => {
  return (
    <div className="card shadow p-2 align-items-center">
         <img src={book.image} className="rounded " alt="card-image" />
        <div className="card-body">
            <h4>{book.title}</h4>
            <h4 className="text-secondary fs-5">{book.author}</h4>
        </div>
        <Link to={`/Detail/${book.id}`} className="btn btn-primary text-white" >See Details</Link>
    </div>
  )
}

export default Card;