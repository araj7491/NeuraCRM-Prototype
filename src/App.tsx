import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrmLayout from "./components/layout/CrmLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Sales from "./pages/Sales";
import Marketing from "./pages/Marketing";
import Accounts from "./pages/Accounts";
import AccountDetail from "./pages/AccountDetail";
import Settings from "./pages/Settings";
import Workflow from "./pages/Workflow";
import Intake from "./pages/workflow/Intake";
import Assessment from "./pages/workflow/Assessment";
import Repair from "./pages/workflow/Repair";
import Returns from "./pages/workflow/Returns";
import Warehouse from "./pages/workflow/Warehouse";
import Recycling from "./pages/workflow/Recycling";
import Contacts from "./pages/Contacts";
import ContactDetail from "./pages/ContactDetail";
import Deals from "./pages/Deals";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import Pipelines from "./pages/Pipelines";
import Reports from "./pages/Reports";
import Email from "./pages/Email";
import Chat from "./pages/Chat";
import VoIP from "./pages/VoIP";
import Automation from "./pages/Automation";
import { LeadsProvider } from "./context/LeadsContext";
import { AccountsProvider } from "./context/AccountsContext";
import { ContactsProvider } from "./context/ContactsContext";
import Pricing from "./pages/Pricing";
import Opportunities from "./pages/Opportunities";
import OpportunityDetail from "./pages/OpportunityDetail";
import { OpportunitiesProvider } from "./context/OpportunitiesContext";
import { OrdersProvider } from "./context/OrdersContext";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AccountsProvider>
        <ContactsProvider>
          <LeadsProvider>
            <OpportunitiesProvider>
              <OrdersProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<ProtectedRoute><CrmLayout /></ProtectedRoute>}>
                      <Route path="/dashboard" element={<Index />} />
                      <Route path="/sales" element={<Sales />} />
                      <Route path="/marketing" element={<Marketing />} />
                      <Route path="/accounts" element={<Accounts />} />
                      <Route path="/accounts/:accountId" element={<AccountDetail />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/workflow" element={<Workflow />} />
                      <Route path="/workflow/intake" element={<Intake />} />
                      <Route path="/workflow/assessment" element={<Assessment />} />
                      <Route path="/workflow/repair" element={<Repair />} />
                      <Route path="/workflow/returns" element={<Returns />} />
                      <Route path="/workflow/warehouse" element={<Warehouse />} />
                      <Route path="/workflow/recycling" element={<Recycling />} />
                      <Route path="/contacts" element={<Contacts selectedLead={null} onContactClick={() => {}} />} />
                      <Route path="/contacts/:contactId" element={<ContactDetail contactId="" onBack={() => {}} />} />
                      <Route path="/deals" element={<Deals />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/calendar" element={<Analytics />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/leads" element={<Leads />} />
                      <Route path="/tasks" element={<Tasks />} />
                      <Route path="/pipelines" element={<Pipelines />} />
                      <Route path="/email" element={<Email />} />
                      <Route path="/chat" element={<Chat />} />
                      <Route path="/voip" element={<VoIP />} />
                      <Route path="/automation" element={<Automation />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/opportunities" element={<Opportunities />} />
                      <Route path="/opportunities/:opportunityId" element={<OpportunityDetail />} />
                      <Route path="/quotes" element={<Quotes />} />
                      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/orders/:orderId" element={<OrderDetail />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </OrdersProvider>
            </OpportunitiesProvider>
          </LeadsProvider>
        </ContactsProvider>
      </AccountsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
