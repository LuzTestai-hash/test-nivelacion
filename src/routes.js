
import Main from './components/Main/main';
import { Home } from './views/Home';
import { Todos } from './views/Todos';
import { Comments } from './views/Comments';
import { IndividualComments } from './views/IndividualComments';
import { Tasks } from './views/Tasks';

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
        meta: {
          name: 'todos'
        }
      },
      {
        path: "/comments",
        component: Comments,
        exact: true,
        meta: {
          name: 'comments'
        }
      },
      {
        path: "/comments/:id",
        component: IndividualComments,
      },
      {
        path: "/todos/:id",
        component: IndividualComments
      },
      {
        path: "/tasks",
        component: Tasks
      }
    ]
  },
]