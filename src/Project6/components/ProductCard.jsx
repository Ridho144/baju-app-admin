const ProductCard = ({ name, brand, img }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-40 object-cover" />
        <div className="p-2">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-gray-500">{brand}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  