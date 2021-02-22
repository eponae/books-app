import React from "react";
import AppContent from "./content/AppContent";
import AppLayout from "./layout/AppLayout";
import AppProviders from "./AppProviders";
import ErrorHandler from "../domain/error/ErrorHandler";

function App() {
  return (
    <AppProviders>
      <AppLayout>
        <ErrorHandler>
          <AppContent />
        </ErrorHandler>
      </AppLayout>
    </AppProviders>
  );
}

export default App;
