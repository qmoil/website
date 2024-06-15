import Button from "./components/Button";
import Card from "./components/Card";
import Contactform from "./components/Contactform";
import Strategy from "./components/Strategy";



function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button title='Click Me' />
       <Card title='Diesel Supply' description='High-quality diesel fuel sourced from reputable suppliers. Competitive pricing to ensure cost savings for our customers.' image='data:image/jpeg;base64,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' />
      *<Contactform title= 'Get in Touch' paragraph= "We're here to answer your questions and discuss your needs" />
      <Strategy title={""} description={""} image={""}/>
    </div>
  );
}

export default App;
