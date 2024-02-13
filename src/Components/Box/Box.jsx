
const Box = (props) => {
  console.log(props);
  return (
    <div className='box-img'>
      {props.children}
    </div>
  )
}

export default Box;