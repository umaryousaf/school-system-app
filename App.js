import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import colors from './config/colors'
import StudentLogin from './screens/StudentLogin'
import AdminLogin from './screens/AdminLogin'
import CompanyDetailScreen from './screens/CompanyDetailScreen'
import CompanyLogin from './screens/CompanyLogin'
import CompanyDataScreen from './screens/CompanyDataScreen'
import StudentDataScreen from './screens/StudentDataScreen'
import StudentDetailScreen from './screens/StudentDetailScreen'
import AddSchoolScreen from './screens/AddSchoolScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
      
        <Stack.Screen 
          name="Student_Login" 
          component={StudentLogin} 
          options={{
            title: 'Student Login',
            headerStyle: {
              backgroundColor:colors.blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

        <Stack.Screen 
          name="Admin_Login" 
          component={AdminLogin} options={{
            title: 'Admin Login',
            headerStyle: {
              backgroundColor:colors.blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

          <Stack.Screen 
            name="company_login" 
            component={CompanyLogin} 
            options={{
              title: 'Company Login',
              headerStyle: {
                backgroundColor:colors.blue,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '200',
              },  
            }}
          />

         <Stack.Screen 
          name="company_detail" 
          component={CompanyDetailScreen} 
          options={{
            title: 'Company Detail Page',
            headerStyle: {
              backgroundColor:colors.blue,
            }, 
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

        <Stack.Screen 
          name="company_data" 
          component={CompanyDataScreen} 
          options={{
            title: "Company Data",
            headerStyle: {
              backgroundColor:colors.blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        />

          <Stack.Screen 
              name="student_data" 
              component={StudentDataScreen} 
              options={{
              title: "All Students Data",
              headerStyle: {
                backgroundColor:colors.blue,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '200',
              },
            }}
          />

        <Stack.Screen 
          name="Student_detail" 
          component={StudentDetailScreen} 
          options={{
            title: "Student Details",
            headerStyle: {
              backgroundColor:colors.blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        /> 

        <Stack.Screen 
          name="add_school" 
          component={AddSchoolScreen} 
          options={{
            title: "Add School",
            headerStyle: {
              backgroundColor:colors.blue,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
            },
          }}
        /> 

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


