import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ApiCallComponent } from './components/api-call/api-call.component';
import { UserComponent } from './components/user/user.component';
import { UserReactiveComponent } from './components/user-reactive/user-reactive.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { LoginComponent } from './components/login/login.component';
import { checkLoginGuard } from './guard/check-login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [checkLoginGuard],
        children: [
            { path: 'directive', component: DirectiveComponent, canActivate: [checkLoginGuard] },
            { path: 'data-binding', component: DataBindingComponent, canActivate: [checkLoginGuard] },
            { path: 'variables', component: VariablesComponent, canActivate: [checkLoginGuard] },
            { path: 'template-form', component: TemplateFormComponent },
            { path: 'api-call', component: ApiCallComponent },
            { path: 'user', component: UserComponent },
            { path: 'user-reactive', component: UserReactiveComponent },
            { path: 'resource-api', component: ResourceApiComponent }

        ]
    }
];
