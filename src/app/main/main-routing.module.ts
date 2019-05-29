import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [{
    path: 'main',
    component: MainPage,
    children: [
        {
            path: 'dashboard',
            children: [
                {
                    path: '',
                    loadChildren: './discover/discover.module#DiscoverPageModule'
                },
                {
                    path: ':placeId',
                    loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule'
                }
            ]
        },
        {
            path: 'about-us',
            children: [
                {
                    path: '',
                    loadChildren: './offers/offers.module#OffersPageModule'
                },
                {
                    path: 'new',
                    loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
                },
                {
                    path: 'edit/:placeId',
                    loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
                },
                {
                    path: ':placeId',
                    loadChildren: './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
                }
            ]
        }, {
            path: '',
            redirectTo: '/places/main/dashboard',
            pathMatch: 'full'
        }
    ],
}, {
    path: '',
    redirectTo: '/places/main/dashboard',
    pathMatch: 'full'
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}