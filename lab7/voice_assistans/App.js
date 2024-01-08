import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список действий' component={ShopScreen} />
                    <Stack.Screen name='Страница подробнее' component={DetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}