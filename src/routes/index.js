import AdsListView from "../components/views/AdsListView";
import AdDetail from "../components/views/AdDetail";
import AdsMgrList from "../components/views/AdsMgrList";
import UserProfile from "../components/views/UserProfile";


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