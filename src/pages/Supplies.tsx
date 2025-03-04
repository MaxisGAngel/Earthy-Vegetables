const supplies = [
  { name: 'Tool 1', color: 'bg-yellow-400' },
  { name: 'Tool 2', color: 'bg-green-400' },
  { name: 'Tool 3', color: 'bg-red-400' },
  { name: 'Tool 4', color: 'bg-lime-400' },
  { name: 'Tool 5', color: 'bg-purple-400' },
  { name: 'Tool 6', color: 'bg-yellow-500' },
  { name: 'Tool 7', color: 'bg-pink-400' },
  { name: 'Tool 8', color: 'bg-green-500' },
  { name: 'Tool 9', color: 'bg-orange-400' },
];

const Supplies = () => {
  return (
    <div className="container">
      <h1 className="heading-1">Supply Items</h1>
      
      <div className="filter-buttons">
        <button className="filter-btn">Seeds</button>
        <button className="filter-btn">Pots</button>
        <button className="filter-btn">Tools</button>
        <button className="filter-btn">Free</button>
      </div>

      <div className="supply-grid">
        {supplies.map((supply) => (
          <div
            key={supply.name}
            className={`supply-item ${supply.color}`}
          >
            <span>Supply</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplies;