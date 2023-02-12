import '../../assets/styles/home.scss';
import { useNavigate } from "react-router-dom";
import data from "../../staticData";
import Avatar from '../../assets/images/avatar.jpg';

const Home = () => {
    const { header } = data;
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="introduction">
            <h1>Hello</h1>
            <div className="sub_title">A Bit About Me</div>
            <div className="article">
                1+ years for the frontend Developer. Familiar with Vue.js, CSS, HTML, Javascript, RWD, and Git.
            </div>
            <div className="btn_wrap">
                {
                    header.map(item => (<button className='btn_hover' key={item.route} onClick={() => navigate(item.route) }>{item.name}</button>))
                }
            </div>
            </div>
        </div>
    )
}

export default Home