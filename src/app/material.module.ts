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
  MatCheckboxModule,
  MatSidenavModule,
  MatSidenav,
  MatToolbarModule,
  MatListModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule {}
