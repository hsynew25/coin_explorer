import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getCoinMarkets } from "../api";
import Loader from "../Components/Loader";
import Market from "../Components/Market";
import { useAxios } from "./useAxios";

function Markets() {
  const { id } = useParams();
  const { loading, error, data: markets } = useAxios(getCoinMarkets, id);

  if (error) {
    console.log(error);
  }

  return loading ? (
    <Loader />
  ) : (
    markets
      .filter((market) => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
}

Markets.propTypes = {
  loading: propTypes.bool.isRequired,
  markets: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      url: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};

export default Markets;
