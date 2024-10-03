import PinCard from "../../components/PinCard/PinCard";
import sampleImage from "../../assets/Magnificents.jpeg";
import Form from "../../components/Form/Form";

function HomePage() {
  return (
    <div>
      <PinCard
        title={"Sample card"}
        src={sampleImage}
        desc={"This is a sample card."}
      ></PinCard>
      {/* <Form></Form> */}
    </div>
  );
}

export default HomePage;
