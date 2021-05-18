import { useParams } from 'react-router';

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product detail page</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
