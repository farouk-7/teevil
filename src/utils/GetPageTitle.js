import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";

export const getPageTitle = (pathname) => {
  switch (pathname) {
    case AUTHENTICATED_ROUTES.market:
      return "Market Place";

    case AUTHENTICATED_ROUTES.event:
      return "Event";

     case AUTHENTICATED_ROUTES.wallet:
      return "Wallet";

    case AUTHENTICATED_ROUTES.setting:
      return "Setting";

    case AUTHENTICATED_ROUTES.orders:
      return "Orders";

    case AUTHENTICATED_ROUTES.profile:
      return "Profile";

    case AUTHENTICATED_ROUTES.settings:
      return "Settings";

    case AUTHENTICATED_ROUTES.event_management_aso_ebi:
      return "Aso-Ebi";
    case AUTHENTICATED_ROUTES.floor_plan:
      return "Table Management";
    case AUTHENTICATED_ROUTES.invitation:
      return "Manage Invitation";
    case AUTHENTICATED_ROUTES.vendor_management:
      return "Manage Vendors";

    default:
      return "Details";
  }
};
