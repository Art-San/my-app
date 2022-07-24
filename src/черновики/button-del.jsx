// import React, { useState } from "react";

// const ButtonDel = () => {

//     const [tags, setTegs] = useState(['tag1', 'tag2', 'tag3']);


//     const handleTagChange = (id) => {
//         setTegs(prevState => prevState.filter(tag => tag !== id));
//     };

//     const renderTags = () => {
//         return (
//         tags.length !== 0 && 
//         tags.map((tag) => (
//             <li 
//                 key={tag} 
//                 className="btn btn-primary btn-sm m-2" 
//                 onClick={() => handleTagChange(tag)}
//                 >
//                     {tag}
//             </li>
//         ))
//         );
//     };

//     if (tags.length !== 0) {
//         return <ul>{renderTags()}</ul>
//     }
// };

// export default ButtonDel



import React, { useState } from "react";

const ButtonDel = () => {

    const [tags, setTegs] = useState(['tag1', 'tag2', 'tag3']);



    const handleTagChange = (id) => {
        setTegs(prevState => prevState.filter(tag => tag !== id));
    };
    console.log(tags.li)

    const renderTags = () => {
        console.log(tags.length)
        return (
        tags.length !== 0 && 
        tags.map((tag) => (
            <div>
                <div>
                    <button 
                        key={tag} 
                        className="btn btn-primary btn-sm m-2" 
                        onClick={() => handleTagChange(tag)}
                        >
                            {tag}
                    </button>
                </div>
            </div>
        ))
        );
    };

    if (tags.length !== 0) {
        return <ul>{renderTags()}</ul>
    }
};

export default ButtonDel
