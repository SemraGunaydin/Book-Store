import React from "react"
import { useSearchParams } from "react-router-dom";


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // form gonderildiginde calisacak fonksiyon
    const handleSubmit=(e) => {
        //Sayfa yenilmeyi engelle
        e.preventDefault();
        // Input icerindeki e degere eris
     const text = e.target[0].value;

     // Url e gececek parametreyi ayarlama
     searchParams.set("search", text);

     //Url e  parametre gec
     setSearchParams(searchParams);

    };

    //Select dan bir deger secildiginde calisacak fonksiyon
    const handleChange =(e) => {
        //select alanindaki degere eris
        const value = e.target.value ;

        //Bu degere url'e parametre olarak kullan
        searchParams.set("sort",value);

        // url'e parametre gec
        setSearchParams(searchParams);
    }

  return (
    <div>
        <div className="d-flex justify-content-between mt-3">
            {/* Select */}
            <select 
            onChange={handleChange} 
            defaultValue="order" 
            className="form-select w-25"> 
                <option disabled>Select</option>
                <option defaultValue="ASC"> ASC</option>
                <option value="DESC"> DESC</option>
            </select>
            {/* Form */}
            <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input type="text"className="form-control"  placeholder="Search book"/>
                <button className="btn btn-primary  px-4">Search</button>
            </form>
            </div>
    </div>
  )
}

export default Filter;