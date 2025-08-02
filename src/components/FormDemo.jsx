import {Box, TextField, Button, Stack} from "@mui/material";
import {useState} from "react";

export default function FormDemo() {
    const [form, setForm] = useState({name: "", email: ""});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{p: 2, maxWidth: 400}}>
            <Stack spacing={2}>
                <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                />
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}
