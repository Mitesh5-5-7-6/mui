import {useMemo, useState} from "react";
import {ThemeProvider, CssBaseline, Button} from "@mui/material";
import {createTheme} from "@mui/material/styles";
// import ButtonsDemo from "./components/ButtonsDemo";
// import TableDemo from "./components/TableDemo";
// import CardDemo from "./components/CardDemo";
// import DialogDemo from "./components/DialogDemo";
// import FormDemo from "./components/FormDemo";
import {TabsDemo} from "./components/index";
// import AccordionDemo from "./components/AccordionDemo";

function App() {
    // const [mode, setMode] = useState("light");

    // const theme = useMemo(
    //     () =>
    //         createTheme({
    //             palette: {
    //                 mode,
    //             },
    //         }),
    //     [mode]
    // );

    return (
        <div className="p-4 flex flex-col gap-4">
            {/* <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="p-4">
                    <Button
                        variant="contained"
                        onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
                    >
                        Toggle {mode === "light" ? "Dark" : "Light"} Mode
                    </Button>
                    <div style={{marginTop: 20}}>
                        <ButtonsDemo />
                    </div>
                </div>
            </ThemeProvider> */}
            {/* <ButtonsDemo /> */}
            {/* <TableDemo /> */}
            {/* <CardDemo /> */}
            {/* <DialogDemo /> */}
            {/* <FormDemo /> */}
            <TabsDemo />
            {/* <AccordionDemo /> */}
        </div>
    );
}

export default App;
