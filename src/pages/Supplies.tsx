import { Link } from 'react-router-dom';

const Supplylist = [
  { 
    name: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc'
  },
  {
    name: 'Carrots',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979'
  },
  {
    name: 'Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa'
  },
  {
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1'
  },
  {
    name: 'Eggplant',
    image: 'https://images.unsplash.com/photo-1605178329885-321a6781f150'
  },
  {
    name: 'Corn',
    image: 'https://images.unsplash.com/photo-1601593768799-76d3bc7c4a43'
  },
  {
    name: 'Peppers',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'
  },
  {
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb'
  },
  {
    name: 'Pumpkin',
    image: 'https://images.unsplash.com/photo-1569976710208-b52636b52c09'
  }
];

const Supplies = () => {
  return (
    <div className="min-h-screen">
      <div className="container">
        <h1 className="heading-1 text-center">Supply Items</h1>
      
        <div className="filter-buttons">
          <button className="filter-btn">Seeds</button>
          <button className="filter-btn">Pots</button>
          <button className="filter-btn">Soils</button>
          <button className="filter-btn">Tools</button>
          <button className="filter-btn">Free</button>
        </div>

        <div className="content-wrapper">
          <div className="grid grid-cols-3">
            {supplies.map((supply) => (
              <Link
                key={supply.name}
                to={`/supplies/${supply.name.toLowerCase()}`}
                className="card"
              >
                <div className="card-image">
                  <img
                    src={supply.image}
                    alt={supply.name}
                    className="card-img"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title">{supply.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplies;