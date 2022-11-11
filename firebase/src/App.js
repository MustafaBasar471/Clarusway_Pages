import { Form, Table } from "./components/index";

function App() {
  return (
    <div className="app-background">
      <div className="mx-auto max-w-screen-lg">
        <div className="h-screen flex justify-between items-center">
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
