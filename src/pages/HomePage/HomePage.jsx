import PinCard from "../../components/PinCard/PinCard";
import sampleImage from "../../assets/Magnificents.jpeg";

const direct = "https://ca.pinterest.com/pin/19914423346710722/";

function HomePage() {
  return (
    <PinCard
      title={"Sample card"}
      src={sampleImage}
      desc={"This is a sample card."}
      direct={direct}
    ></PinCard>
  );
}

export default HomePage;
