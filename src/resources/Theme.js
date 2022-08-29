const size = {
    mobileXS: '281px',
    mobileS: '321px',
    mobileM: '375px',
    mobileL: '425px',
    mobile: '580px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px',
    height: '1024px',
  };
export const device = {
    mobileXS: `(max-width: ${size.mobileXS})`,
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
    height: `(min-height: ${size.height})`
  };

export const color = {
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

export const bg1 = {
    gradient:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient25:'linear-gradient(90deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(120deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient75:'linear-gradient(180deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(200deg, var(--secondary) 0%, var(--main) 40%, var(--primary) 85%, var(--secondary) 100%)',
};

export const bg2 = {
    gradient:'linear-gradient(20deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
    gradient0:'linear-gradient(70deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
    gradient25:'linear-gradient(30deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
    gradient50:'linear-gradient(60deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
    gradient75:'linear-gradient(40deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
    gradient100:'linear-gradient(50deg, var(--main) 0%, var(--primary) 30%, var(--mid) 65%, var(--secondary) 100%)',
};

export const bg3 = {
    gradient:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient25:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient75:'linear-gradient(30deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(70deg, var(--secondary) 0%, var(--main) 40%, var(--mid) 85%, var(--secondary) 100%)',
};

export const bg4 = {
    gradient:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient0:'linear-gradient(40deg, var(--main) 0%, var(--main) 50%, var(--mid) 65%, var(--secondary) 100%)',
    gradient25:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient50:'linear-gradient(40deg, var(--main) 0%, var(--main) 50%, var(--mid) 65%, var(--secondary) 100%)',
    gradient75:'linear-gradient(30deg, var(--main) 0%, var(--main) 30%, var(--primary) 85%, var(--secondary) 100%)',
    gradient100:'linear-gradient(40deg, var(--main) 0%, var(--primary) 50%, var(--mid) 65%, var(--secondary) 100%)',
};