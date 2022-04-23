import Layout from "./layout/index";

import useAuthStateChanged from "./hooks/useAuthStateChanged";

//Pages
import Auth from "./pages/Login/index"
import Home from "./pages/Home/index"

function App() {
  const isAuth = useAuthStateChanged();
  
  return (
    <Layout>
      {isAuth ? <Home/> : <Auth/>}
    </Layout>
  );
}

export default App;