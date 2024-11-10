import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-wallet',
    pathMatch: 'full',
  },
  {
    path: 'my-wallet',
    loadComponent: async () =>
      (await import('./features/my-wallet/my-wallet.component'))
        .MyWalletComponent,
  },
  {
    path: 'my-card',
    loadComponent: async () =>
      (await import('./features/my-card/my-card.component')).MyCardComponent,
  },
  {
    path: 'finance-chart',
    loadComponent: async () =>
      (await import('./features/finance-chart/finance-chart.component'))
        .FinanceChartComponent,
  },
  {
    path: 'recent-transactions',
    loadComponent: async () =>
      (
        await import(
          './features/recent-transactions/recent-transactions.component'
        )
      ).RecentTransactionsComponent,
  },
  {
    path: 'setting',
    loadComponent: async () =>
      (await import('./features/setting/setting.component')).SettingComponent,
  },
  {
    path: '*',
    redirectTo: 'my-wallet',
    pathMatch: 'full',
  },
];
