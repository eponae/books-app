import React from "react";
import AppContent from "./AppContent";
import AppLayout from "./AppLayout";
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
