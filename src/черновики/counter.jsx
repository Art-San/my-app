import React, { } from "react";

const Counter = (props) => {
    // console.log('props', props);
    // const [value, setValue] = useState(props.value);
    const {value} = props;
    
   
    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    
    const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += value === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
    };

    // const handeleIncrement = () => {
    //     // setValue((prevState) => prevState + 1);
    //     // setValue(value + 1);
    //     // setValue(value + 1);
    //     console.log('handele Increment');
    // };
    // const handleDecrement = () => {
    //     // setValue((prevState) => prevState - 1);
    //     console.log('handle Decrement');
    // };
    

    return (
        <div> 
            <span> {props.name} </span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>
            <button className="btn btn-danger btn-sm m-2" 
            onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
            
        </div>
    );
};

export default Counter;