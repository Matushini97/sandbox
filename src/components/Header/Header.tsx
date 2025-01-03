import { MainLinkStyled } from '../MainLink/MainLink';
import { NavLinks } from '../NavLinks/NavLinks';
import s from './Header.module.scss';

const Header = () => {
    return (
        <nav className={s.headerWrapper}>
            <MainLinkStyled href="/">Main</MainLinkStyled>
            <NavLinks />
        </nav>
    );
};

export default Header;
