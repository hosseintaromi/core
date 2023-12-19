# Core

core project of a front-end team for navigations in react applications.

## Installation

Install core with npm

```bash
  npm i @hosseintaromi/core
  cd core
```

## Usage/Examples

```javascript
import "./App.css";
import { MasterTabContainer, openView } from "@hosseintaromi/core";
import { useEffect } from "react";
import Text from "./Text";

function App() {
	useEffect(() => {
		openView({
			type: "MasterTab",
			component: Text,
		});
	}, []);

	return (
		<div className="App">
			<MasterTabContainer />
		</div>
	);
}

export default App;
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, please create an issue.

## Authors

-   [github/ReihanehSadatShokouhi](https://github.com/sr-ssh)
-   [github/HosseinTaromi](https://github.com/hosseintaromi)
