import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { HttpModule, Http, Headers, Response } from "@angular/http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    ],
  declarations: [AppComponent, ...navigatableComponents],
  bootstrap: [AppComponent],
})
export class AppModule {}
