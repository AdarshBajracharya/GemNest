import React, {useEffect, useState} from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import {useNavigate} from "react-router-dom";



interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (data: { productId: number; quantity: number }) => void;
}
// @ts-ignore
const ProductCard: React.FC<ProductCardProps> = ({ product, onViewClick }) => {

    const navigate = useNavigate();
// @ts-ignore
    const handleBuyClick = async (product) => {
        try {
            console.log(product)
            navigate(`/review/${product.productId}`);
        } catch (error) {
            console.error('Error handling buy click:', error);
        }
    };


    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <p className="product-name">{product.productName}</p>
            <p className="product-price">Price: Rs.{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button className="view-button" onClick={() => handleBuyClick(product)}>View</button>
        </div>
    );
};
const Shop = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();



    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then((response) => response.json())
            .then((data: Product[]) => {
                console.log(data);  // Log the data to the console
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    function filterProducts() {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    }

    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);
            navigate(`/review/${data.productId}`);
        }
    };

    // Use useEffect to navigate after state update
    useEffect(() => {
        // Navigate to the review page when selectedProductId changes
        if (selectedProductId !== null) {
            navigate(`/review/${selectedProductId}`);
        }
    }, [selectedProductId]);





    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/shop">Shop</a>
                                    </li>
                                    <li>
                                        <a href="/admin">Pages</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="bg-pro">
                <div className="categories">
                    <button className="cteg-btn" onClick={() => setSelectedCategory('men')}>Men</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('women')}>Women</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('cosmetics')}>Cosmetics</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('ruched')}>Ruched</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('short')}>Short</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('slit')}>Slit</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('long')}>Long</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory('backless')}>Backless</button>
                    <button className="cteg-btn" onClick={() => setSelectedCategory(null)}>All</button>
                </div>

                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-inp"/>

                <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', color: 'black'}}>
                    {filterProducts().map((product) => (
                        <ProductCard key={product.id} product={product} onViewClick={handleViewClick}/>
                    ))}
                </div>
            </div>
</>
    );
};

export default Shop;
