import React from "react";

function TodoItems(props) {
  return (
    <li
      onClick={() => {
        {
          props.onChecked(props.id);
        }
      }}
    >
      {props.text}
    </li>
  );
}

export default TodoItems;
