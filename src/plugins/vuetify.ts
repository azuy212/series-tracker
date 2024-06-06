/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    'background': '#FFFFFF',
    'surface': '#FFFFFF',
    'primary': '#4CAF50', // Green
    'primary-darken-1': '#388E3C', // Darker Green
    'secondary': '#8BC34A', // Light Green
    'secondary-darken-1': '#689F38', // Darker Light Green
    'error': '#B00020', // Red for errors
    'info': '#2196F3', // Blue for info
    'success': '#4CAF50', // Green for success (same as primary)
    'warning': '#FB8C00', // Orange for warnings
  },
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    'background': '#121212',
    'surface': '#1E1E1E',
    'primary': '#81C784', // Light Green
    'primary-darken-1': '#66BB6A', // Slightly Darker Green
    'secondary': '#A5D6A7', // Very Light Green
    'secondary-darken-1': '#81C784', // Same as primary
    'error': '#CF6679', // Light Red for errors
    'info': '#64B5F6', // Blue for info
    'success': '#81C784', // Light Green for success (same as primary)
    'warning': '#FFB74D', // Light Orange for warnings
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: myCustomLightTheme,
      dark: myCustomDarkTheme,
    },
  },
})
