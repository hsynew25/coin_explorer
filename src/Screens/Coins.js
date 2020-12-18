import propTypes from "prop-types";
import { getCoins } from "../api";
import Coin from "../Components/Coin";
import Loader from "../Components/Loader";
import { useAxios } from "./useAxios";

function Coins() {
  const { loading, error, data: coins } = useAxios(getCoins);

  if (error) {
    console.log(error);
  }

  return loading ? (
    <Loader />
  ) : (
    coins
      .filter((coin) => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );
}

Coins.propTypes = {
  loading: propTypes.bool.isRequired,
  coins: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      symbol: propTypes.string.isRequired,
      rank: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Coins;
