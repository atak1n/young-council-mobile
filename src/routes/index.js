import AdsListView from "../views/AdsListView";
import AdsMgrList from "../views/AdsMgrList";
import UserProfile from "../views/UserProfile";

export const routes = {
  '/adsList': {
    component: AdsListView
  },
  '/adsmgrlist': {
    component: AdsMgrList
  },
  '/profile': {
    component: UserProfile
  }
}