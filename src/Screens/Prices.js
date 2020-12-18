import { useAxios } from "./useAxios";
import { getPrices } from "../api";
import propTypes from "prop-types";
import Loader from "../Components/Loader";
import Price from "../Components/Price";

function Prices() {
  const { loading, error, data: prices } = useAxios(getPrices);
  if (error) {
    console.log(error);
  }
  return loading ? (
    <Loader />
  ) : (
    prices.map((price) => <Price key={price.id} {...price} />)
  );
}

Prices.propTypes = {
  loading: propTypes.bool.isRequired,
  prices: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      symbol: propTypes.string.isRequired,
      quotes: propTypes.shape({
        USD: propTypes.shape({
          price: propTypes.number.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default Prices;
