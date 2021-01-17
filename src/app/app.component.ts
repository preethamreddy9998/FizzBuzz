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
  public stringCollection = [1, 3, 5, , 25, "A", 43, 81, 75, , ];

  /** Factor and its respected return values */
  public mappings = [{ factor: 3, word: "Fizz" }, { factor: 5, word: "Buzz" }];

  fizzbuzz(number) {
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
      return words.join("");
    } else {
      return "Divided " + number.toString() + " by 3 and 5";
    }
  }

  multipleOf(factor, number) {
    return number % factor === 0;
  }
  // getTheOutput(searchValue: any): string {
  //   if (!Number(searchValue)) {
  //     return "Invalid Item";
  //   } else if (parseInt(searchValue) % 15 === 0) {
  //     return "FizzBuzz\t";
  //   } else if (parseInt(searchValue) % 3 === 0) {
  //     return "Fizz\t";
  //   } else if (parseInt(searchValue) % 5 === 0) {
  //     return "Buzz\t";
  //   } else {
  //     return searchValue;
  //   }
  // }

  /** we have another way of doing this task. Uncomment the below code if you want to provide customized inputs from UI. so that it will takes the input from input box and display the corresponding vlaue on the screen. Dont forget to Uncomment the corresponding HTML code*/

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