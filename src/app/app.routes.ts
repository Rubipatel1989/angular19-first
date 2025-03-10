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

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'directive',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'directive', component: DirectiveComponent },
            { path: 'data-binding', component: DataBindingComponent },
            { path: 'variables', component: VariablesComponent },
            { path: 'template-form', component: TemplateFormComponent },
            { path: 'api-call', component: ApiCallComponent },
            { path: 'user', component: UserComponent },
            { path: 'user-reactive', component: UserReactiveComponent },
            {path: 'resource-api', component: ResourceApiComponent}

        ]
    }
];
