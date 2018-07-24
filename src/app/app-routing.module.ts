import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
    { path: '', redirectTo: 'exam', pathMatch: 'full' },
    { path: 'exam', component: ExamComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
