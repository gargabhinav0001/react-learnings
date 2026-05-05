import ReactDom from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBody from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
