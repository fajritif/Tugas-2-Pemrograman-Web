import Biodata from "./Components/Biodata/Biodata"
import Biodata from "./Components/Galeri/Galeri"
import Biodata from "./Components/Hobi/Hobi"
import Biodata from "./Components/Portofolio/Portofolio"
import Biodata from "./Components/Prestasi/Prestasi"
import {BrowserRouter as Router,Routes,Route} from "react-dom";

function App () {
    return (
        <>
           <Routes>
            <Route index element={<HomePage />} />
            <Route path="/biodata" element={<BiodataPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/hobi" element={<HobiPage />} />
            <Route path="/Portofolio" element={<PortofolioPage />} />
            <Route path="/prestasi" element={<PrestasiPage />} />
        </Routes>
        </>
    );
};

export default App;
