
const Button = ({styles, icon, text, type="button"}) => {
  return (
    <button type={type} className={`${styles} rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none hover:drop-shadow-[0_35px_35px_rgba(202,202,202,0.13)] transition ease-in-out`}>{text} {icon}</button>
  )
}

export default Button