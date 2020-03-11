import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

// drawer navigation options 
// create drawer navigation
//  and add two stacks
const RootDrawerNavigator = createDrawerNavigator({
  
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
 
},
{
drawerWidth: 300,
    drawerPosition: 'right'
});

export default createAppContainer(RootDrawerNavigator);