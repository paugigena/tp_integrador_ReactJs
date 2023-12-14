
import Productos from "../Components/Productos.jsx";
import firebase from "../Config/firebase";

const Home = () => {
  console.log("firebase", firebase);
  return (
    <div>
      <h2>Juan Sklar</h2>
     
      <Productos />
    </div>
  );
};


export default Home;
