import './App.scss';
import AsideMenu from './components/AsideMenu/AsideMenu.js'
import Products from './components/Products/Products.js'

function App() {
  let autos = [{
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },{
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  },
  {
    img: "https://pbs.twimg.com/profile_images/713511184910139392/_hAw3t46_400x400.jpg",
    title: "Tesla Model X",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "$132000"
  }]
  let autoCard = autos.map((auto :{img: string; title: string; info: string; price: string;}, index :number) => {
    return <Products product={auto} key={index}/>
  })
  return (
    <div className="App">
      <AsideMenu/>
      <div className="Products-group">
        {autoCard}
      </div>
    </div>
  );
}

export default App;