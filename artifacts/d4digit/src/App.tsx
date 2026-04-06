import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Tools from "@/pages/Tools";
import BlogPage from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import Templates from "@/pages/Templates";
import Pricing from "@/pages/Pricing";
import Changelog from "@/pages/Changelog";
import Documentation from "@/pages/Documentation";
import Guides from "@/pages/Guides";
import Help from "@/pages/Help";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tools" component={Tools} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={Contact} />
        {/* Legal pages — canonical + short aliases */}
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms-of-service" component={Terms} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookie-policy" component={Cookies} />
        <Route path="/cookies" component={Cookies} />
        {/* Product pages */}
        <Route path="/templates" component={Templates} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/changelog" component={Changelog} />
        {/* Resource pages */}
        <Route path="/documentation" component={Documentation} />
        <Route path="/guides" component={Guides} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
