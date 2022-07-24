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
    
  
    // const handleDecrement = (id) => {
    //   const newValueMinys = counters.map((counter) => {
    //      if (counter.id === id) {
    //         counter.value -= 1;
    //      }
    //      return counter;
    //   })
    //   setCounters(newValueMinys)
    // };

    // const handleDecrement = (id) => {
    //   const slementIndex = counters.findIndex((c) => c.id === id);
      
    //   const newCounters = [...counters];
    //   console.log('mewCouters', newCounters)
    //   newCounters[slementIndex].value--;
    //   console.log('slementIndex', newCounters[slementIndex].value)
    //   // setCounters(newCounters)
    // }

    // const handleDecrement = (id) => {
    //   const elementFilter = counters.filter(c => c.id === id)
    //   elementFilter[0].value--
    //     console.log('elementFilter', elementFilter)
    //   setCounters(elementFilter)
    // }

    const handleDecrement = (id) => {
    const newCounter = counters.find((post) => post.id === id)
    newCounter.value -=1
    let newValueMinus = [...counters]
    setCounters(newValueMinus)
    };

     //   const handleDecrement = (id) => {
  //     const newCounter = counters.find((post) => post.id === id)
  //     newCounter.value -=1
  //     console.log('counters', counters[4].value)
  //     setCounters(counters)
  // };
  


    const handleDelete = (id) => {
      console.log('handleDelete', id)
      const newCounters = counters.filter(c => c.id !== id)
      newCounters.value--
      // console.log('newCounters', newCounters)
      setCounters(newCounters)
    };

    const handleReset = () => {
      setCounters(initialState)
      // console.log('handle Reset') 
    };

     
    return (
        <>
        {counters.map((count) => (
        // <Counter key={count.id} id={count.id} value = {count.value} name = {count.name} onDelete={handleDelete}/>
        <Counter 
              key={count.id} 
              onDelete={handleDelete} 
              onIncrement={handeleIncrement} 
              onDecrement={handleDecrement} {...count}/> 
              // {/* <h1>Счетчик</h1>  */}
              // {/* <span>{count.name}</span> */}
        
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