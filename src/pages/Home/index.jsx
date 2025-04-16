import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="my-5 d-flex flex-column align-items-center gap-5">

      <h1>HOŞGELDİNİZ</h1>
      <img src="/welcome.webp"  className= "img-fluid rounded image "  alt="" />

      <p className="fw-bold"> You can access all newly released books on the Products Page </p>
    </div>
  );
}

export default Home;