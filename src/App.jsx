import BackgroundMobile from "./assets/images/bg-main-mobile.png";
import BackgroundDesktop from "./assets/images/bg-main-desktop.png";
import logo from './assets/images/card-logo.svg'
import Form from "./components/Form";

function App() {
  return (
    <section>
      <div className="absolute -z-10">
        <picture>
          <source media="(min-width: 1024px)" srcSet={BackgroundDesktop} />
          <img src={BackgroundMobile} alt="" />
        </picture>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="mt-10 mx-5 lg:grid lg:grid-cols-1 lg:gap-8">
          <article className="front-card p-5 flex flex-col justify-between">
            <img src={logo} alt="logo" className="w-20 lg:w-28" />
            <div>
              <h2 className="text-white text-xl mb-6 lg:text-3xl tracking-widest">1234 5678 9012 3456</h2>

              <ul className="flex items-center justify-between">
                <li className="text-white uppercase text-base lg:text-xl tracking-widest">Thomas Sankara</li>
                <li className="text-white text-base lg:text-xl tracking-widest">00/00</li>
              </ul>
            </div>
          </article>
          <article className="back-card relative lg:ml-20">
            <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">123</p>
          </article>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default App;
