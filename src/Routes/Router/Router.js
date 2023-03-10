import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Admin from "../../Page/Admin/Admin";
import Blog from "../../Page/Blog/Blog";
import AddClient from "../../Page/Dashboard/AddClient/AddClient";
import ClientDetails from "../../Page/Dashboard/Clients/ClientDetails/ClientDetails";
import Clients from "../../Page/Dashboard/Clients/Clients/Clients";
import AllEmployees from "../../Page/Dashboard/Employees/AllEmployees/AllEmployees";
import EmployeeProfile from "../../Page/Dashboard/Profile/EmployeesProfile";
import EmployeeSalary from "../../Page/Dashboard/Payroll/EmployeeSalary/EmployeeSalary";
import Leads from "../../Page/Dashboard/Leads/Leads";
import BankAndStatutory from "../../Page/Dashboard/Profile/BankAndStatutory/BankAndStatutory";
import ClientProfile from "../../Page/Dashboard/Profile/ClientProfile";
import ClientTask from "../../Page/Dashboard/Profile/ClientTask";
import EmployeesProfile from "../../Page/Dashboard/Profile/EmployeesProfile";
import PersonalInfo from "../../Page/Dashboard/Profile/PersonalInfo/PersonalInfo";
import Projects from "../../Page/Dashboard/Profile/Projects";
import AllProjects from "../../Page/Dashboard/Projects/AllProjects";
import ProjectDetails from "../../Page/Dashboard/Projects/ProjectDetails/ProjectDetails";
import Promotion from "../../Page/Dashboard/Promotion/Promotion";
import Reports from "../../Page/Dashboard/Reports/Reports";
import Employees from "../../Page/Employees/Employees";
import Trainer from "../../Page/Dashboard/Training/Trainer";
import Training from "../../Page/Dashboard/Training/Training";
import TrainingType from "../../Page/Dashboard/Training/TrainingType";
import Home from "../../Page/Home/Home/Home";
import SignIn from "../../Page/SignIn/SignIn";
import SignUp from "../../Page/SignUp/SignUp";
import TaskLayout from "../../Layout/TaskLayout";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import DashboardClients from "../../Page/DashboardClients/DashboardClients";
import MainTask from "../../Page/Dashboard/Tasks/MainTask/MainTask";
import AllTasks from "../../Page/Dashboard/Tasks/AllTasks/AllTasks";
import AllTeams from "../../Page/Dashboard/Employees/Teams/AllTeams/AllTeams";
import MyTeams from "../../Page/Dashboard/MyTeams/MyTeams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children: [
      {
        path: "/dashboard/dashboardEmployees",
        element: <Employees></Employees>
      },
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>
      },
      {
        path: "/dashboard/client",
        element: <DashboardClients></DashboardClients>
      },
      {
        path: "/dashboard/all-employees",
        element: <AllEmployees />
      },

      {
        path: "/dashboard/employees/:id",
        element: <EmployeeProfile />
      },

      {
        path: '/dashboard/clientDetails/:_id',
        element: <ClientDetails></ClientDetails>,
        loader: ({ params }) => fetch(`https://perform-tracker-server.vercel.app/clients/${params._id}`)
      },

      {
        path: "/dashboard/all-clients",
        element: <Clients></Clients>,
        loader: () => fetch('https://perform-tracker-server.vercel.app/clients')
      },
      {
        path: "/dashboard/addclient",
        element: <AddClient></AddClient>
      },
      {
        path: "/dashboard/clientDetails",
        element: <ClientDetails></ClientDetails>,
        loader: () => fetch('https://perform-tracker-server.vercel.app/clients')
      }
      , {
        path: "/dashboard/reports",
        element: <Reports></Reports>
      },
      {
        path: "/dashboard/promotion",
        element: <Promotion></Promotion>
      },
      {
        path: "/dashboard/salary",
        element: <EmployeeSalary />
      },
      {
        path: "/dashboard/training",
        element: <Training />
      },
      {
        path: "/dashboard/trainers",
        element: <Trainer />
      },
      {
        path: "/dashboard/trainingtype",
        element: <TrainingType />
      },
      {
        path: "/dashboard/all-teams",
        element: <AllTeams />
      },
      {
        path: "/dashboard/myTeam",
        element: <MyTeams />
      },
      {
        path: "/dashboard/profile/employees",
        element: <EmployeesProfile></EmployeesProfile>,
        children: [
          {
            path: "/dashboard/profile/employees",
            element: <PersonalInfo></PersonalInfo>
          },
          {
            path: "/dashboard/profile/employees/projects",
            element: <Projects></Projects>
          },
          {
            path: "/dashboard/profile/employees/bank",
            element: <BankAndStatutory></BankAndStatutory>
          }
        ]
      },
      {
        path: "/dashboard/profile/client",
        element: <ClientProfile></ClientProfile>,
        children: [
          {
            path: "/dashboard/profile/client",
            element: <Projects></Projects>
          },
          {
            path: "/dashboard/profile/client/task",
            element: <ClientTask></ClientTask>
          }
        ]
      },
      {
        path: "/dashboard/leads",
        element: <Leads></Leads>
      },
      {
        path: "/dashboard/projects",
        element: <AllProjects></AllProjects>
      },
      {
        path: "/dashboard/projects/:id",
        element: <ProjectDetails></ProjectDetails>
      }
    ]
  },
  {
    path: '/dashboard/tasks',
    element: <TaskLayout></TaskLayout>,
    children: [
      {
        path: "/dashboard/tasks/all-tasks",
        element: <AllTasks></AllTasks>
      },
      {
        path: "/dashboard/tasks/project/:id",
        element: <MainTask></MainTask>
      },
    ]
  }
]);

export default router;