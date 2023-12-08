import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  /*
   serve perchè le varibili vengono cambiate solo localmente, quindi quando
   ritorni dalla funzione, il valore della variabile non è cambiato (C)
   useState ritorna le 2 variabili 
   arr[0]; 
   arr[1];
  */

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <div className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </div>
    </>
  );
}

export default ListGroup;
