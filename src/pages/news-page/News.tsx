import CardNews from "../../components/common/cards/card-news/CardNews";

const News = () => {
  return (
    <div className="main-container">
      <div className="containers mt-16 min-h-screen ">
        <h1 className="font-lobster text-7xl font-extrabold py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-red-300">
          Gund-arm News
        </h1>
        <section className="card-wraper gap-4 grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 my-8 ">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </section>
      </div>
    </div>
  );
};

export default News;
