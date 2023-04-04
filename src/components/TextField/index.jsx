import styles from "./TextField.module.css";

const TextField = ( props) => {
  const changingInput = (event) => {
    props.modify(event.target.value);
  };


  return (

    <div className={styles.textField}>

      <label>{props.label}
      </label>

      <input

        placeholder={props.placeholder}
        value={props.value}
        onChange={changingInput}
        type={props.type}
        name={props.name}
       
      />
    </div>

  )
}
export default TextField;
