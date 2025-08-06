import React from "react";
import ChartTemplate from "./other/ChartTemplate";

const AmountSet = ({ label, figure = "NA", currency = "USD" }) => {
  return (
    <div className="amount-block">
      <div className="amount-block__label">{label}</div>
      <div className="amount-block__figure">
        <span>{figure}</span> {currency}
      </div>
    </div>
  );
};

const TableListItem = ({ val1, val2, val3 }) => {
  return (
    <tr>
      <td>{val1}</td>
      <td>{val2}</td>
      <td>{val3}</td>
    </tr>
  );
};

const tableListData = [
  { val1: 25601, val2: "Redesign project template", val3: "$4500" },
  { val1: 65456, val2: "Work template", val3: "$5500" },
];

const amountSet = [
  { label: "You have earned", figure: 21451 },
  { label: "Today", figure: 451 },
  { label: "This Month", figure: 8514 },
];

const SaleCard = () => {
  return (
    <div className="salecard">
      <div className="salecard__amount-wrap">
        {amountSet.map((amount) => {
          return <AmountSet label={amount.label} figure={amount.figure} />;
        })}
      </div>
      <div className="salecard__table-wrap">
        <div className="salecard__table-header">Last Sale</div>
        <table className="salecard__table">
          {tableListData?.map((item) => (
            <TableListItem val1={item.val1} val2={item.val2} val3={item.val3} />
          ))}
        </table>
      </div>
      <div className="salecard__chart">
        <ChartTemplate height={100} color="hsl(0, 87%, 65%)" />
      </div>
    </div>
  );
};

export default SaleCard;
