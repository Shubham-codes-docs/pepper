import Navbar from "./components/navbar/Index";
import Home from "./pages/home/Index";
import Footer from "./components/footer/Index";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container></Container>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
