import PinCard from "../../components/PinCard/PinCard";
import sampleImage from "../../assets/Magnificents.jpeg";
import Form from "../../components/Form"

const direct = "https://ca.pinterest.com/pin/19914423346710722/";

function HomePage() {
  return (
    <PinCard
      title={"Sample card"}
      src={sampleImage}
      desc={"This is a sample card."}
      direct={direct}
    ></PinCard>
    <Form></Form>
  );
}

export default HomePage;
