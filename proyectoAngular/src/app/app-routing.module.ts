import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigUpComponent } from './page/sig-up/sig-up.component';
import { LoginComponent } from './page/login/login.component';
import { PerfilComponent } from './page/perfil/perfil.component';



const routes: Routes = [


{path: "login", component:LoginComponent},
{path: "perfil", component:PerfilComponent},
{path: "registro", component:SigUpComponent},
{path: "**", redirectTo:"registro"}


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
