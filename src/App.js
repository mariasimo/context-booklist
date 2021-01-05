import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
