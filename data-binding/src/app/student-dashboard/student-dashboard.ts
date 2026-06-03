import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SlicePipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-student-dashboard',
  imports: [FormsModule, SlicePipe, UpperCasePipe],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard {
  //  student profile
  studentName: string = 'John Doe';
  age: number = 20;
  major: string = 'Computer Science';
  isDisabled: boolean = true;
  toggleText: string = "Enable Reset Button";

  // click counter
  counter: number = 0;
  increaseCounter() {
    this.counter += 1;
  }
//  reset function
resetName () {
  this.studentName = "";
}

toggleResetButton () {
  this.isDisabled = !this.isDisabled;
  this.toggleText = this.isDisabled ? "Enable Reset Button" : "Disable Reset Button";
}
}
