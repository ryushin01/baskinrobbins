import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="inner-wrap">
        <h1>
          <Link to="/">SR NOVEL</Link>
        </h1>

        <Link to="/search" className="link-search">
          검색 페이지 이동
        </Link>
      </div>
    </header>
  );
};

export default Header;
