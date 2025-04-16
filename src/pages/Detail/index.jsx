import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import Info from "../../componenets/Info";

function Detail() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);


  console.log(book);

  return (
    <div className="row container my-5 p-5 mx-auto">
      {/* Image */}
      <div className="col-md-6 d-flex justify-content-center align-items-center ">
        <img
          src={book?.image}
          className="rounded img-fluid shadow"
          alt="book-image"
        />
      </div>
      {/* book info */}
      <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center">
        <h1 className="text-center">{book?.title}</h1>
        <div>
          <Info title="Author" value={book?.author} />
          <Info title="Year" value={book?.year} />
          <Info title="Page" value={book?.page} />
          <Info title="Description" value={book?.description} />
          <Info title="Price" value={book?.price} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
