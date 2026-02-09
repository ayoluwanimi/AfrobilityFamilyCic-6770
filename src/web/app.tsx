import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Donate from "./pages/donate";
import Booking from "./pages/booking";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import PrivacyPolicy from "./pages/privacy";
import TermsOfService from "./pages/terms";
import AdminDashboard from "./pages/admin/dashboard";
import DonationTracker from "./pages/admin/donations";
import FinancialSummary from "./pages/admin/finance";
import BookingManagement from "./pages/admin/bookings";
import ContentCMS from "./pages/admin/cms";
import UserManagement from "./pages/admin/users";
import { Provider } from "./components/provider";

function App() {
        return (
                <Provider>
                        <Switch>
                                <Route path="/" component={Index} />
                                <Route path="/donate" component={Donate} />
                                <Route path="/booking" component={Booking} />
                                <Route path="/sign-in" component={SignIn} />
                                <Route path="/sign-up" component={SignUp} />
                                <Route path="/privacy" component={PrivacyPolicy} />
                                <Route path="/terms" component={TermsOfService} />
                                <Route path="/admin" component={AdminDashboard} />
                                <Route path="/admin/donations" component={DonationTracker} />
                                <Route path="/admin/finance" component={FinancialSummary} />
                                <Route path="/admin/bookings" component={BookingManagement} />
                                <Route path="/admin/cms" component={ContentCMS} />
                                <Route path="/admin/users" component={UserManagement} />
                        </Switch>
                </Provider>
        );
}

export default App;
