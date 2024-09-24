import React from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductComponent } from '../Components/PeoductComponent';

const fetchProductsByCategory = async ({ pageParam = 1, category }) => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}?limit=10&page=${pageParam}`
    : `https://fakestoreapi.com/products?limit=10&page=${pageParam}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const ProductList = ({ category }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery(
    ['products', category],
    ({ pageParam = 1 }) => fetchProductsByCategory({ pageParam, category }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const totalPages = Math.ceil(lastPage.length / 10);
        if (allPages.length < totalPages) {
          return allPages.length + 1;
        }
        return false;
      },
      staleTime: 500 * 60 * 1,
    }
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error fetching data</p>;

  return (
    <div className="horizontal-scroll-container scroll-hidden bg-gray-50 py-6">
      <InfiniteScroll
        dataLength={data?.pages?.flat().length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        endMessage={<p className="text-center text-gray-500">No more products to display</p>}
        scrollDirection="horizontal"
      >
        <div
          className="flex space-x-6 overflow-auto pb-4"
          style={{
            scrollbarWidth: 'none', /* For Firefox */
            msOverflowStyle: 'none', /* For Internet Explorer and Edge */
          }}
        >
          {data.pages.flat().map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="relative flex-none w-60 h-auto border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 duration-300 bg-white transition-all mb-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg font-semibold mt-3 text-gray-800 line-clamp-2">{product.title}</h3>
              <p className="text-gray-700 font-bold text-lg mt-2">${product.price}</p>
              <p className="text-gray-500 mt-2 text-sm line-clamp-3 mb-10">
                {product.description?.substring(0, 100) || 'No description available'}...
              </p>
              {/* Adjusted bottom padding to avoid overlap */}
              <div className="absolute bottom-2 left-0 w-full px-4 py-2 flex items-center justify-between bg-white">
                <ProductComponent product={product} />
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ProductList;
