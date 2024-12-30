import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import "./Home.css"; 

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-5">
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" className="d-block w-100" alt="Featured 1" />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" className="d-block w-100" alt="Featured 2" />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg" className="d-block w-100" alt="Featured 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}

      {/* Featured Products Section */}
      <h2>Featured Products</h2>
      <div className="d-flex overflow-auto mb-5">
        {products.slice(0, 5).map((product) => (
          <div className="card mx-2" key={product.id} style={{ minWidth: "250px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <a href={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-5">
        <a href="/featured-products" className="btn btn-secondary">
          See All Featured Products
        </a>
      </div>

      {/* New Arrivals Section */}
      <h2>New Arrivals</h2>
      <div className="d-flex overflow-auto mb-5">
        {products.slice(5, 10).map((product) => (
          <div className="card mx-2" key={product.id} style={{ minWidth: "250px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <a href={`/product/${product.id}`} className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-5">
        <a href="/new-arrivals" className="btn btn-secondary">
          See All New Arrivals
        </a>
      </div>

      {/* Product Cards Pagination Section */}
      <h2>All Products</h2>
      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <a href={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                key={index}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Download the App Section */}
      <div className="download-app-section bg-primary text-white py-5 mt-5">
        <div className="container text-center">
          <h3>Download Our App</h3>
          <p>Get the best shopping experience on the go. Download the Rufushop app now!</p>
          <div className="d-flex justify-content-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.rufushop"
              className="btn btn-outline-light mx-2"
            >
              <img
                src="/path-to-playstore-icon.png"
                alt="Google Play Store"
                width="150"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/rufushop"
              className="btn btn-outline-light mx-2"
            >
              <img
                src="/path-to-appstore-icon.png"
                alt="App Store"
                width="150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
