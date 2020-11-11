import AdsListView from "../views/AdsListView";
import AdDetail from "../views/AdDetail";
import AdsMgrList from "../views/AdsMgrList";
import UserProfile from "../views/UserProfile";


export const routes = {
  '/ads-list': {
    component: AdsListView
  },
  '/ad-detail': {
    component: AdDetail
  },
  '/ads-mgr-list': {
    component: AdsMgrList
  },
  '/profile': {
    component: UserProfile
  }
}