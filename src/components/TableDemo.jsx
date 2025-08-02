import {useState} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Button,
    TableHead,
    TableRow,
    Paper,
    Drawer,
    Stack,
    Box,
    TextField,
    Divider,
    Typography,
    MenuItem,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const rows = [
    {id: 1, name: "Sonagra Mitesh Rajeshbhai", age: 28, role: "Developer"},
    {id: 2, name: "Patel Jay", age: 24, role: "Designer"},
    {id: 3, name: "Patel Kirtan", age: 32, role: "Manager"},
];

export default function TableDemo() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({name: "", age: "", role: "DEVELOPER"});

    const currencies = [
        {
            value: "DEVELOPER",
            label: "Developer",
        },
        {
            value: "DESIGN",
            label: "Design",
        },
        {
            value: "MANAGER",
            label: "Manager",
        },
    ];

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const DrawerList = (
        <Box component="form" onSubmit={handleSubmit} sx={{width: 450}} role="presentation">
            <div className="p-2 flex justify-between">
                <Typography sx={{display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "600"}}>
                    Edit Form
                </Typography>
                <IconButton
                    sx={{
                        borderRadius: "30px",
                        padding: 1,
                        backgroundColor: "#bfb8b8",
                        "&:hover": {
                            backgroundColor: "#e0e0e0",
                        },
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon />
                </IconButton>
            </div>
            <Divider />
            <div className="p-4">
                <Divider />
                <Stack spacing={1.5}>
                    <TextField
                        label="Name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField label="Age" name="age" type="text" value={form.age} onChange={handleChange} />
                    <TextField
                        name="role"
                        select
                        label="Select"
                        value={form.role}
                        onChange={handleChange}
                        helperText="Please select your role"
                        variant="outlined"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </Stack>
            </div>
        </Box>
    );

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{backgroundColor: "#e5e7eb"}}>
                    <TableRow>
                        <TableCell sx={{fontWeight: 700}}>Name</TableCell>
                        <TableCell align="center" sx={{fontWeight: 700}}>
                            Age
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight: 700}}>
                            Role
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight: 700}}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="center">{row.age}</TableCell>
                            <TableCell align="center">{row.role}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<EditIcon />}
                                    sx={{marginRight: "10px"}}
                                    onClick={toggleDrawer(true)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<DeleteIcon />}
                                    sx={{color: "#f33322", borderColor: "#f33322"}}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </TableContainer>
    );
}
