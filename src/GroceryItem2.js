function GroceryItem2(props) {

    return (
        
        <div className="groceries__item grid--container ">
        <div className="groceries__item__name">
          Item: {props.item}
        </div>
        <div className="groceries__item__quantity">
          {props.quantity}
        </div>
         <div className="groceries__item__price">
         {props.price}
        </div>
      </div>
    )
}

export default GroceryItem2; // now we need to connect to App to
                        // get this in the DOM


