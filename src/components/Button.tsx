import style from './Posts.module.css';

const Button: React.FC<{buttonType: 'blue' | 'red', caption: string, }> = (props) => {
  return <button className={`${style.button} ${props.buttonType}`}>
    {props.caption}
  </button>
};

export default Button;