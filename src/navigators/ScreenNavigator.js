import { createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import IntroScreen from '../screens/Intro';
import DetailScreen from '../screens/Detail';

import HomeContainer from '../containers/HomeContainer';
import AkunContainer from '../containers/AkunContainer'
import ExploreContainer from '../containers/ExploreContainer';
import OrderContainer from '../containers/OrderContainer';
import WishListContainer from '../containers/WishListContainer';

import PoinRewardScreen from '../screens/akun/PoinReward';
import VoucherScreen from '../screens/akun/VoucherContainer';
import PusatBantuanScreen from '../screens/akun/PusatBantuan';

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

AppTabNavigator.navigationOptions={
    header:null
};

const screenNavigator = createStackNavigator({
    Login: LoginScreen,
    Intro: IntroScreen,
    Main: AppTabNavigator,
    Detail: DetailScreen,
    Register: RegisterScreen,
    Voucher: VoucherScreen,
    PoinReward: PoinRewardScreen,
    PusatBantuan: PusatBantuanScreen
  
}, 
{
    initialRouteName: 'Intro'
}
);

export default createAppContainer(screenNavigator);