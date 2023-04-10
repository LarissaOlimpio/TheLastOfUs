import styles from "./TextField.module.css";

const TextField = (props) => {
  return (
    <div className={styles.textField}>
      <label>{props.label}</label>

      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        onBlur={props.onBlur}
        required={props.required}
      />
    </div>
  );
};
export default TextField;
