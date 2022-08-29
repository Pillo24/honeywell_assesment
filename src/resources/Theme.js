const size = {
    mobileXS: '281px',
    mobileS: '321px',
    mobileM: '375px',
    mobile: '500px',
    mobileL: '580px',
    tabletM: '720px',
    tablet: '950px',
    laptop: '1200px',
  };
export const device = {
    mobileXS: `(max-width: ${size.mobileXS})`,
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobile: `(max-width: ${size.mobile})`,
    tabletM: `(max-width: ${size.tablet})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
  };

const color = {
    main: '#F83D7A',
    primary: '#C9A7E4', 
    secondary: '#FBD11B',
    mid: '#F97384',

    primary_light: '#C9A7E4ee',
    mid_light: '#F97384ee',
    transparent: 'rgba(0, 0, 0, 0)',

    white: "#F9FBF2",
    black: "#212121cc",  

    red: '#F3444A',
    green: '#98CA3F',
};

 const bg1 = {
    gradient:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient25:'linear-gradient(90deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(120deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient75:'linear-gradient(180deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(200deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
};

const bg3 = {
    gradient:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient25:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient75:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
};

const bg4 = {
    gradient:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(40deg, var(--main) 0%, var(--main) 50%, var(--mid) 65%, var(--secondary) 100%)',
    gradient25:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(40deg, var(--main) 0%, var(--main) 50%, var(--mid) 65%, var(--secondary) 100%)',
    gradient75:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(40deg, var(--main) 0%, var(--primary) 50%, var(--mid) 65%, var(--secondary) 100%)',
};

export const light = {
    '--main': color.main,
    '--primary': color.primary,
    '--secondary': color.secondary,
    '--mid': color.mid,
    '--primary_light': color.primary_light,
    '--mid_light': color.mid_light,
    '--white': color.white,
    '--black': color.black,
    '--red': color.red,
    '--green': color.green,
}

export const gra1 = {
    '--gradient': bg1.gradient,
    '--gradient0': bg1.gradient0,
    '--gradient25': bg1.gradient25,
    '--gradient50': bg1.gradient50,
    '--gradient75': bg1.gradient75,
    '--gradient100': bg1.gradient100,
}

export const gra3 = {
    '--gradient': bg3.gradient,
    '--gradient0': bg3.gradient0,
    '--gradient25': bg3.gradient25,
    '--gradient50': bg3.gradient50,
    '--gradient75': bg3.gradient75,
    '--gradient100': bg3.gradient100,
}

export const gra4 = {
    '--gradient': bg4.gradient,
    '--gradient0': bg4.gradient0,
    '--gradient25': bg4.gradient25,
    '--gradient50': bg4.gradient50,
    '--gradient75': bg4.gradient75,
    '--gradient100': bg4.gradient100,
}