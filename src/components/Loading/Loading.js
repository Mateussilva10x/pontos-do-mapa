import "../../styles/loading.scss";

const Loading = () => {
  return (
    <main id="main">
      <section className="load">
        <h1>LOADING</h1>
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </section>
    </main>
  );
};

export default Loading;
