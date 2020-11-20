import AdsListView from "../views/AdsListView";
import AdDetail from "../views/AdDetail";
import MgrView from "../views/MgrView";
import UserProfile from "../views/UserProfile";
import MgrAdsView from "../views/MgrAdsView";
import MgrAdDetail from "../views/MgrAdDetail";
import AdCreate from "../views/AdCreate";
import DataPickerModal from "../views/Modals/DatePickerModal";
import TimePickerModal from "../views/Modals/TimePickerModal";
import CategorySelectModal from "../views/Modals/CategorySelectModal";


export const routes = {
  '/ads-list': {
    component: AdsListView
  },
  '/ad-detail': {
    component: AdDetail
  },
  '/mgr-page': {
    component: MgrView
  },
  '/mgr-my-ads': {
    component: MgrAdsView
  },
  '/mgr-my-ads/ad-detail': {
    component: MgrAdDetail
  },
  '/mgr-my-ads/ad-create': {
    component: AdCreate
  },
  '/mgr-my-ads/date-modal': {
    component: DataPickerModal
  },
  '/mgr-my-ads/time-modal': {
    component: TimePickerModal
  },
  '/mgr-my-ads/event-types-modal': {
    component: CategorySelectModal
  },
  '/profile': {
    component: UserProfile
  }
}