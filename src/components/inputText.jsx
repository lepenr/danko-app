import React, { Component } from "react";
import "../App.css";
import Footer from "./footer";

class InputText extends Component {
  //state = {  }
  //   state = {
  //     count: this.props.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };
  //   incrementNumber = () => {
  //     console.log("value", this.state.count.value);
  //     this.setState({ count: document.getElementById("exampleTextarea") });
  //   };

  state = {
    value: "",
    value2: [
      "Splnil sa mi sen a muím zmeniť celkové svoje žitie.",
      "Národná rada môže konať len v zmysle zákona, takáto kompetencia Národnej rade dané nie.",
      "Hľadám riešenia aj tohto problému, ktorého som zdedil.",
      "Vláda nestojí a nepadá na žiadnom ministrovi a na žiadnom koncesionárskom poplatkovi",
      "A napriek tomu hovorím, že nezatracujem dneska ani jednu z týchto chciest.",
      "Žiaden človek nedokáže dať toľko lásky človeku, ako dokáže dať len človek človeku. ",
      "Viete čo, urobím to tak, že nikdy. Pretože je to armáda Slovenskej republiky, ja si tu hodnosť zaslúžim. Je to kapitán v zálohe.",
      "Ja neznášam chlapov, ktorí sú hysterici, preskakuje im hlas a vykrikujú a demonštrujú na tribúnach v tričke a potom nevedia si dať normálne ani pivo a porozprávať sa ako chlapi.",
      "Navrhujeme to, aby vždy vo výplatný termín júnový, júlový, júnový, to znamená vo výplatnom termeni za kalendárny mesiac mája a vo výplatný termín decembrový, bol",
      "Vláda nestojí a nepadá na žiadnom ministrovi a na žiadnom koncesionárskom poplatkovi...",
      "Dáme, ktorá sa vryla do srdciach...",
      "Otváram rozpravu o tomtom bode programu.",
      "Poslanec poslanca uráža spôsobom, akým uráža.",
      "Dokedy my budeme sa taktom triešiť.",
      "Nechcem robiť niekoho z hrdinu, kto ním nie je.",
      "Kým v Národnej rade budú poslanci jesť horalky, chodiť v tričkách a sypať po pléne rôzne predmety, nemôže byť parlament vizitkou národa."
    ]
  };

  handleChange = e => {
    const NS = { ...this.state };
    NS.value = e.value;
    this.setState(NS);
    // pull in the state.value
    // add e.target.value to it
    // resave to state.value
  };

  pickText = e => {
    let random = Math.floor(Math.random() * this.state.value2.length);
    console.log("random", random);
    return this.state.value2[random];
  };
  randomizeText = e => {
    let str = this.state.value;
    console.log("WWW", str);
    if (str === undefined || str == "") {
      return "Povec mi čo mám zadať do textu. Ja kpt kpt poviem čo si myslím.";
    }
    if (str.split(" ").length < 2) {
      return str;
    } else {
      let result = [];
      //result = str.match(/[^\.!\?]+[\.!\?]+/g);
      console.log("resul1", result);
      if (str.match(/[^\.!\?]+[\.!\?]+/g) == null) {
        result.push(str);
      } else {
        result = str.match(/[^\.!\?]+[\.!\?]+/g);
      }
      console.log("regex", result);
      let outputArray = [];
      result.map(x => {
        let temp = x.trim();
        let newArray = temp.split(" ");
        let array = newArray[0] + " " + newArray[newArray.length - 1];
        let middlValue = "";
        let firstElement = newArray.shift();
        let secondElement = newArray.pop();

        let test = newArray;
        let calculator = [];
        newArray.map(sentece => {
          let random = Math.floor(Math.random() * newArray.length);
          while (calculator.includes(random)) {
            //ak to tam je false
            random = Math.floor(Math.random() * newArray.length);
          }
          middlValue = middlValue + " " + newArray[random]; //newArray[random];
          calculator.push(random);
        });

        let string1 = "";
        for (let i = 0; i < newArray.length; i++) {
          string1 = string1 + " " + newArray[i];
          newArray.slice(2, 3);
        }

        outputArray.push(firstElement + middlValue + " " + secondElement);
      });
      return outputArray;
    }
  };

  render() {
    console.log("prosp", this.props);
    return (
      <div className="textInput form-rounded">
        <textarea
          className="form-control"
          id="exampleTextarea"
          maxLength="200"
          rows="2"
          value={this.state.value}
          onChange={e => this.handleChange(e.target)}
          placeholder="Tu povec co poviem ti v bubline ja."
        />
        <div>
          <button
            id="generate-button"
            type="button"
            className="btn btn-light btn-cust"
            onClick={e =>
              this.props.newProp(this.randomizeText(this.state.value))
            }
          >
            Generuj!
          </button>

          <button
            type="button"
            className="btn btn-light btn-cust"
            onClick={e => this.props.newProp2(this.pickText())}
          >
            Náhodný text
          </button>
        </div>
      </div>
    );
  }
}

export default InputText;
