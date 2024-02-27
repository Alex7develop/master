import Card from '../Card/Card';

const Content = () => {
  return (
    <div className="dataCard revenueCard">
      {/* <div>
        <h1>Consupsion</h1>
      </div> */}
      <Card
        content="liters of water were consumed within the last 55 days"
        number={504.75}
      />
      <Card
        content="liters of milk were consumed within the last 55 days"
        number={185.62}
      />
      <Card
        content="kg of powder were consumed within the last 55 days"
        number={1.78}
      />
      <Card
        content="kg of beans were consumed within the last 55 days"
        number={48.69}
      />
      <Card
        content="liters of syrup were consumed within the last 55 days"
        number={122.78}
      />
      <Card
        content="Please be aware that the quan might not yet be completel."
        number={12.78}
      />
    </div>
  );
};

export default Content;
