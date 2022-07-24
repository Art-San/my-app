import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
      { id: 0, value: 1, name: 'Ненужная вещь'},
      { id: 1, value: 2, name: 'Ложка'},
      { id: 2, value: 3, name: 'Вилка'},
      { id: 3, value: 4, name: 'Тарелка'},
      { id: 4, value: 0, name: 'Набор минималиста'},
    ]
    const [counters, setCounters] = useState (initialState);
    


    const handeleIncrement = (id) => {
      const newValuePlus = counters.map((counter) => {
        if (counter.id === id) {
          counter.value = counter.value + 1;
        }
        return counter;
      })
      setCounters(newValuePlus)
    };
    
  
    const handleDecrement = (id) => {
      const newValueMinys = counters.map((counter) => {
         if (counter.id === id) {
            counter.value -= 1;
         }
         return counter;
      })
      setCounters(newValueMinys)
    };

    const handleDelete = (id) => {
      const newCounters = counters.filter(c => c.id !== id)
      setCounters(newCounters)
    };

    const handleReset = () => {
      setCounters(initialState)
    };

     
    return (
        <>
        {counters.map((count) => (
        <Counter 
              key={count.id} 
              onDelete={handleDelete} 
              onIncrement={handeleIncrement} 
              onDecrement={handleDecrement} {...count}/> 
        
          ))}
          <button 
              className="btn btn-primary btn-sm m-2" 
              onClick={handleReset}
          >
              Сброс
          </button>
       
          </>
    );
};

export default CountersList;