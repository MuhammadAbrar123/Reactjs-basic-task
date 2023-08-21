import ListGroup from './components/ListGroup';
// import Message from './Message';

const handeSelected=(item:string)=>{
  console.log(item);

}

function App(){
  let items = ["Lahore", "Karachi", "Quetta", "Peshawar", "Gilgit"];
  return <div><ListGroup items={items} heading="Cities" onSelectedItem={handeSelected}/> </div>
}

export default App;