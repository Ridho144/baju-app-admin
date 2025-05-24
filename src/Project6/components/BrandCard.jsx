const BrandCard = ({ name, img }) => {
    return (
      <div className="flex flex-col items-center">
        <img src={img} alt={name} className="w-16 h-16 rounded-full border-2 border-red-500 object-cover" />
        <p className="mt-2 text-sm font-medium">{name}</p>
      </div>
    );
  };
  
  export default BrandCard;
  