
import './App.css';
import GroceryItem2 from './GroceryItem2'

const groceries = [
  {
    item: 'Flour',
    brand: 'Golden Start',
    price: '2',
    quantity: '1lb',
    isPurchased: false
  }, 
  {
    item: 'Coffee',
    brand: 'Peets',
    price: '12',
    quantity: '0.5lb',
    isPurchased: false
  }, 
  {
    item: 'Bourbon',
    brand: 'Makers Mark',
    price: '40',
    quantity: '1 liter',
    isPurchased: false
  }, 
  {
    item: 'Bananas',
    brand: 'Dole',
    price: '10',
    quantity: '1',
    isPurchased: false
  }, 
  {
    item: 'Pizza',
    brand: 'DiGiorno',
    price: '8',
    quantity: '1',
    isPurchased: false
  } 
];

console.log (groceries);

function App() {

  // const jsxElements = [];
  // for (let el of groceries) {
  //   jsxElements.push(<GroceryItem2 name={el} />)
  // }

  return ( 
    <div className="App">
      <div className="groceries">
        <div className="groceries__title">
          McGrocery
        </div>
        <div className="groceries__content">
          <GroceryItem2 data={groceries}/>

        {/* {{groceries.map((grocery, i) => {
        return <GroceryItem2 key={i} item={grocery.item} quantity={grocery.quantity} />
      })} } */}
        </div>
      </div>
    </div>
  );
}

export default App;
