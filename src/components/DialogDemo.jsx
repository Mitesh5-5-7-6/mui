import {useState} from "react";
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from "@mui/material";

export default function DialogDemo() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="contained" onClick={() => setOpen(!open)}>
                Open Dialog
            </Button>
            <Dialog open={open} onClose={() => setOpen(!open)}>
                <DialogTitle>Simple Dialog</DialogTitle>
                <DialogContent>
                    <Typography>This is a Material UI dialog. You can place any content here.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={() => setOpen(false)}
                        sx={{
                            color: "#fffff",
                            backgroundColor: "#f33322",
                            borderColor: "#f33322",
                            paddingX: "50px",
                            "&:hover": {
                                borderColor: "#992a05",
                                color: "#f5e6e6",
                                backgroundColor: "#8c2503",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
