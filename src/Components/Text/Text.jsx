export const Text = (props) => {
  const { name, age } = props;
  return (
    <section>
      <p>Mi nombre es: {name}</p>
      <p>Y su edad es: {age}</p>
    </section>
  );
};
