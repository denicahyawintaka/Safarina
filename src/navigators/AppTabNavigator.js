import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeContainer from '../containers/HomeContainer';
import AkunContainer from '../containers/AkunContainer'
import ExploreContainer from '../containers/ExploreContainer';
import OrderContainer from '../containers/OrderContainer';
import WishListContainer from '../containers/WishListContainer';
import VoucherSccreen from '../screens/akun/VoucherContainer';

import colors from '../styles/colors';

const AppTabNavigator = createBottomTabNavigator({
    HomeContainer: {screen: HomeContainer},
    ExploreContainer: {screen: ExploreContainer},
    WishListContainer: {screen: WishListContainer},
    OrderContainer: {screen: OrderContainer},
    AkunContainer: {screen: AkunContainer},
   
}, {
    tabBarOptions: {
     activeTintColor: colors.primary,
     marginBottom: 90,
    },
 
});

export default createAppContainer(AppTabNavigator);