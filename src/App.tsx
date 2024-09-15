import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import Routers from "./routes";
import { ConfigProvider } from "antd";
import { useLocalization } from "./store/LocalizationZustand";
import locale_Th from "antd/locale/th_TH";
import locale_En from "antd/locale/en_US";

function App() {
  const { locale } = useLocalization();
  // const fontFamily = "Noto Sans Thai";
  return (
    <>
      <ConfigProvider
        locale={locale === "th" ? locale_Th : locale_En}
        theme={{
          token: {
            // fontFamily: fontFamily,
          },
          components: {},
        }}
      >
        <ErrorBoundary>
          <Routers />
        </ErrorBoundary>
      </ConfigProvider>
    </>
  );
}

export default App;
