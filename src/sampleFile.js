import React,{useState} from 'react'
import './App.css'

function App() {

    const [text, setText] = useState('');
    const [array, setArray] = useState([]);
    const [comp, setComp] = useState([]); 

    const changeHandler = (e) =>{
          setText(e.target.value)
    }
    
    const addText = (e) =>{
        if(text!==''){
            const list = {
                id : Date.now(), 
                isComp : false ,
                text : text 
            }
            setArray([...array,list])
        }
    }

    const delHandler = (id) =>{
        const delArr = array.filter(t =>t.id!==id);
        setArray(delArr)
    }
    const dellHandler = (id) =>{
        const dellArr = comp.filter(t =>t.id!==id);
        setComp(dellArr)
    }
    const comHa = (id) =>{
        const newarr = array ;
        const ind = array.findIndex(t => t.id===id)
        newarr[ind] = {
            ...newarr[ind],
            isComp : true,
        }
        setArray([...newarr]);
        setComp([...comp,newarr[ind]]);
    }

    return (
        <div className='bdy'>

            <div className='addInp'>
                <h3>TODO APP</h3>
                <div className='inpadd'>
                    <input type='text' placeholder='Enter....' onChange={(e)=>changeHandler(e)} />
                    <button onClick={(e)=>addText(e)}>
                    <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
           
            <div className='unfin'>
                <span>TO-DO</span>
                  {array.map(t => {
                        return(!t.isComp?<div className='field'>
                          <span className='unfsp'>{t.text}</span>
                            <div>  
                                <button onClick={()=>delHandler(t.id)}><i class="far fa-trash-alt"></i></button>
                                <button onClick={()=>comHa(t.id)}><i class="fas fa-check"></i></button>
                                </div>   
                            </div>
                            : ''
                    )})
                  }
            </div>
            <div className='fin'>
                <span>Completed</span>
                    {comp.map(t => {
                        return(<div className='findiv'>
                           <span>{t.text}</span> 
                           <button onClick={()=>dellHandler(t.id)}><i class="far fa-trash-alt"></i></button></div>
                     )}
            )}
            </div>
        </div>
    )
}

export default App