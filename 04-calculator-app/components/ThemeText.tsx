import { globalStyles } from '@/styles/global-styles';
import { View, Text, type TextProps } from 'react-native'

interface ThemeTextProps extends TextProps {
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant = 'h1', ...rest }: ThemeTextProps) => {
    return (
        <Text 
            { ...rest }
            style={[
                { color: 'white' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult,
            ]} 
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            { children }
        </Text>
    )
}

export default ThemeText