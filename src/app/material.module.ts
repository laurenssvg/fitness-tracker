import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatIcon,
  MatFormFieldModule,
  MatInputModule,
  MatDatepicker,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {}
