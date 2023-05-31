import { Suspense, lazy } from "react";
import { Route } from "wouter";

function App() {
  const TopStoriesPage = lazy(() => import("./pages/TopStories"));
  const DetailsPage = lazy(() => import("./pages/Details"));
  return (
    <>
      <main>
        <Suspense>
          <Route path="/" component={TopStoriesPage} />
          <Route path="/details" component={DetailsPage} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
