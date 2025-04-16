import { useEffect, useState } from "react"
import Filter from "../../componenets/Filter"
import api from "../../Api";
import Card from "../../componenets/Card";
import { useSearchParams } from "react-router-dom";




function Products() {
  // kitap state icin
  const [books, setBooks] = useState ([]);

  // Url den parametreyi almak icin
 const [searchParams] = useSearchParams();

  useEffect(() => {
    // Api deki parametreyi al
    const params = {
      q:searchParams.get("search"),
      _sort:"title",
      _order: searchParams.get("sort") === "desc" ? "desc" : "asc",
      // Bu projede jsn-server kullanıyoruz.Bu api bize sıralama yapabilmemiz için iki adet parametre istediğini söylüyor.Birincisi hangi değere göre sıralama yapacağımız ikincisi ise nasıl bir sıralama yapacağımız.Sıralama noktasında ise asc (Ascending [Artan]) veya desc (Descending [Azalan]) seçenekleri sunar.Bizde burada bu değerleri parametre olarak geçerek api'dan sıralanmış verileri aldık.
    };

    api.get("/books",{params}).then((res) => setBooks(res.data));
  }, [searchParams]);


  return (
    <div className="container my-5">
      {/* Results */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-3 w-50 text-nowrap text-center">Book not found !!</h3>
      ):(
        <h3>{books.length} Book found</h3>
      )}
      

      {/* Filter */}
      <Filter/>

      {/* Card */}
      <div className="card-container">
        {books.map((book)=> (
        <Card key={book.id} book={book}/>
      ))}
      </div>
      
    </div>
  )
}

export default Products;