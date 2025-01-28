import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcom',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'welcom',
    loadChildren: () => import('./welcom/welcom.module').then( m => m.WelcomPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule),
    canActivate :[AuthGuard]
  },
  {
    path: 'creat-new-password',
    loadChildren: () => import('./creat-new-password/creat-new-password.module').then( m => m.CreatNewPasswordPageModule)
  },
  {
    path: 'homepage-full',
    loadChildren: () => import('./homepage-full/homepage-full.module').then( m => m.HomepageFullPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'found-result',
    loadChildren: () => import('./found-result/found-result.module').then( m => m.FoundResultPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'your-cart',
    loadChildren: () => import('./your-cart/your-cart.module').then( m => m.YourCartPageModule)
  },
  {
    path: 'check-out-1',
    loadChildren: () => import('./check-out-1/check-out-1.module').then( m => m.CheckOut1PageModule)
  },
  {
    path: 'check-out2',
    loadChildren: () => import('./check-out2/check-out2.module').then( m => m.CheckOut2PageModule)
  },
  {
    path: 'check-out-3',
    loadChildren: () => import('./check-out-3/check-out-3.module').then( m => m.CheckOut3PageModule)
  },
  {
    path: 'my-orders-1',
    loadChildren: () => import('./my-orders-1/my-orders-1.module').then( m => m.MyOrders1PageModule)
  },
  {
    path: 'order-info-1',
    loadChildren: () => import('./order-info-1/order-info-1.module').then( m => m.OrderInfo1PageModule)
  },
  {
    path: 'rate-product',
    loadChildren: () => import('./rate-product/rate-product.module').then( m => m.RateProductPageModule)
  },
  {
    path: 'order-info-2',
    loadChildren: () => import('./order-info-2/order-info-2.module').then( m => m.OrderInfo2PageModule)
  },
  {
    path: 'sidebar-home',
    loadChildren: () => import('./sidebar-home/sidebar-home.module').then( m => m.SidebarHomePageModule)
  },
  {
    path: 'my-wishlist-all-item',
    loadChildren: () => import('./my-wishlist-all-item/my-wishlist-all-item.module').then( m => m.MyWishlistAllItemPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-setting',
    loadChildren: () => import('./profile-setting/profile-setting.module').then( m => m.ProfileSettingPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'add-new-card',
    loadChildren: () => import('./add-new-card/add-new-card.module').then( m => m.AddNewCardPageModule)
  },
  {
    path: 'new-card',
    loadChildren: () => import('./new-card/new-card.module').then( m => m.NewCardPageModule)
  },
  {
    path: 'instagram',
    loadChildren: () => import('./instagram/instagram.module').then( m => m.InstagramPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'practec',
    loadChildren: () => import('./practec/practec.module').then( m => m.PractecPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
