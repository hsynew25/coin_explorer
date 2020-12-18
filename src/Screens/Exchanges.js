import { useAxios } from "./useAxios";
import { getExchanges } from "../api";
import propTypes from "prop-types";
import Loader from "../Components/Loader";
import Exchange from "../Components/Exchange";

function Exchanges() {
  const { loading, error, data: exchanges } = useAxios(getExchanges);

  if (error) {
    console.log(error);
  }
  return loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
}

Exchanges.propTypes = {
  loading: propTypes.bool.isRequired,
  exchanges: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      description: propTypes.string,
      links: propTypes.shape({
        website: propTypes.arrayOf(propTypes.string.isRequired),
      }),
    }).isRequired
  ).isRequired,
};

export default Exchanges;
