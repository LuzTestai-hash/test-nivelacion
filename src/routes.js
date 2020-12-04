
import Main from './components/Main/main';
import { Home } from './views/Home/Home';
import { TableInformation } from './views/TableInformation';
import { Comments } from './views/Comments/Comments';

export const routes = [
  {
    path: "/",
    component: Main,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/table",
        component: TableInformation,
        exact: true,
      },
      {
        path: "/comments",
        component: Comments,
        exact: true,
      }
    ]
  },
]