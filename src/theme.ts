import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
            warning: string;
        },
        mainColors: {
            orange: string,
            blue: string,
            white: string,
            gray: string,
            black: string
        };
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
            warning?: string;
        },
        mainColors?: {
            orange?: string,
            blue?: string,
            white?: string,
            gray?: string,
            black?: string,
            darkGray?: string,
            blueOrchid?: string
        };
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        secondaryOutlined: true;
        green: true;
        red: true;
        default: true;
        outlinedOrange: true;
    }
}

export default createTheme({
    mainColors: {
        orange: '#F36B32',
        blue: '#20374F',
        white: '#FFFFFF',
        gray: '#636F7E',
        black: '#000000',
        darkGray: '#526981',
        blueOrchid: '#2F80ED'
    },
    status: {
        danger: red[500],
        warning: '#F36B32'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '48px',
                    minWidth: 'unset',
                    borderRadius: 8,
                    width: '100%',
                    textTransform: 'initial',
                    fontWeight: 700,
                    fontSize: '14px',

                    '&.Mui-disabled': {
                        color: 'rgba(0, 0, 0, 0.26)',
                        background: '#c7c7c747',
                        border: 'none'
                    }
                }
            },
            variants: [
                {
                    props: {
                        variant: 'primary'
                    },
                    style: {
                        background: '#F36B32',
                        color: 'white',
                        border: '1px solid #F36B32',

                        '&:hover': {
                            color: '#F36B32'
                        }
                    },
                },
                {
                    props: {
                        variant: 'secondary',
                    },
                    style: {
                        background: '#495B71',
                        color: 'white',
                        border: '1px solid #495B71'
                    },
                },
                {
                    props: {
                        variant: 'secondaryOutlined',
                    },
                    style: {
                        background: 'transparent',
                        color: '#495B71',
                        border: '1px solid #495B71'
                    },
                },
                {
                    props: {
                        variant: 'green',
                    },
                    style: {
                        background: '#20B59A',
                        color: 'white',
                        border: '1px solid #20B59A',

                        '&:hover': {
                            backgroundColor: '#20b59a3d',
                            color: '#20B59A'
                        }
                    },
                },
                {
                    props: {
                        variant: 'red',
                    },
                    style: {
                        background: '#EA4235',
                        color: 'white',
                        border: '1px solid #EA4235',

                        '&:hover': {
                            backgroundColor: '#ea42352e',
                            color: '#EA4235'
                        }
                    },
                },
                {
                    props: {
                        variant: 'outlinedOrange',
                    },
                    style: {
                        background: 'transparent',
                        color: '#F36B32',
                        border: '1px solid #F36B32',

                        '&.Mui-disabled': {
                            background: '#ffa50000',
                            border: '1px solid #d7d7d761',
                            color: '#ffffff5c'
                        },

                        '&:hover': {
                            backgroundColor: '#ffffff14',
                            color: 'white',
                            border: '1px solid #ffffff14'
                        }
                    },
                },
                {
                    props: {
                        variant: 'outlined',
                    },
                    style: {
                        background: 'transparent',
                        color: 'white',
                        border: '1px solid #FFF',

                        '&.Mui-disabled': {
                            background: '#ffa50000',
                            border: '1px solid #d7d7d761',
                            color: '#ffffff5c'
                        },

                        '&:hover': {
                            backgroundColor: '#ffffff14',
                            color: 'white',
                            border: '1px solid #ffffff14'
                        }
                    },
                },
                {
                    props: {
                        variant: 'default',
                    },
                    style: {
                        background: 'transparent',
                        color: '#F36B32',
                        border: '1px solid #F36B32'
                    },
                },
            ],
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '48px',
                    background: '#ffffff',
                    border: '1px solid #f2f2f2',
                    boxSizing: 'border-box',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#636f7e',
                    padding: '0 14px',
                    textTransform: 'initial',

                    '&.Mui-disabled': {
                        background: '#afacac3b',
                        border: 'none'
                    }
                },
            },
        }
    },
    breakpoints: {
        values: {
            xs: 320,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});