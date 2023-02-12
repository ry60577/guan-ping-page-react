import '../assets/styles/layout/footer.scss';

const Footer = () => {
    const handleOpenLinkedIn = () => {
        window.open('https://www.linkedin.com/in/guanping-chen-b1ab23198/')
      }
    return (
        <footer>
          <div className="copy_right">@ { new Date().getFullYear() } By Guan Ping Chen</div>
          <div className="contact_info">
            <a href="tel:+886-921-580-071">
              <i className="far fa-mobile"></i>
              +886-921-580-071
            </a>
            <a href="&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x72;&#x79;&#x36;&#x30;&#x35;&#x37;&#x37;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;">
              <i className="far fa-envelope"></i>
              &#x72;&#x79;&#x36;&#x30;&#x35;&#x37;&#x37;&#x40;&#x67;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;
            </a>
            <div onClick={handleOpenLinkedIn}>
              <i className="fab fa-linkedin"></i>
              GuanPing Chen
            </div>
          </div>
        </footer>
    )
}

export default Footer