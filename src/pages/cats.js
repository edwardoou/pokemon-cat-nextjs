/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";

const Cats = ({ results, error }) => {
  return (
    <div className={styles.main}>
      <h1>Cats Breed</h1>
      <div className={styles.container}>
        {results.map((cat, index) => (
          <div key={cat.name}>
            <img
              width={300}
              height={300}
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
              alt={cat.name}
            />
            <h4>{cat.name}</h4>
            <p>
              <strong>Pais: </strong>
              {cat.origin}
            </p>
            <p>
              <strong>Peso: </strong>
              {cat.weight.metric} kilos
            </p>
            <p>
              <strong>Temperamento: </strong>
              {cat.temperament}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Cats.getInitialProps = async () => {
  try {
    //tipos de gatos en json
    const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=9");
    const data = await response.json();

    //retorna los gatos
    return {
      results: data,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export default Cats;
