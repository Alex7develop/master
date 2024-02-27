import Card from '../Card/Card';

const Content = () => {
  const cardData = [
    { content: "liters of water were consumed within the last 55 days", number: 504.75 },
    { content: "liters of milk were consumed within the last 55 days", number: 185.62 },
    { content: "kg of powder were consumed within the last 55 days", number: 1.78 },
    { content: "kg of beans were consumed within the last 55 days", number: 48.69 },
    { content: "liters of syrup were consumed within the last 55 days", number: 122.78 },
    { content: "Please be aware that the quantity might not yet be complete.", number: 12.78 }
  ];

  return (
    <div className="dataCard revenueCard">
      {cardData.map((data, index) => (
        <Card key={index} content={data.content} number={data.number} />
      ))}
    </div>
  );
};

export default Content;
