 const Input = ({ name,label, type, value, onChange, placeholder, className, handleChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className="form-control" />
      </div>
    );
  };
  
  export default Input

//   selected


