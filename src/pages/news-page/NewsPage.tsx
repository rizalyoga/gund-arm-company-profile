import { useEffect } from "react";
import { GET_LAUNCHES_PAST } from "../../graphql/getLaunchPastQuery";
import { useLazyQuery } from "@apollo/client";
import Loading from "../../components/common/loading/Loading";
import CardNews from "../../components/common/cards/card-news/CardNews";
import TopScrollButton from "../../components/common/top-scroll-button/TopScrollButton";

const News = () => {
  const [getNewsLaunchesPast, { loading, error, data }] = useLazyQuery(
    GET_LAUNCHES_PAST,
    {
      variables: { limit: 13 },
    }
  );

  useEffect(() => {
    getNewsLaunchesPast();
  }, []);

  if (loading) return <Loading />;
  if (error) {
    console.error(error);
    return (
      <div className="line-grid-container">
        <div className="containers mt-12 min-h-screen ">
          <h1 className="font-lobster text-7xl font-extrabold py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-400 to-blue-300">
            Gund•Arm News
          </h1>
          <h3 className="-mt-5 text-xl font-poppins text-violet-300 italic font-semibold">
            •This content from SpaceX graphQL•
          </h3>
          <section className="card-wraper  ">
            <h1 className="text-center mt-32 text-2xl font-semibold text-red-400">
              error message : {error.message}
            </h1>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="line-grid-container ">
      <div className="containers mt-12 min-h-screen ">
        <h1 className="font-lobster text-7xl font-extrabold py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-400 to-blue-300">
          Gund•Arm News
        </h1>
        <h3 className="-mt-5 text-xl font-poppins text-violet-300 italic font-semibold">
          •This content from SpaceX graphQL•
        </h3>
        <section className="card-wraper gap-4 grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 mb-8 mt-12 ">
          {data?.launchesPast &&
            data?.launchesPast.map((dataLaunchPast: any) => (
              <CardNews
                key={dataLaunchPast.mission_name}
                missionName={dataLaunchPast.mission_name}
                details={dataLaunchPast.details}
                // thumbnail={dataLaunchPast.ships[0]?.image}
                type={dataLaunchPast.__typename}
              />
            ))}
        </section>
      </div>
      <TopScrollButton />
    </div>
  );
};

export default News;
