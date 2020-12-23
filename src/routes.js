
import Main from './components/Main/main';
import { Home } from './views/Home';
import { Todos } from './views/Todos';
import { Comments } from './views/Comments';
import { IndividualComments } from './views/IndividualComments/individualComments';

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
        path: "/todos",
        component: Todos,
        exact: true,
      },
      {
        path: "/comments",
        component: Comments,
        exact: true,
      },
      {
        path: "/comments/:id",
        component: IndividualComments
      },
      {
        path: "/todos/:id",
        component: IndividualComments
      }
    ]
  },
]