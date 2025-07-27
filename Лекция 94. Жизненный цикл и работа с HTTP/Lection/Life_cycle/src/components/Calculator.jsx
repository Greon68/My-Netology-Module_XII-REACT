import { Component } from "react";
import { RATE_URL } from "../config/app";
// const rateUrl = "https://www.cbr-xml-daily.ru/daily_json.js";

export class Caluclator extends Component {
  state = {
    amount: 10,
    rate: 100,
  };

  getValue() {
    const { amount, rate } = this.state;

    return (amount * rate).toFixed(2);
  }

  onAmountChange(amount) {
    this.setState({ amount });
  }

  async componentDidMount() {
    // const response = await fetch(rateUrl);
    const response = await fetch(RATE_URL);
    const data = await response.json();

    if (!data?.Valute?.USD) {
      return;
    }
    const rate = data.Valute.USD.Value;

    this.setState({ rate });
  }

  render() {
    const rub = this.getValue();
    const { amount } = this.state;

    const {rate} = this.state;

    const onChange = (e) => {
      const amount = +e.target.value;

      this.onAmountChange(amount);
    };

    return (
      <div> 
        <div> Текущий курс - {rate} руб/$</div>
        <div> Сумма в USD : </div>  
        <input type="number" value={amount} onChange={onChange} />
        <div>Сумма в рублях : {rub} руб.</div>
      </div>
    );
  }
}
