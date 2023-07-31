import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return products.map((product) => {
    return (
      <div className="flex justify-center m-4 items-end border-8 border-solid rounded-md p-4 border-indigo-200">
        <Item
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      </div>
    );
  });
};
export default ItemList;
