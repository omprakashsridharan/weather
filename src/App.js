import logo from "./logo.svg";
import "./App.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

function App() {
	return (
		<div className="App">
			<div
				style={{
					marginBottom: "10px",
					width: "700px",
					display: "flex",
				}}>
				<TextField
					id="outlined-basic"
					label="City name"
					variant="outlined"
					style={{ flex: 1, marginRight: "15px" }}
				/>
				<Button variant="contained">Fetch</Button>
			</div>
			<Card
				style={{
					height: "700px",
					width: "700px",
					borderRadius: 0,
					display: "flex",
					flexDirection: "column",
				}}
				elevation={5}>
				<CardHeader
					avatar={
						<Avatar aria-label="recipe">
							R
						</Avatar>
					}
					title="City"
					subheader="September 14, 2016"
				/>
				<CardContent style={{ flex: 1 }}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p">
						Show details here
					</Typography>
				</CardContent>
				<CardActions
					style={{
						display: "flex",
						justifyContent: "center",
					}}
					disableSpacing>
					<Button variant="contained">
						Refresh
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default App;
