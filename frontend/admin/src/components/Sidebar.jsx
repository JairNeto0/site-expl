import { NavLink } from "react-router-dom";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Produtos",
    path: "/products",
    icon: <InventoryIcon />,
  },
  {
    name: "Pedidos",
    path: "/orders",
    icon: <ShoppingCartIcon />,
  },
  {
    name: "Clientes",
    path: "/customers",
    icon: <PeopleIcon />,
  },
  {
    name: "Funcionários",
    path: "/employees",
    icon: <BadgeIcon />,
  },
  {
    name: "Relatórios",
    path: "/reports",
    icon: <AssessmentIcon />,
  },
  {
    name: "Configurações",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

const drawerWidth = 260;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
          backgroundColor: "#1e293b",
          color: "#fff",
          px: 2,
          py: 3,
        },
      }}
    >
      <Box component="header" sx={{ px: 2, mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Admin EXPL
        </Typography>
      </Box>

      <List component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            end={item.path === "/"}
            sx={{
              minHeight: 48,
              borderRadius: 2,
              color: "#fff",
              "& .MuiListItemIcon-root": {
                minWidth: 40,
                color: "inherit",
              },
              "&:hover": {
                backgroundColor: "rgba(37, 99, 235, 0.25)",
              },
              "&.active": {
                backgroundColor: "#2563eb",
                "&:hover": {
                  backgroundColor: "#2563eb",
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
