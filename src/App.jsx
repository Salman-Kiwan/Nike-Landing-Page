import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Footer,
  CustomerReviews,
} from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r b-padding">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
