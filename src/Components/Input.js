const Input = ({value, onChange}) => {
    
    return ( 
        <>
       <input type='text' placeholder="city" onChange={onChange} value={value} />
        </>
     );
}
 
export default Input;