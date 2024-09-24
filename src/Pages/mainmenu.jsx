import React, { useState } from 'react';
import ProductList from './productlist'; // Import your product list component

const categories = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="p-4 bg-white ">
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory('')}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 mb-2"
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 mb-2"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-section bg-white p-6 rounded-lg shadow-m">
        <h1 className="text-2xl font-semibold text-center mb-4 bg-slate-100 py-2 rounded-md">
          Showing Products for: {selectedCategory || 'All Products'}
        </h1>
        <div className="space-y-6 mt-4">
          {selectedCategory === '' ? (
            <>
              <ProductList category="" />
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-xl font-semibold mt-6 mb-4 text-slate-900 text-center bg-slate-100 rounded-md py-2">{category}</h2>
                  <ProductList category={category} />
                </div>
              ))}
            </>
          ) : (

            <ProductList category={selectedCategory} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
