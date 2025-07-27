import heroDesktopImage from "./assets/images/image-product-desktop.jpg";
import heroMobileImage from "./assets/images/image-product-mobile.jpg";
import iconCart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-cream">
      <div className="container flex sm:flex-row flex-col sm:w-[80%] md:w-[768px] w-[85%] h-[98%] sm:h-[600px] bg-white rounded-2xl">
        <div className="sm:w-1/2 w-full h-1/2 sm:h-full">
          <picture>
            <source media="(min-width: 768px)" srcSet={heroDesktopImage} />
            <img
              src={heroMobileImage}
              alt="hero image"
              className="object-cover h-full w-full sm:rounded-l-2xl rounded-t-2xl sm:rounded-none"
            />
          </picture>
        </div>
        {/*  Description*/}
        <div className="flex-1 px-8 py-4 sm:py-12 md:px-15 flex flex-col justify-between">
          <p className="uppercase tracking-[0.3em] text-black-800">Perfume</p>
          <h1 className="text-4xl  font-extrabold">
            Gabrielle Essense Eau De Parfum
          </h1>
          <p className="text-black-800 leading-7">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <section className="flex items-center">
            <h1 className="text-4xl font-bold text-green-500 mr-6">$149.99</h1>
            <p className="line-through">$169.99</p>
          </section>
          <button className="bg-green-500 flex items-center justify-center p-4 rounded-2xl text-white font-semibold hover:bg-green-700 cursor-pointer">
            <img src={iconCart} alt="cart" className="mr-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
