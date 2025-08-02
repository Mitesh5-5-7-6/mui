import {Button, Stack} from "@mui/material";

export default function ButtonsDemo() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
        </Stack>
    );
}
