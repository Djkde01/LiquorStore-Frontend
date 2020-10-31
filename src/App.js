import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/">Logo Licorera</a>
            </div>
            <div>
                <a href="/cart">Carrito</a>
                <a href="/signin">Entrar</a>
            </div>
        </header>
        <main>
            <div className="row center">
            {
                data.products.map((product) =>(
                    <div key={product.id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                        <p className="price">
                            ${product.price}
                        </p>
                    </div>
                </div>
                )
                )
            }
            </div>

        </main>
        <footer className="row center">
            <p>Hecho por Djkde </p>
        </footer>
    </div>
  );
}

export default App;
