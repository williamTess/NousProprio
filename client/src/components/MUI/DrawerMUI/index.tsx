import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { headerTabs } from "../../../constant";
import Nav from "../../Nav";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function DrawerMUI() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {headerTabs.map((tab) => (
          <Nav
            to={tab.to}
            element={
              <ListItem key={tab.label} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.label} />
                </ListItemButton>
              </ListItem>
            }
          />
        ))}
      </List>
      <Divider />
      <Nav
        to={"/profile"}
        element={
          <ListItem key={"connexion"} disablePadding>
            {currentUser ? (
              <ListItemButton>
                <ListItemIcon>
                  <InsertEmoticonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <span className="font-semibold">
                      {currentUser.username.length > 15
                        ? currentUser.username.substring(0, 15) + "..."
                        : currentUser.username}
                    </span>
                  }
                />
              </ListItemButton>
            ) : (
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Connexion"} />
              </ListItemButton>
            )}
          </ListItem>
        }
      />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" htmlColor="black" />
        </Button>
        <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
