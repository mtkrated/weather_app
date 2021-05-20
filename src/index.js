import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./Components/App/App";

const queryClient = new QueryClient();
ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>,
	document.getElementById("root")
);
