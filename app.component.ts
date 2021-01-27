import { Component } from "@angular/core";
import { environment } from "../environments/environment";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  /** The following consts will be used in HTMl file as Labels */
  public inputLabel = environment.inputLabel;
  public outputLabel = environment.outputLabel;

  /** There are the input values (Collection of strings/numbers/invaild ) */
  public stringCollection = [1, 3, 5, , 15, "A", 23, 97, 45, -3, -5, -15];

  /** Factor and its respected return values */
  public mappings = [{ factor: 3, word: "Fizz" }, { factor: 5, word: "Buzz" }];

  /** Core business logic is here!*/
  fizzbuzz(num) {
    const number = parseInt(num);
    // Check whether we are recieving Number or not
    if (!Number(number)) {
      return '"' + number + '" is Invalid Item';
    }
    var words = this.mappings
      .filter(function(mapping) {
        return number % mapping.factor === 0;
      })
      .map(function(mapping) {
        return mapping.word;
      });

    if (words.length > 0) {
      return Number(number) > 0
        ? words.join("")
        : words.length === 2
        ? words.join("-")
        : words[0] + "-";
    } else {
      return (
        "Divided " +
        number.toString() +
        " by 3 <br /> Divided " +
        number.toString() +
        " by 5"
      );
    }
  }

  // wordsConcat(words, number) {
  //   return words.length === 2 ? words.join("-") : words[0] + "-";
  // }

  /** we have another way of doing this task. Uncomment the below code if you want to provide customized inputs from UI. so that it will take the input from input box and display the corresponding vlaues on the screen. Dont forget to Uncomment the corresponding HTML code*/

  // public inputValue;
  // public outputValue;

  // onSearchChange(searchValue: any): void {
  //   if (!Number(searchValue)) {
  //     this.outputValue = "Invalid Item";
  //   } else if (parseInt(searchValue) % 15 === 0) {
  //     this.outputValue = "FizzBuzz\t";
  //   } else if (parseInt(searchValue) % 3 === 0) {
  //     this.outputValue = "Fizz\t";
  //   } else if (parseInt(searchValue) % 5 === 0) {
  //     this.outputValue = "Buzz\t";
  //   } else {
  //     this.outputValue = searchValue;
  //   }
  // }
}
