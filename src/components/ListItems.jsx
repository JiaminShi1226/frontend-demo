import React from "react";

const ListItems = (props) => {
  return props.list ? (
   props.list.map((item) =>
   {
    return (
      <div key={item.id}>
        <h1>{item.type}</h1>
      </div>
    );
   })
  ) : (
   <h1>Loading...</h1>
  );
}

export default ListItems;
