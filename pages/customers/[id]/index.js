import { useRouter } from "next/router";

const updateQueryParams = (router, queryParams) => {
  const newQueryParams = new URLSearchParams(location.search);
  Object.entries(queryParams).forEach(([key, value]) => {
    newQueryParams.set(key, value);
  });

  router.replace(
    {
      pathname: router.pathname,
      query: Object.fromEntries(newQueryParams.entries())
    },
    `${window.location.pathname}?${newQueryParams.toString()}`,
    { shallow: true }
  );
};

const Home = () => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() =>
          updateQueryParams(router, { time: new Date().toLocaleTimeString() })
        }
      >
        <h1>Update "time" query param</h1>
      </button>

      <h2>router.params: {JSON.stringify(router.query)}</h2>
    </>
  );
};

export default Home;
