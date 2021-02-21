import { render } from "@testing-library/react";
import produce from "immer";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers, { appInitialState } from "../state/reducer";
import { AppStateTypeForTests } from "../state/state.type";

export function clearMocksAfterTests() {
  afterEach(() => {
    jest.resetAllMocks();
  });
}

export function renderWithProviders(
  ui: ReactElement,
  initialState: Partial<AppStateTypeForTests> = {},
  ...renderOptions: any
) {
  const state = produce(appInitialState, () => ({
    ...appInitialState,
    ...initialState,
  }));
  const store = createStore(reducers, state, applyMiddleware(thunk));
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export function renderWithProvidersWithoutRouter(
  ui: ReactElement,
  initialState: Partial<AppStateTypeForTests> = {},
  ...renderOptions: any
) {
  const state = produce(appInitialState, () => ({
    ...appInitialState,
    ...initialState,
  }));
  const store = createStore(reducers, state, applyMiddleware(thunk));
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
