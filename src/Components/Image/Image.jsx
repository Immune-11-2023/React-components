import logo from '../../logo.svg';

const Image = (props) => {
  const src = props.src;
  return (
    <div>
      <img className='box-img' src={src} />
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
    </div>
  );
};

export default Image;
