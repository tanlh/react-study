import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'components/UI/Card';
import MealItem from 'components/Meals/MealItem/MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('meals.json')
      .then((response) => {
        const loadedMeals = Object.entries(response.data).map(
          ([key, value]) => {
            return {
              id: key,
              ...value,
            };
          }
        );
        setMeals(loadedMeals);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={styles['meals-loading']}>
        <Card>
          <p>Loading...</p>
        </Card>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles['meals-error']}>
        <Card>
          <p>Something went wrong!</p>
        </Card>
      </section>
    );
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
