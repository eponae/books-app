import React from "react";
import AppContent from "./content/AppContent";
import AppLayout from "./layout/AppLayout";
import AppProviders from "./AppProviders";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <AppContent />
      </AppLayout>
    </AppProviders>
  );
}

export default App;
