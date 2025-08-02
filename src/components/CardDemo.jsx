import {Card, CardContent, CardActions, Typography, Button} from "@mui/material";

export default function CardDemo() {
    return (
        <div className="flex gap-4">
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        MUI Card
                    </Typography>
                    <Typography variant="body2">
                        This is a simple Material UI Card component. You can use it to display content like products,
                        articles, etc.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button size="small">Action</Button>
                </CardActions>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        MUI Card
                    </Typography>
                    <Typography variant="body2">
                        This is a simple Material UI Card component. You can use it to display content like products,
                        articles, etc.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button size="small">Action</Button>
                </CardActions>
            </Card>
        </div>
    );
}
