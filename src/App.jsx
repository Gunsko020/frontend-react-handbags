import './App.css'
import Button from "./components/Button/Button.jsx";
import Product from "./components/Product/Product.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Tile from "./components/Tile/Tile.jsx";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

function App() {


  return (
      <>
      <h1>Handbags & Purses</h1>
          <header>
            <nav>
          <Button
            handleClick={()=>{console.log("to the collection")}}
            btnDisabled={false}
          >
              to the collection
          </Button>
          <Button
              handleClick={()=>{console.log("shop all bags")}}
              btnDisabled={false}
          >
              shop all bags
          </Button>
          <Button
              handleClick={()=>{console.log("pre-orders")}}
              btnDisabled={true}
          >
              pre-orders
          </Button>
            </nav>
          </header>
          <main>
              <Product
                label='Bestseller'
                img={bag1}
                alt="The handy bag"
                title="The handy bag"
                price="€400,-"
              >
              </Product>
              <Product
                  label='Bestseller'
                  img={bag2}
                  alt="The stylish bag"
                  title="The stylish bag"
                  price="€250,-"
              >
              </Product>
              <Product
                  label='New Collection'
                  img={bag3}
                  alt="The simple bag"
                  title="The simple bag"
                  price="€300,-"
              >
              </Product>
              <Product
                  label='New Collection'
                  img={bag4}
                  alt="The trendy bag"
                  title="The trendy bag"
                  price="€150,-"
              >
              </Product>
          </main>
          <footer>
              <Tile title="Brand">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur exercitationem quis sint sunt tempora voluptate. Autem dolor eaque facere modi neque, nobis non officiis quasi rem repellat, tempora veniam voluptatibus.</p>
              </Tile>
              <Tile
              img={brand}
              imgdes="brand"/>
              <Tile
              img={ourStory}
              imgdes="our story"/>
              <Tile title="Our story">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur exercitationem quis sint sunt tempora voluptate. Autem dolor eaque facere modi neque, nobis non officiis quasi rem repellat, tempora veniam voluptatibus.</p>
              </Tile>
          </footer>
      </>
  )
}

export default App
