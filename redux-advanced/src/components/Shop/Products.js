import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          key="p1"
          id="p1"
          title="A Book"
          price={6}
          description="This is a book!"
        />
        <ProductItem
          key="p2"
          id="p2"
          title="A Car"
          price={25000}
          description="This is a car!"
        />
        <ProductItem
          key="p3"
          id="p3"
          title="A ship"
          price={30000}
          description="This is ship!"
        />
      </ul>
    </section>
  );
};

export default Products;
