import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Footer() {
    return (
      <div className={styles.footer}>
        오이킨(june4432@icloud.com)
{/*         
        <BottomNavigation>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <BottomNavigationAction label="달력보기" icon={<CalendarMonthIcon />} />
          </Link>
          <Link to="/todo" style={{ textDecoration: "none" }}>
            <BottomNavigationAction label="To-do" icon={<FormatListBulletedIcon />} />
          </Link>
        </BottomNavigation> */}
      </div>
      
    );
  }
  
  export default Footer;
  