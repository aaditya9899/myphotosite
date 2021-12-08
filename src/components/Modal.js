import React from "react"; 

const Modal = ({selectedImg, setSelectedImg })=> {

    const handleClick =(e) =>{
        if(e.target.classList.contains('backdrop'))
        {   
            setSelectedImg(null);   

        }
    }
    return (
         
        <div>
            <div className="backdrop" onClick={handleClick}>
                <img src={selectedImg} alt="enlarged pic"/>
            </div>
        </div>
    )
}

export default Modal;