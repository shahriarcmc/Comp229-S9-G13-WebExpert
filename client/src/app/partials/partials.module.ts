// <!-- COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert -->
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
})
export class PartialsModule { }
