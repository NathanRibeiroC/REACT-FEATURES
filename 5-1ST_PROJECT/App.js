import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import AbcOrderedList from "./MainContent";

//Parent component
function App() {
  return (
    <div>
      {/* Children component */}
      <HeaderComponent />
      <AbcOrderedList />
      <FooterComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("page"));
