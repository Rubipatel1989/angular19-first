import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { VariablesComponent } from './components/variables/variables.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

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
            {path:'template-form', component: TemplateFormComponent}

        ]
    }
];
