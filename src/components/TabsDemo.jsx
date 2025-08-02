import {useState} from "react";
import {Tabs, Tab, Box, Typography} from "@mui/material";
import ButtonsDemo from "./ButtonsDemo";
import TableDemo from "./TableDemo";
import CardDemo from "./CardDemo";
import DialogDemo from "./DialogDemo";
import FormDemo from "./FormDemo";
import AccordionDemo from "./AccordionDemo";

function TabPanel({children, value, index}) {
    return (
        value === index && (
            <Box sx={{p: 2}}>
                <Typography>{children}</Typography>
            </Box>
        )
    );
}

export default function TabsDemo() {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => setValue(newValue);

    return (
        <Box sx={{width: "100%", mt: 3}}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Button" />
                <Tab label="Table" />
                <Tab label="Card" />
                <Tab label="Dialog" />
                <Tab label="Form" />
                <Tab label="Accordion" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ButtonsDemo />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TableDemo />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CardDemo />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DialogDemo />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <FormDemo />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <AccordionDemo />
            </TabPanel>
        </Box>
    );
}
