import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getCoinExchanges } from "../api";
import Loader from "../Components/Loader";
import { useAxios } from "./useAxios";
import Exchange from "../Components/CoinExchange";

function CoinExchanges() {
  const { id } = useParams();
  const { loading, error, data: exchanges } = useAxios(getCoinExchanges, id);

  if (error) {
    console.log(error);
  }

  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter((exchange) => exchange.fiats.length > 0)
      .map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
}

CoinExchanges.propTypes = {
  loading: propTypes.bool.isRequired,
  exchanges: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      adjusted_volume_24h_share: propTypes.number,
      fiats: propTypes.arrayOf(
        propTypes.shape({
          name: propTypes.string,
          symbol: propTypes.string,
        })
      ),
    })
  ),
};

export default CoinExchanges;
