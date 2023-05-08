import { useContext } from "react"
import { Box, ButtonBase, Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material"
import { InboxOutlined, MailOutlined } from "@mui/icons-material"
import { UIContext } from "@/context/ui"

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draft']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext( UIContext )

  return (
    <Drawer
      anchor="left"
      open={ sidemenuOpen }
      onClose={ closeSideMenu }
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem key={ text }>
                <ButtonBase>
                  { index % 2 ? <InboxOutlined /> :  <MailOutlined /> }
                  <ListItemText primary={ text } />
                </ButtonBase>
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem key={ text }>
                <ButtonBase>
                  { index % 2 ? <InboxOutlined /> :  <MailOutlined /> }
                  <ListItemText primary={ text } />
                </ButtonBase>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}
