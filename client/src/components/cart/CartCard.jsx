import { Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const CartCard = ({ item, changeCount, removeItem }) => {
    return (
        <Box sx={{ display: "flex", fontFamily: "Arial, Helvetica, sans-serif", paddingBottom: "20px" }}>
            <div style={{ flex: "1" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>{item.name}</h3>
                    <div style={{margin: "15px 5px 0px 0px"}}><IconButton onClick={() => removeItem(item.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Price: Rs.{item.price}</p>
                    <p>Total: Rs. {item.price * item.count}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ margin: "0 0 20px 0" }}>Tokens: {item.tokens}</p>
                    <p style={{ margin: "0 0 20px 0" }}>Total Tokens: {item.tokens * item.count > item.maxToken ? item.maxToken : item.tokens * item.count}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button
                        size="large"
                        disableElevation
                        variant="contained"
                        onClick={() => { changeCount(item.id, "decrease") }}
                    >
                        -
                    </Button>
                    <p>{item.count}</p>
                    <Button
                        size="large"
                        disableElevation
                        variant="contained"
                        onClick={() => { changeCount(item.id, "increase") }}
                    >
                        +
                    </Button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Arial, Helvetica, sans-serif" }}>
                    <p>Max earnable tokens: {item.maxToken}</p>
                    <p>One token maps to Rs.{item.mapping}</p>
                </div>
            </div>
            <img src={item.image} style={{ width: "200px", height: "205px", margin: "30px 0 10px 10px" }} alt="Hello" />
        </Box>
    );
};

export default CartCard;
