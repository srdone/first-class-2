import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { ScreensModule, routes } from './screens';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        ScreensModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
