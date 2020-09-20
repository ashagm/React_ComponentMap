import React from 'react';

function List(props){
	console.log(props);
	// Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notPurchased = props.groceries.filter(grocery => !grocery.purchased);

	 return(
     <div>
      <ul className="list-group">
    Using the map method, render one li element displaying the text property of each grocery
      object.
      {props.groceries.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.id}, {item.name}
        </li>
      ))}
    </ul>

     <ul className="list-group">
      {notPurchased.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>

    </div>

    );
}

export default List;